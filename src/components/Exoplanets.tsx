import React, { useState, useEffect, useRef } from "react";

/*

https://builtin.com/software-engineering-perspectives/react-api

https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

https://www.youtube.com/watch?v=00lxm_doFYw

*/

const BASE_URL =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json";

interface Table {
  kepid: number;
  koi_period: number;
  koi_duration: number;
  koi_prad: number;
}

function GettingExoTables() {
  const [error, setError] = useState();
  const [table, setTables] = useState<Table[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchTables = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}&page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTables(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTables();
  }, [page]);
  if (error) {
    return <div>Something went wrong, reload the page.</div>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-center">Exoplanet Data</h1>

      {/*<button onClick={() => setPage(page + 1)}>Next ({page})</button>*/}

      {isLoading && (
        <div>
          Loading<span className="introTextDotOne">.</span>
          <span className="introTextDotTwo">.</span>
          <span className="introTextDotThree">.</span>
        </div>
      )}
      {!isLoading && (
        <ul>
          {table && table.length > 0 && (
            <ul>
              {table.map((entry) => (
                <li key={entry.kepid}>
                  <span>ID: </span>
                  {entry.kepid} | <span>Orbital Period: </span>
                  {entry.koi_period} <span> days</span> !{" "}
                  <span>Transidion duration:</span> {entry.koi_duration}{" "}
                  <span> hours</span> | <span>Planetary Radius: </span>{" "}
                  {entry.koi_prad} <span>Earth Radii </span>
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
    </div>
  );
}
export default GettingExoTables;
