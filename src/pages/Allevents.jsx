import "./Allevents.css"
// import keyimage from "../assets/comingsoon.jpeg";
import vision from "../assets/g.jpg";
import idea from "../assets/h.jpg";
import hacka from "../assets/i.jpg";
import cad from "../assets/e.jpg";
import sprint from "../assets/a.jpg";
import escape from "../assets/b.jpg";
import rube from "../assets/c.jpg";
import brainbat from "../assets/d.jpg";
import crown from "../assets/f.jpg";
import zone from "../assets/zone.jpg";
import konarklogo from "../assets/konark.png";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link,useLocation} from 'react-router-dom';

function Allevents() {

  const [showEsummitMessage, setShowEsummitMessage] = useState(false);

    const handleEsummitClick = (e) => {
    e.preventDefault();
    setShowEsummitMessage(true);
    setTimeout(() => {
      setShowEsummitMessage(false);
    }, 2500);
  };

    const [navOpen, setNavOpen] = useState(false);
    useEffect(() => {
    setNavOpen(false); // close on route change
  }, [location]);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,   // animations repeat when scrolled back
        mirror: true,  // animate on scroll up too
      });
    }, []);

    const handleScrollLink = (e, targetId) => {
  e.preventDefault();

  if (targetId === "home") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.location.href = `/#${targetId}`;
    }
  }

  setNavOpen(false);
};

    
    
      const [flippedIndexesRow1, setFlippedIndexesRow1] = useState([]);
const [flippedIndexesRow2, setFlippedIndexesRow2] = useState([]);
const [flippedIndexesRow3, setFlippedIndexesRow3] = useState([]);

const toggleFlipRow1 = (index) => {
  setFlippedIndexesRow1((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};

const toggleFlipRow2 = (index) => {
  setFlippedIndexesRow2((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};

const toggleFlipRow3 = (index) => {
  setFlippedIndexesRow3((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};
    
      const events = [
        {
          title: "VISIONATHON",
          date: "17th Feb 2026",
          image:vision,
          description:"Visionathon is an innovation-driven competition where participants design impactful, feasible solutions to real-world challenges through creativity, collaboration, and mentorship.",
          ruleBookLink: "https://drive.google.com/drive/folders/1d-jEhnqwtxxMDg6kD0V_QKjxZhMDkWdC?usp=sharing",
          registerLink: "https://unstop.com/competitions/visionathon-konark-2026-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1617986",
        },
        {
          title: "IDEATHON",
          date: "16th Feb 2026",
          image:idea,
          description:"IDEATHON is a creative ideation and poster presentation competition where students showcase innovative, impactful solutions to real-world challenges across diverse domains.",
          ruleBookLink: "https://drive.google.com/drive/folders/1XcPZ-bJInGX6SHtGh6_Ru9Ut3ygajVIO?usp=drive_link",
          registerLink: "https://unstop.com/p/ideathon-konark-2026-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1617990",
        },
        {
          title: "HACKATHON",
                  date: "16th-17th Feb 2026",
                  image:hacka,
                  description:"SustainTech Hackathon is a software-focused competition where students develop innovative, impactful, and technology-driven digital solutions to real-world sustainability challenges.",
                  ruleBookLink: "https://drive.google.com/drive/folders/1c0lVUXRmt8x_ShDlftGJQPGickgzAEGu?usp=sharing",
                  registerLink: "https://unstop.com/hackathons/sustain-tech-hackathon-konark26-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1617961",
        },
        {
          title: "CAD MASTERS",
          date: "16th Feb 2026",
          image:cad,
          description:"CAD MASTERS is a design-centric CAD modelling competition where participants create innovative, sustainable, and practical 3D solutions to real-world problems, with winning designs brought to life through 3D printing.",
          ruleBookLink: "https://drive.google.com/drive/folders/1y-nHi3qeh1ov3XdVH78ZI-fu1lv4HSCY?usp=sharing",
          registerLink: "https://unstop.com/p/cadmasters-konark26-guru-jambheshwar-university-of-science-and-technology-hisar-haryana-1623633",
        },
    ];

    const events2 = [
      {
        
        title: "AI SPRINT",
            date: "17th Feb 2026",
            image:sprint,
            description:"A creative AI competition where participants master prompt engineering to control, transform, and reverse-engineer AI-generated visuals through escalating challenges.",
            ruleBookLink: "https://drive.google.com/drive/folders/1ObEiqzqmeQ2phVbfZVFuanFih9JAPR4x?usp=sharing",
            registerLink: "https://forms.gle/QQGB2fFjbMvxjxUd8",
      },
      {
        title: "ESCAPE ROOM",
            date: "10th Feb 2026",
            image:escape,
            description:"An intense, time-bound escape-room challenge where teams use logic, collaboration, and problem-solving skills to override a locked-down system and escape before time runs out.",
            ruleBookLink: "https://drive.google.com/drive/folders/1MbSsEiTvPOzl2PK4vs0xiJaWDX3e14iR?usp=drive_link",
            registerLink: "https://forms.gle/XzhXtv3o86Sboihi9",
      },
      {
        title: "RUBE GOLDBERG",
            date: "16th Feb 2026",
            image:rube,
            description:"The Rube Goldberg Machine Challenge is a hands-on engineering competition where teams build creative, autonomous chain-reaction machines using mechanical energy to complete a final task through teamwork.",
            ruleBookLink: "https://drive.google.com/drive/folders/1ld1O1LR0GgjjuIYdJO_IrjegekIMTAxP?usp=sharing",
            registerLink: "https://forms.gle/5c9y5tb5g4zcaLd47",
      },
      {
        title: "BRAIN BATTLES",
            date: "16th Feb 2026",
            image:brainbat,
            description:"Brain Battles is a high-energy intellectual competition that tests critical thinking, rapid recall, and linguistic precision beyond traditional quizzes.",
            ruleBookLink: "https://drive.google.com/drive/folders/1lpCL9Vb8etxu9u4A94gFxjBe_tAGUaGc?usp=drive_link",
            registerLink: "https://forms.gle/JGDCxkC2uPK4wqy79",
      },
    ];
    const events3 = [
      {
        
        title: "CROWN FOR CODE",
            date: "17th Feb 2026",
            image:crown,
            description:"Crown for Code is a multi-round coding competition that challenges problem-solving, logic, and programming skills, culminating in a high-stakes final for top coders.",
            ruleBookLink: "https://drive.google.com/drive/folders/1Thxl48uOUO1QhYWidgPf8NaRC25snSxn?usp=drive_link",
            registerLink: "https://forms.gle/f3b9hKGivFmfpTgP9",
      },
      {
        title: "THE EXPO ZONE",
            date: "16th Feb 2026",
            image:zone,
            description:"Konark’26 Startup Showcase cum Exhibition provides a platform for student innovators and startups to exhibit their ideas, connect with a wider audience, and foster innovation through networking.",
            ruleBookLink: "",
            registerLink: "https://forms.gle/7L5yWRfzdFUgomsw9",
      },
    ];

  return (
    <>

       {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Coming Soon</div>}



        <section className="kkeyback">

        <div className="header">
                  <div className="glasscontainer">
                    <div className='logo'>
                      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          <img src={konarklogo} height="54px" width="199px" alt="E-Summit Logo" style={{ cursor: "pointer" }} />
                      </Link>
                      <div id="mobile" onClick={() => setNavOpen(!navOpen)}>
                      <i className='bx bx-menu'></i>
                    </div>
                    </div>
        
                    <div className="navlinks desktop-nav">
                      <ul id="navbar">
                        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
                        <li><a href="#about" onClick={(e) => handleScrollLink(e, "about")}>About</a></li>
                        <li><a href="#events" onClick={(e) => handleScrollLink(e, "events")}>Events</a></li>
                        <li><a href="#gallery" onClick={(e) => handleScrollLink(e, "gallery")}>Gallery</a></li>
                        <li><a href="#contact" onClick={(e) => handleScrollLink(e, "contact")}>Contact us</a></li>
                        <li><a href="#faq" onClick={(e) => handleScrollLink(e, "faq")}>FAQs</a></li>
                      </ul>
                    </div>
        
                    
                      <div className={`mobile-nav-wrapper ${navOpen ? "open" : ""}`}>
                    <div className="mobile-nav">
                      <ul id="navbar">
                        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
                        <li><a href="#about" onClick={(e) => {handleScrollLink(e, "about");setNavOpen(false);}}>About</a></li>
                        <li><a href="#events" onClick={(e) => {handleScrollLink(e, "events");setNavOpen(false);}}>Events</a></li>
                        <li><a href="#gallery" onClick={(e) => {handleScrollLink(e, "gallery");setNavOpen(false);}}>Gallery</a></li>
                        <li><a href="#contact" onClick={(e) => {handleScrollLink(e, "contact");setNavOpen(false);}}>Contact us</a></li>
                        <li><a href="#faq" onClick={(e) => {handleScrollLink(e, "faq");setNavOpen(false);}}>FAQ's</a></li>
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>



      <div className="kkeytitle" data-aos="fade-down">
        <h2>All Events</h2>
        <div className="kkeyline"></div>
      </div>

         <div className="ffourcardcontainer" data-aos="fade-right">
        {events.map((event, index) => (
          <div
            key={index}
            className={`ssmallcard ${flippedIndexesRow1.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlipRow1(index)}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <a href={event.ruleBookLink} className="ooutwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="iinwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="ffourcardcontainer" data-aos="fade-right">
        {events2.map((event, index) => (
          <div
            key={index}
            className={`ssmallcard ${flippedIndexesRow2.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlipRow2(index)}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                 <p>{event.description}</p>
                {/* <a href={event.ruleBookLink} className="ooutwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                <a href={event.registerLink} className="iinwhite" target="_blank" rel="noopener noreferrer">Register Now</a> */}

                                {event.comingSoon ? (
                  <>
                    <a onClick={handleEsummitClick} className="outwhite" role="button">Rule book</a>
                    <a onClick={handleEsummitClick} className="inwhite" role="button">Register Now</a>
                  </>
                ) : (
                  <>
                    <a href={event.ruleBookLink} className="outwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                    <a href={event.registerLink} className="inwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
                  </>
                )}



              </div>
            </div>
          </div>
        ))}
        </div>

        <div className="ffourcardcontainer" data-aos="fade-right">
        {events3.map((event, index) => (
          <div
            key={index}
            className={`ssmallcard ${flippedIndexesRow3.includes(index) ? "flipped" : ""}`}
            onClick={() => toggleFlipRow3(index)}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img src={event.image} loading="lazy" />
                <h2>{event.title}</h2>
                <div className="ssmallcardtext">
                  <p>{event.date}</p>
                  <a>Know More</a>
                </div>
              </div>
              <div className="ccard-back">
                <h2>{event.title}</h2>
                 <p>{event.description}</p>
                                {event.comingSoon ? (
                  <>
                    <a onClick={handleEsummitClick} className="outwhite" role="button">Rule book</a>
                    <a onClick={handleEsummitClick} className="inwhite" role="button">Register Now</a>
                  </>
                ) : (
                  <>
                    <a href={event.ruleBookLink} className="outwhite" target="_blank" rel="noopener noreferrer">Rule book</a>
                    <a href={event.registerLink} className="inwhite" target="_blank" rel="noopener noreferrer">Register Now</a>
                  </>
                )}



              </div>
            </div>
          </div>
        ))}
        </div>


      </section>
    </>
  )
}

export default Allevents