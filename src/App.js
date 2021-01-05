import "./App.css";
import React from "react";
import Stories from "./components/stories";
import HorizontalCustomLabels from "./components/slider";
import AnimatedTab from "./components/tabs";

function App() {
  return (
    <div className="App">
      <Stories />
      <AnimatedTab>
        <HorizontalCustomLabels
          
        />
      </AnimatedTab>
    </div>
  );
}

export default App;
