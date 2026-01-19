import "./Keyevents.css";
import vision from "./assets/g.jpg";
import idea from "./assets/h.jpg";
// import keyimage from "./assets/comingsoon.jpeg";
import hacka from "./assets/i.jpg";
import cad from "./assets/e.jpg";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


function Keyevents() {


  const [showEsummitMessage, setShowEsummitMessage] = useState(false);

    const handleEsummitClick = (e) => {
    e.preventDefault();
    setShowEsummitMessage(true);
    setTimeout(() => {
      setShowEsummitMessage(false);
    }, 2500);
  };



  
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,   // animations repeat when scrolled back
    mirror: true,  // animate on scroll up too
  });
}, []);


  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const toggleFlip = (index) => {
    setFlippedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


  const events = [
  {
    title: "Visonthon",
    date: "26th August 2025",
    image:vision,
    description:"Visionathon is an innovation-driven competition where participants design impactful, feasible solutions to real-world challenges through creativity, collaboration, and mentorship.",
    ruleBookLink: "https://drive.google.com/drive/folders/1d-jEhnqwtxxMDg6kD0V_QKjxZhMDkWdC?usp=sharing",
    registerLink: "https://unstop.com/competitions/visionathon-konark-2026-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1617986",
  },
  {
    title: "Ideathon",
    date: "25th August 2025",
    image:idea,
    description:"IDEATHON is a creative ideation and poster presentation competition where students showcase innovative, impactful solutions to real-world challenges across diverse domains.",
    ruleBookLink: "https://drive.google.com/drive/folders/1XcPZ-bJInGX6SHtGh6_Ru9Ut3ygajVIO?usp=drive_link",
    registerLink: "https://unstop.com/p/ideathon-konark-2026-guru-jambheshwar-university-of-science-and-technology-hisar",
  },
  {
    title: "Tech Hackathon",
            date: "26th August 2025",
            image:hacka,
            description:"SustainTech Hackathon is a software-focused competition where students develop innovative, impactful, and technology-driven digital solutions to real-world sustainability challenges.",
            ruleBookLink: "https://drive.google.com/drive/folders/1c0lVUXRmt8x_ShDlftGJQPGickgzAEGu?usp=sharing",
            registerLink: "https://unstop.com/hackathons/sustain-tech-hackathon-konark26-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1617961",
  },
  {
    title: "CAD Masters",
    date: "25th August 2025",
    image:cad,
    description:"CAD MASTERS is a design-centric CAD modelling competition where participants create innovative, sustainable, and practical 3D solutions to real-world problems, with winning designs brought to life through 3D printing.",
    ruleBookLink: "https://drive.google.com/drive/folders/1y-nHi3qeh1ov3XdVH78ZI-fu1lv4HSCY?usp=sharing",
    registerLink: "https://unstop.com/p/cadmasters-konark26-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1623633",
  },
];


  return (
    <>

     {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Coming Soon</div>}

    <section id="events" className="keyback">
      <div className="keytitle" data-aos="fade-down">
        <h2>Key Events</h2>
        <div className="keyline"></div>
      </div>

      <div className="fourcardcontainer" data-aos="fade-right">
        {events.map((event, index) => (
          <div
            key={index}
            className={`smallcard ${flippedIndexes.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="smallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="card-back">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <a href={event.ruleBookLink} className="outwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="inwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="morecardscont" data-aos="fade-up">
        <Link to="/more-events" className="morecards">View all Events</Link>

      </div>
    </section>
    </>
  );
}

export default Keyevents;
