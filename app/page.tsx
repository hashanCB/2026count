"use client";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const futureDate = new Date("2026-12-31T23:59:59");
      const difference = futureDate.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        setTotalHours(hours);
      } else {
        clearInterval(interval);
        setTotalHours(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h1 className="title">2026 Countdown</h1>
      <div className="countdown-timer">
        <div className="timer-box">
          <div className="timer-value">{totalHours}</div>
          <div className="timer-label">Hours Remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
