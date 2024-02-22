import React from "react";

/* , { useState, useEffect } */

/*"https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json" */

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

      <h2>
        Loading<span className="introTextDotOne">.</span>
        <span className="introTextDotTwo">.</span>
        <span className="introTextDotThree">.</span>
      </h2>
    </div>
  );
}

export default Exoplanets;
