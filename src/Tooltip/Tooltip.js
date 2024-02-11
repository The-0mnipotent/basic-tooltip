import "./Tooltip.css";

import React from "react";

function Tooltip({ position, toolTipText, children }) {
  console.log("tooltip-", position);
  return (
    <div className="tooltip-trigger">
      {children}
      <div className={`tooltip tooltip-${position}`}>{toolTipText}</div>
    </div>
  );
}

export default Tooltip;
