import "./Homeabout.css";
import lowball from "./assets/blueball.png";
import highball from "./assets/bluehighball.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Homeabout() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false ,mirror: true});
  }, []);

  return (
    <>
      <section id="about" className="abback">
        <div className="abtitle" data-aos="fade-down">
          <h2>About Konark</h2>
          <div className="abline"></div>
        </div>

        <div className="ablowball">
          <img src={lowball} alt="Low Purple Ball" />
        </div>
        <div className="abhighball">
          <img src={highball} alt="High Purple Ball" />
        </div>

        <div className="absection">
          <div className="abcont">
            <div className="ableft" data-aos="fade-right">
              <div className="ableftup">
                <h3>What is Konark ?</h3>
                <p>
                 Konark’26 is the flagship techno-cultural and innovation fest of GJUST, bringing together students, startups, creators, and industry experts on one platform. The fest celebrates technology, entrepreneurship, creativity, and collaboration through competitions, exhibitions, workshops, and interactive experiences.
                </p>
              </div>
              <div className="ableftbel">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to create a platform that promotes innovation, creativity, and collaboration among students and startups. Konark’26 bridges ideas and execution by offering exposure, learning, and real-world opportunities, empowering young minds to turn vision into impact.
                </p>
              </div>
            </div>

            <div className="abright" data-aos="fade-left">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/gHFVHLdL7dM"
                  title="E-Summit Promo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* <div className="ablower" data-aos="fade-left">
            <div className="abox">
              <h2>400K+</h2>
              <p>Social Media Impressions</p>
            </div>
            <div className="abox">
              <h2>7K+</h2>
              <p>Footfall last year</p>
            </div>
            <div className="abox">
              <h2>10+</h2>
              <p>Events</p>
            </div>
            <div className="abox">
              <h2>25+</h2>
              <p>Startups</p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Homeabout;
