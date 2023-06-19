import React, { useState, useEffect } from 'react';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('th-TH'));
  const [num, setNum] = useState(0);
  const [isPrimeNumber, setIsPrimeNumber] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const checkPrime = isPrime(num);
    setIsPrimeNumber(checkPrime);
  }, [num]);
  
  function updateTime() {
    const newTime = new Date().toLocaleTimeString('th-TH');
    setTime(newTime);
  }

  function isPrime(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  return (
    <div>
      <MyHeader />
      <div className="t_name">
        <div>ขณะนี้เวลา</div>
        <div>{time}</div>
        <h2>{num}</h2>
        <button onClick={() => setNum(num + 1)}>Add</button>
        <button onClick={() => setNum(num - 1)}>Delete</button>
        <div>{isPrimeNumber ? <p>เป็นจำนวนเฉพาะ</p> : <p>ไม่เป็นจำนวนเฉพาะ</p>}</div>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
