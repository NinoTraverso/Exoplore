import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row align-items-end">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <img src="/assets/logoNoBg.png" alt="exoplore-logo" />
        </div>
        <div>
          <h3>Copyright &#169; - {currentYear} - Exoplore</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
