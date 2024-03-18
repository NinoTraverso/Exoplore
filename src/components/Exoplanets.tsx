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
  ra: number; //Right Ascension (deg)
  dec: number; //Declination (deg)
  koi_kepmag: number; //Kepler-band (mag)
  koi_gmag: number; //g-band mag
  koi_duration: number;
  koi_prad: number;
  koi_eccen: number;
  koi_ror: number; //planet/star radius ratio
  koi_sma: number; //orbit semi-major axis (AU)
  koi_count: number; //number of planets
  koi_steff: number; //star temperature (K)
  koi_smet: number; //stellar metallicity (The base-10 logarithm of the Fe to H ratio at the surface of the star, normalized by the solar Fe to H ratio)
  koi_srad: number; //Star radius in Solar Radii
  koi_smass: number; //Mass of the star in solar masses
  koi_sage: number; //stellar age in Gigayears
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
                    <span className="dataName">ID: </span>
                    {entry.kepid}| <span className="dataName">RA: </span>{" "}
                    {entry.ra} <span> deg </span>|{" "}
                    <span className="dataName">Dec: </span> {entry.dec}{" "}
                    <span> deg </span>|{" "}
                    <span className="dataName">Kepler-band: </span>{" "}
                    {entry.koi_kepmag} <span> mag </span>|{" "}
                    <span className="dataName">g-band: </span> {entry.koi_gmag}{" "}
                    <span> mag </span>|{" "}
                    <span className="dataName">Orbital Period: </span>{" "}
                    {entry.koi_period} <span> days </span>|{" "}
                    <span className="dataName">Transition duration:</span>{" "}
                    {entry.koi_duration} <span> hours</span>|{" "}
                    <span className="dataName">Planetary Radius: </span>{" "}
                    {entry.koi_prad} <span> Earth Radii </span>|{" "}
                    <span className="dataName">Orbit Semi-Major Axis: </span>{" "}
                    {entry.koi_sma} <span> AU </span>|{" "}
                    <span className="dataName">Eccentricity: </span>{" "}
                    {entry.koi_eccen} <span> </span>|{" "}
                    <span className="dataName">: </span> {entry.koi_prad}{" "}
                    <span> </span>|{" "}
                    <span className="dataName">Planets number: </span>{" "}
                    {entry.koi_count} <span> </span>|{" "}
                    <span className="dataName">Planet/Star Radius Ratio: </span>{" "}
                    {entry.koi_ror} <span> </span>|{" "}
                    <span className="dataName">Star Temperature: </span>{" "}
                    {entry.koi_steff} <span> Kelvin </span>|{" "}
                    <span className="dataName">Stellar Metallicity: </span>{" "}
                    {entry.koi_smet}{" "}
                    <span>
                      {" "}
                      The base-10 logarithm of the Fe to H ratio at the surface
                      of the star, normalized by the solar Fe to H ratio{" "}
                    </span>
                    | <span className="dataName">Star Radius: </span>{" "}
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
