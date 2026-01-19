import "./Faq.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Faq() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });
}, []);


  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const questions = [
    {
      question: "Who can participate in Konark'26?",
      answer: "Students of Guru Jambheshwar University of Science & Technology (GJUS&T) can participate in most events. Additionally, 4 selected events are Inter-University, allowing students from other universities to participate. Eligibility details are mentioned in the respective event rulebooks."
    },
    {
      question: "Is there any registration fee?",
      answer: "No. All events at Konark’26 are completely free of cost. There is no registration fee for any event."
    },
    {
      question: "What are the participation formats for different events?",
      answer: "Participation formats vary by event and may include individual or team-based participation. Details such as team size and structure are specified in each event’s rulebook."
    },
    {
      question: "Can I register for more than one event?",
      answer: "Yes, participants can register for multiple events, provided the event schedules do not overlap."
    },
    {
      question: "Are all the events offline?",
      answer: "Most events at Konark’26 are conducted offline at the GJUS&T campus. Some events may include online rounds or submissions, as mentioned in the rulebooks."
    },
    {
      question: "How will I recieve event updates and important information?",
      answer: "All updates, announcements, and instructions will be shared through official WhatsApp groups, email communication, and Konark’26 social media platforms."
    },
    {
      question: "What do participants and winners receive?",
      answer: "All participants will receive certificates of participation. Winners and top performers will receive certificates, prizes, recognition, and awards as per event guidelines."
    },
  ];

  return (
    <section id="faq" className="footerimg">
      <div className="faqtitle" data-aos="fade-down">
        <h2>{isMobile ? "FAQs" : "Frequently Asked Question"}</h2>
        <div className="faqline"></div>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item"  data-aos="fade-down" data-aos-delay={index * 100}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question} <i className='bx bx-chevron-down'></i>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
