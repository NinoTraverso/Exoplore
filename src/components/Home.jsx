import React, { useRef } from "react";

function Home() {
  const welcomeSectionRef = useRef(null);
  const exoplanetsSectionRef = useRef(null);
  const exoplanetDetectionSectionRef = useRef(null);
  const exoplanetLifeSectionRef = useRef(null);

  return (
    <div id="homePage" className="d-flex flex-row">
      <div id="homeContent" style={{ width: "95%" }}>
        <div ref={welcomeSectionRef} id="welcomeSection">
          <div
            id="welcomeText"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1>Welcome to Exoplore</h1>
          </div>
        </div>
        <div ref={exoplanetsSectionRef} id="exoplanetsSection">
          <div
            id="homeSectionTitle"
            className="d-flex flex-column justify-content-end align-items-center"
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>What are exoplanets?</h1>
          </div>
          <div className="d-flex flex-column justify-content-around align-items-center">
            <div id="sectionTwoImageContainer"></div>
            <div className="col-10 col-md-6 flex-wrap text-center">
              <h3 id="exoplanetsExplaination" className="my-5">
                Exoplanets are simply planets which orbit a star that is not the
                Sun. The first confirmed exoplanets were Poltergeist and
                Phobetor in 1992, orbiting pulsar PSR B1257+12. Since 1992, more
                than 5000 exoplanets have been discovered, including Earth-Like
                planets such as Kepler-425b and Kepler-22b.
              </h3>
              <div id="exoplanetsExplaination">
                <h3 id="exoplanetsExplaination" className="my-5">
                  Exoplanets can be subdived into four main categories: Ice
                  Giants (or Neptunians), Gas Giants, super-Earths and
                  terrestrial.
                </h3>
                <div id="exoplanetTypes" className="my-5">
                  <h3 id="exoplanetsExplaination">super-Earths</h3>

                  <h4 id="exoplanetsExplaination">
                    Planets which exceed the size of our terrestrial planets but
                    remain less massive than Neptunians. These can be composed
                    of rock and metals, or they can also be defined as
                    Mini-Neptunes, mainly composed of Hydrogen and Helium.
                  </h4>
                </div>
                <div id="exoplanetTypes" className="my-5">
                  <h3 id="exoplanetsExplaination">Terrestrial</h3>

                  <h4 id="exoplanetsExplaination">
                    Planets with similar sizes to our terrestrial planets,
                    mainly composed of rocks and metals.
                  </h4>
                </div>
                <div id="exoplanetTypes" className="my-5">
                  <h3 id="exoplanetsExplaination">Gas Giants</h3>

                  <h4 id="exoplanetsExplaination">
                    Planets similar to Jupiter and Saturn, gasseous planet
                    mainly composed of Hydrogen & Helium which can orbit very
                    close to their parent star.
                  </h4>
                </div>
                <div id="exoplanetTypes" className="my-5">
                  <h3 id="exoplanetsExplaination">Neptunians</h3>

                  <h4 id="exoplanetsExplaination">
                    Planets similar to Neptune and Uranus, gasseous planets
                    mainly composed of Hydrogen & Helium atmospheres and
                    rocky/heavy metal cores.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={exoplanetDetectionSectionRef} id="exoplanetDetectionSection">
          <div className="d-flex flex-column justify-content-end align-items-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="mb-5">How do we find exoplanets?</h1>
            <div className="d-flex flex-column justify-content-around align-items-center">
              <div id="sectionThreeImageContainer"></div>
              <div className="col-10 col-md-6 flex-wrap text-center">
                <h3 id="findingExoplanetsExplanation" className="my-5">
                  There are a variety of ways in which an exoplanet can be
                  detected, more precisely, there are five known ways to detect
                  them:
                </h3>
                <div id="efindingExoplanetsExplanation">
                  <div id="exoplanetDetection" className="my-5">
                    <h3 id="findingExoplanetsExplanation">Tansit</h3>

                    <h4 id="findingExoplanetsExplanation">
                      This technique allows us, the observer, to detect an
                      exoplanet when it passes in front of its parent star,
                      allowing us to measure a dip in the star's luminosity.
                    </h4>
                  </div>
                  <div id="exoplanetDetection" className="my-5">
                    <h3 id="findingExoplanetsExplanation">Radial Velocity</h3>

                    <h4 id="findingExoplanetsExplanation">
                      When observing a star its wavelength can be measured, and
                      if a planet is orbiting that star, then we can observe a
                      change in the star's luminosity, caused by the
                      "back-and-forth" gravitational pull of the planet on its
                      star, slightly changing the star's luminosity
                      &#40;wavelenght&#41;.
                    </h4>
                  </div>
                  <div id="exoplanetDetection" className="my-5">
                    <h3 id="findingExoplanetsExplanation">
                      Gravitational Microlensing
                    </h3>

                    <h4 id="findingExoplanetsExplanation">
                      This is when the light from a star is slight bent as the
                      exoplanet passes between us, the observer, and its parent
                      star.
                    </h4>
                  </div>
                  <div id="exoplanetDetection" className="my-5">
                    <h3 id="findingExoplanetsExplanation">Direct Imaging</h3>

                    <h4 id="findingExoplanetsExplanation">
                      Planets which can be detected by observing a star and
                      "covering" that star in order to view whethere there are
                      orbiting exoplanets, detected by the reflected light.
                    </h4>
                  </div>
                  <div id="exoplanetDetection" className="my-5">
                    <h3 id="findingExoplanetsExplanation">
                      Astrometry Measures
                    </h3>

                    <h4 id="findingExoplanetsExplanation">
                      A method which observes a star's "wobble" in the sky
                      compared to nearby stars.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={exoplanetLifeSectionRef} id="exoplanetLifeSection">
          <div
            id="homeSectionTitle"
            className="d-flex flex-column justify-content-end align-items-center"
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="mb-5">Is there extraterrestrial life?</h1>
            <div className="d-flex flex-column justify-content-around align-items-center">
              <div id="sectionFourImageContainer"></div>
              <div className="col-10 col-md-6 flex-wrap text-center">
                <h3 id="lifeExoplanetsExplanation" className="my-5">
                  To this day there have been no evidence of the existance of
                  extraterrestrial life both in our Solar System and exoplanets.
                  The question though can entail complicated considerations,
                  questions such as "Is other life like us?", "Are other life
                  forms as advance, or more advanced than us or is their
                  technology not advance yet to be detectable?", "If unlike us,
                  they have advanced technology, would we have the tools and
                  comprehension for how we can detect them?"
                </h3>
                <h3 id="lifeExoplanetsExplanation" className="my-5">
                  We cannot assume that extraterrestrial life, if any out there,
                  is like us in any way but rather we should assumed they are
                  completely different from us, similarly how different animals
                  on our planet breath, hear and see things differently from us.
                </h3>
                <h3 id="lifeExoplanetsExplanation" className="my-5">
                  Even if we discovered evidence of some sort of intelligent
                  life form, would we be able to communicate with them? Light
                  travel's at the fastest speed possible in the Universe,
                  ~300,000 km/s, so even if we detected intelligent life and
                  were able to send out a message, a planet distan 600-light
                  years would take that much time to reach the hypothetical
                  aliens, assuming they are listening for it.
                </h3>
                <h3 id="lifeExoplanetsExplanation" className="my-5">
                  It seems unlikely that we will be able to have direct
                  communication with hypothetical alien beings, although we
                  could still send out messages for any distant listener, and we
                  also are tuned for any incoming "space call" that might have
                  been sent.
                </h3>
                <h3 id="lifeExoplanetsExplanation" className="my-5">
                  Water is though to be the "universal" soluble for many reasons
                  - because of this, we are looking, among exoplanets, those in
                  the habitable zone, thought to be ideal for water to exist in
                  it's liquid form. Althogh other factors come in play for water
                  to exist in its liquid form &#40; a planet's albedo,
                  atmospheric composition, cloud presence, tidal heating,
                  primordial heating, green house gases, internal radioactive
                  decay... &#4; there is no reason to observe possible
                  Earth-like exoplanets and determine its habitability and
                  whether there is presence of biomakers &#40;such as ozone
                  -O3&#41;.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div id="homeEndImageContainer"></div>
      </div>
      <aside
        id="asideContent"
        style={{ width: "5%" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <button
          className="sectionOne my-3"
          onClick={() => {
            welcomeSectionRef.current?.scrollIntoView({ behavior: "auto" });
          }}
        ></button>
        <button
          className="sectionTwo my-3"
          onClick={() => {
            exoplanetsSectionRef.current?.scrollIntoView({
              behavior: "auto",
            });
          }}
        ></button>
        <button
          className="sectionThree my-3"
          onClick={() => {
            exoplanetDetectionSectionRef.current?.scrollIntoView({
              behavior: "auto",
            });
          }}
        ></button>
        <button
          className="sectionFour my-3"
          onClick={() => {
            exoplanetLifeSectionRef.current?.scrollIntoView({
              behavior: "auto",
            });
          }}
        ></button>
      </aside>
    </div>
  );
}

export default Home;
