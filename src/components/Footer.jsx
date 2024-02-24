import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row justify-content-between">
      <div className="d-flex flex-column flex-md-row align-items-center">
        <img src="/assets/logoNoBg.png" alt="exoplore-logo" />
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center">
        <h4 className="mx-3">Copyright &#169; {currentYear} - Exoplore</h4>
      </div>
    </footer>
  );
}

export default Footer;
