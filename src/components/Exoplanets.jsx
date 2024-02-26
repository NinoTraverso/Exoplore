import React, { useState, useEffect } from "react";

/*

https://builtin.com/software-engineering-perspectives/react-api

https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

*/

function ExoplanetsTables() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .then((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

function Exoplanets() {
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
      <h1>Here the data from the API will be displayed. </h1>
      <h1>
        Adding some more text as I think on how to finish developing this web
        app
      </h1>
      <h1>
        Table should have a search function and filter function as well to look
        exactly at some of the information.
      </h1>

      <h2>
        Loading<span className="introTextDotOne">.</span>
        <span className="introTextDotTwo">.</span>
        <span className="introTextDotThree">.</span>
        {ExoplanetsTables}
      </h2>
    </div>
  );
}

export default Exoplanets;
