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
  kepoi_name: string;
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

      <button onClick={() => setPage(page + 1)}>Next ({page})</button>
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
                  {entry.kepid} | {entry.kepoi_name}
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
