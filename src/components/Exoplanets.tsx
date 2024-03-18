import React, { useState, useEffect, useRef } from "react";

/*

https://builtin.com/software-engineering-perspectives/react-api

https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

https://www.youtube.com/watch?v=00lxm_doFYw

*/

const BASE_URL =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json";

interface Table {
  koi_disposition: string; //Confirmed, Candidate, False Positive
  kepid: number; //kepler ID
  kepler_name: string; //kepler name
  ra_str: string; //Right Ascension (deg)
  dec_str: string; //Declination (deg)
  koi_kepmag: number; //Kepler-band (mag)
  koi_period: number; //Orbital period (days)
  koi_duration: number; //transit duration (hours)
  koi_prad: number; // plantary radius (Earth Radii)
  koi_teq: number; //Approximation for the temperature of the planet. The calculation of equilibrium temperature assumes a) thermodynamic equilibrium between the incident stellar flux and the radiated heat from the planet, b) a Bond albedo (the fraction of total power incident upon the planet scattered back into space) of 0.3, c) the planet and star are blackbodies, and d) the heat is evenly distributed between the day and night sides of the planet.
  koi_tce_plnt_num: number; //number of planets
  koi_steff: number; //star temperature (K)
  koi_srad: number; //Star radius (Solar Radii)
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

        console.log("API Response:", data);

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
      <br />

      {/*<button onClick={() => setPage(page + 1)}>Next ({page})</button>*/}

      {isLoading && (
        <div className="loadingHeight text-center d-flex align-items-center justify-content-center">
          <h1>
            Loading<span className="introTextDotOne">.</span>
            <span className="introTextDotTwo">.</span>
            <span className="introTextDotThree">.</span>
          </h1>
        </div>
      )}
      {!isLoading && (
        <div>
          <h1 className="text-center border-bottom bg-light">Exoplanets</h1>
          <ul>
            {table && table.length > 0 && (
              <ul>
                {table.map((entry) => (
                  <li key={entry.kepid}>
                    <span className="dataName">Status: </span>{" "}
                    {entry.koi_disposition}
                    {""}&#59; <span className="dataName">ID: </span>
                    {entry.kepid} {""}&#59;{" "}
                    <span className="dataName">Kep Name: </span>
                    {entry.kepler_name}
                    {""}&#59; <span className="dataName">RA: </span>{" "}
                    {entry.ra_str} {""}&#59;{" "}
                    <span className="dataName">Dec: </span> {entry.dec_str} {""}
                    &#59; <span className="dataName">Magnitude: </span>{" "}
                    {entry.koi_kepmag}
                    {""}&#59; <span className="dataName">Orbital Period: </span>{" "}
                    {entry.koi_period} <span> &#40;days&#41; </span>
                    {""}&#59;{" "}
                    <span className="dataName">Transition duration:</span>{" "}
                    {entry.koi_duration} <span> &#40;hours&#41;</span>
                    {""}&#59;{" "}
                    <span className="dataName">Planetary Radius: </span>{" "}
                    {entry.koi_prad} <span> &#40;Earth Radii&#41; </span>
                    {""}&#59; <span className="dataName"> ~T of Planet: </span>{" "}
                    {entry.koi_teq} <span> &#40;K&#41; </span>
                    {""}&#59; <span className="dataName">Planets number: </span>{" "}
                    {entry.koi_tce_plnt_num}
                    {""}&#59;{" "}
                    <span className="dataName">Star Temperature: </span>{" "}
                    {entry.koi_steff} <span> &#40;K&#41; </span>
                    {""}&#59; <span className="dataName">Star Radius: </span>{" "}
                    {entry.koi_srad} <span> &#40;Solar Radii&#41; </span>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
export default GettingExoTables;
