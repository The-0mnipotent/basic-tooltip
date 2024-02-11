import { useState } from "react";
import "./App.css";
import Tooltip from "./Tooltip/Tooltip";

function App() {
  const [position, setPosition] = useState("top");
  function handleChange() {
    setPosition(document.getElementById("position").value);
    console.log(document.getElementById("position").value);
  }

  return (
    <div className="App">
      <select id="position" onChange={() => handleChange()}>
        <option value="top">TOP</option>
        <option value="left">LEFT</option>
        <option value="right">RIGHT</option>
        <option value="bottom">BOTTOM</option>
      </select>
      <Tooltip position={position} toolTipText="ToolTip Text">
        <button>Tooltip Button</button>
      </Tooltip>
    </div>
  );
}

export default App;
