import { useEffect, useState } from "react";
import "./Countdown.css";

export default function CountdownPopup() {
  const calculateTimeLeft = () => {
  const eventDate = new Date("2026-02-16T09:00:00+05:30").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="countdown">
      
      <div className="time-boxes">
        <button className="closebtn" onClick={() => setVisible(false)}><i className='bx bx-x'></i></button>
        <div><span>{timeLeft.days}</span>Days</div>
        <div><span>{timeLeft.hours}</span>Hrs</div>
        <div><span>{timeLeft.minutes}</span>Min</div>
        <div><span>{timeLeft.seconds}</span>Sec</div>
      </div>
    </div>
  );
}
