import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Exoplanets from "./Exoplanets";
import Info from "./Info";

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <nav className="d-flex flex-row justify-content-between align-items-center fixed-top">
          <div id="logoContainer" className="m-3">
            <img src="/assets/logoNoBg.png" alt="exoplore-logo" />
          </div>
          <div className="d-flex flex-row ">
            <Link to="/Home" className="text-decoration-none mx-4">
              {" "}
              <h2>Home </h2>
            </Link>
            <Link to="/Exoplanets" className="text-decoration-none mx-4">
              {" "}
              <h2>Exoplanets </h2>{" "}
            </Link>
            <Link to="/Info" className="text-decoration-none mx-4">
              <h2>Info </h2>{" "}
            </Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Exoplanets" element={<Exoplanets />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
