import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Mapcontainer from "./components/map";
function App() {
  return (
    <div className="App">
      <div class="header">
        <a
          href="https://www.speedlinesolutions.com"
          rel=" noopener"
          linktext=""
        >
          <img
            src="https://www.speedlinesolutions.com/hubfs/Speedline-logo-png.png"
            alt="SpeedLine Solution Inc."
            title="Speedline-logo-png.png"
          />
        </a>
        <h1>Weather App</h1>
      </div>
      <p>Click on the pointers of map to know the wheather conditions</p>
      <Mapcontainer />
    </div>
  );
}

export default App;
