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
  koi_period: number; //Orbital period (days)
  koi_kepmag: number; //Kepler-band (mag)
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
        <div>
          <ul>
            {table && table.length > 0 && (
              <ul>
                {table.map((entry) => (
                  <li key={entry.kepid}>
                    <span className="dataName">Status: </span>{" "}
                    {entry.koi_disposition}|{" "}
                    <span className="dataName">ID: </span>
                    {entry.kepid}| <span className="dataName">Kep Name: </span>
                    {entry.kepler_name}| <span className="dataName">RA: </span>{" "}
                    {entry.ra_str} | <span className="dataName">Dec: </span>{" "}
                    {entry.dec_str}|{" "}
                    <span className="dataName">Orbital Period: </span>{" "}
                    {entry.koi_period} <span> days </span>|{" "}
                    <span className="dataName">Orbital Period: </span>{" "}
                    {entry.koi_period} <span> days </span>|{" "}
                    <span className="dataName">Transition duration:</span>{" "}
                    {entry.koi_duration} <span> hours</span>|{" "}
                    <span className="dataName">Planetary Radius: </span>{" "}
                    {entry.koi_prad} <span> Earth Radii </span>|{" "}
                    <span className="dataName">Eccentricity: </span>{" "}
                    {entry.koi_eccen} <span> </span>|{" "}
                    <span className="dataName">: </span> {entry.koi_prad}{" "}
                    <span> </span>|{" "}
                    <span className="dataName">Planets number: </span>{" "}
                    {entry.koi_tce_plnt_num} <span> </span>|{" "}
                    <span className="dataName">Planet/Star Radius Ratio: </span>{" "}
                    {entry.koi_ror} <span> </span>|{" "}
                    <span className="dataName">Star Temperature: </span>{" "}
                    {entry.koi_steff} <span> Kelvin </span>|{" "}
                    <span className="dataName">Stellar Metallicity: </span>{" "}
                    {entry.koi_smet}
                    <span></span>| {""}{" "}
                    <span className="dataName">Star Radius: </span>{" "}
                    {entry.koi_srad} <span> Solar Radii </span>|{" "}
                    <span className="dataName">Stellar mass: </span>{" "}
                    {entry.koi_smass} <span> Solar Masses </span>|{" "}
                    <span className="dataName">Stellar Age: </span>{" "}
                    {entry.koi_sage} <span> Gigayears </span>
                  </li>
                ))}
              </ul>
            )}
          </ul>
          <h1>Just adding some text</h1>
        </div>
      )}
    </div>
  );
}
export default GettingExoTables;
