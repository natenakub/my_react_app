import {useState} from 'react';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  setInterval(UpdateTime, 1000);
  let now = new Date().toLocaleTimeString('th-TH');
  var [time, setTime] = useState(now);
  const [num, setNum] = useState(0);

  function UpdateTime() {  
    let newTime = new Date().toLocaleTimeString('th-TH');
    setTime = newTime;
  }

  return (
    <div>
      <MyHeader />
      <div className="t_name">
        <div>ขนะนี้เวลา</div>
        <div>{ time }</div>
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>Add</button>
        <button onClick={()=>setNum(num-1)}>Delete</button>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
