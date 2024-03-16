import React, { useState, useEffect, useRef } from "react";

/*

https://builtin.com/software-engineering-perspectives/react-api

https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

https://www.youtube.com/watch?v=00lxm_doFYw

*/

const BASE_URL =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json";

interface Table {
  id: number;
  name: string;
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
        const response = await fetch(`${BASE_URL}/tables?page${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const tables = (await response.json()) as Table[];
        setTables(tables);
      } catch (e: any) {
        if (e.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(e);
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
          {table.map((table) => (
            <li key={table.id}>{table.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default GettingExoTables;
