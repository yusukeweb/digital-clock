import React, {useState, useEffect} from 'react';
import './App.css';

const App: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      const timeString = `${hours}:${minutes}:${seconds}`;
      setTime(timeString);
    };

    // 初期表示用
    updateClock();

    // 1秒ごとに時計を更新
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <div id='clock'>{time}</div>
    </div>
  );

};

export default App;