import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(900); // 900 seconds = 15 minutes

  useEffect(() => {
    if (remainingTime <= 0) {
      // Countdown reached zero
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <div>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
