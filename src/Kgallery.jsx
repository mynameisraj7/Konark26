import "./Kgallery.css";
import logo1 from "./assets/glim1.jpeg";
import logo2 from "./assets/glim2.jpeg";
import logo3 from "./assets/glim3.jpeg";
import logo4 from "./assets/glim4.jpeg";
import logo5 from "./assets/glim5.jpeg";
import logo6 from "./assets/glim6.jpeg";
import logo7 from "./assets/glim7.jpeg";
import logo8 from "./assets/glim8.jpeg";
import logo9 from "./assets/glim9.jpeg";
import logo10 from "./assets/glim10.jpeg";
import logo11 from "./assets/glim11.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Mansory from './Mansory';

function Homegallery() {
const items = [
  { id: "1", img: logo1, url: "#", height: 380 },
  { id: "2", img: logo2, url: "#", height: 380 },
  { id: "3", img: logo3, url: "#", height: 280 },
  { id: "4", img: logo4, url: "#", height: 600 },
  { id: "5", img: logo5, url: "#", height: 350 },
  { id: "6", img: logo6, url: "#", height: 310 },
  { id: "7", img: logo7, url: "#", height: 550 },
  { id: "8", img: logo8, url: "#", height: 680 },
  { id: "9", img: logo9, url: "#", height: 630 },
  { id: "10", img: logo10, url: "#", height:570 },
  { id: "11", img: logo11, url: "#", height: 330 },
];

 const scrollItems = [...items, ...items];

  return (
    <>
      <section id="gallery" className="whitegallery">
        
        <div className="gallerytitle" data-aos="fade-down">
            <h2>Glimpses of past Events</h2>
        <div className="galleryline"></div>
        </div>
        <Mansory
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </section>
    </>
  );
}

export default Homegallery;
