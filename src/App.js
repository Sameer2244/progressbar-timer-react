import React, { useState, useEffect, useRef } from 'react';
import './style.css';
export default function App() {
  const [timer, setTimer] = useState(100);

  const timeout = useRef(0);
  useEffect(() => {
    timeout.current = setTimeout(function () {
      if (timer > 0) setTimer((e) => e - 1);
      else setTimer(0);
    }, 1000);
    return () => {
      clearTimeout(timeout.current);
    };
  }, [timer]);

  return (
    <div style={{ width: '80vw' }}>
      <p>{timer} Seconds</p>
      <div className="timer" style={{ width: `${100 - timer}%` }}></div>
    </div>
  );
}
