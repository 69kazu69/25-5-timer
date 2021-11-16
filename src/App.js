import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [message, setMessage] = useState(false);


     useEffect(() => {
    
      let interval = setInterval(() =>
       {
        clearInterval(interval);

        if(seconds === 0){
          if(minutes !== 0){
              setSeconds(59);
              setMinutes(minutes - 1);
          }else{
              let  minutes = message ? 24 : 4;
              let seconds = 59;

              setSeconds(seconds);
              setMinutes(minutes);
              setMessage(!message);
          }
        }else{
          setSeconds(seconds - 1)
        }
      }, 1000);

  
  }, [seconds]);

  const min = minutes < 10 ? `0${minutes}`: minutes;    
  const sec = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="App">
      <header className="App-header">
        {message && <div className="App-meessage">Starts in : </div>}
        <div className = 'timer'>
          {min}:{sec}
        </div>
      </header>
    </div>
  );
}

export default App;
