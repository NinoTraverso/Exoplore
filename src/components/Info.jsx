import React from "react";

function Info() {
  return (
    <div id="infoSection">
      <div style={{ height: "20vh" }}>
        {/* THIS DIV IS JUST TO CREATE SPACE BETWEEN THE NAVBAR AND THE INFO CONTENT */}
      </div>

      <h1 className="text-center my-5">About Exoplore</h1>
      <div className="mx-3 my-5">
        <h3>Description:</h3>
        <h5>
          "Exoplore" is a React-based web application designed to showcase data
          on exoplanets sourced from NASA's API. With sleek and intuitive
          design, this project offers users a comprehensive look into the vast
          expanse of exoplanetary discoveries.
        </h5>
        <h3>Features:</h3>
        <ul>
          <li>
            NASA API Integration: Leveraging NASA's API, our project aggregates
            a wealth of data on exoplanets, including their names, discovery
            methods, and orbital characteristics.
          </li>
          <li>
            Interactive Tables: Through user-friendly tables, users can easily
            navigate and explore the extensive database of exoplanets. Each
            entry provides detailed information, allowing enthusiasts to dive
            deep into the world of exoplanetary science.
          </li>
        </ul>
        <h3>Objective:</h3>
        <h5>
          The primary goal of "Exoplore" is to provide a seamless and engaging
          platform for users to learn about exoplanets. Whether you're a space
          enthusiast, student, or researcher, this project offers a captivating
          glimpse into the wonders of the cosmos beyond our solar system.
        </h5>
      </div>
      <div>
        <h3>You can find out more about this project on Github. </h3>
        <div className="text-decoration-none m-3">
          <a
            href="www.google.com"
            className="repoLink text-decoration-none text-white"
          >
            <i class="devicon-github-original-wordmark"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
