import "./App.css";
import video from "./activity.mp4";
import React, { useState, useEffect } from "react";



function App() {

  const [tips, setTips] = useState("");

  const fetchTips = async () => {
  const response = await fetch("http://www.boredapi.com/api/activity/");
  const data = await response.json();
  setTips(data.activity);
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="App">
      <div className="container">
          <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          </video>
      </div>
      <div>
        <div className="list">
      <p> {tips} </p>
      </div>
      </div>
      <div className="btn ">
      <button onClick={fetchTips}>New Tip</button>
      </div>
    </div>
    
  );
}

export default App;