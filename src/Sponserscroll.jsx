import "./Sponserscroll.css";
import logo1 from "./assets/pizaa.png";
import logo2 from "./assets/bnoi.png";
import logo3 from "./assets/pnb.png";
import jj2 from "./assets/JJ2.png";
import logo5 from "./assets/3dx.png";
import logo4 from "./assets/globalpaints.png";
import organ5 from "./assets/aictelogo.png";
import organ1 from "./assets/gjustt.png";
import organ4 from "./assets/ideaphoto.png";
import organ2 from "./assets/iconnectorgan.png";
import organ3 from "./assets/logodual.png";
import organ6 from "./assets/organise2.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const sponsorLogos = [logo1, logo2, logo3, logo4,logo5];
const organiseLogos = [organ1, organ2, organ3, organ4,organ5, organ6];

function Sponserscroll() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,   // allow repeat on scroll
    mirror: true,  // animate again on scroll up
  });
}, []);


  return (
    <section className="sponserimg">
      <div className="sponsertitle" data-aos="fade-left">
        <h2>Organised by</h2>
        <div className="sponserline" data-aos="fade-right" ></div>

        <div className="organ-wrapper" data-aos="zoom-in" >
          <div className="organ-track">
            {[...organiseLogos, ...organiseLogos, ...organiseLogos].map((organ, index) => (
              <div className="organ-item" key={index}  data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={organ} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

         <h2>Powered by</h2>
        <div className="sponserline" data-aos="fade-right" ></div>
        <div className="coby">
          <img src={jj2} height="96.721px" width="366px" alt="Organised-By-Logo" />
        </div>

        <h2>Co-Powered by</h2>
        <div className="sponserline" data-aos="fade-right" ></div>

        <div className="carousel-wrapper" data-aos="zoom-in" >
          <div className="carousel-track">
            {[...sponsorLogos, ...sponsorLogos, ...sponsorLogos].map((logo, index) => (
              <div className="carousel-item" key={index}  data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={logo} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponserscroll;
