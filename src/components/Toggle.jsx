/* eslint-disable react/prop-types */
import "../styles/app.css";
import { useState } from "react";

export default function ToggleVisibility({ children, name }) {
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow(!show);
  }

  const buttonText = show ? "Hide" : "Show";

  const myStyle = {
    display: "block",
  };

  if (show) {
    myStyle.display = "block";
  } else {
    myStyle.display = "none";
  }

  return (
    <div className="component-container">
      <div className="toggle-title">
        <h1>{name}</h1>
        <button className="toggle-button" onClick={toggleShow}>
          {buttonText}
        </button>
      </div>

      <div style={myStyle}>{children}</div>
    </div>
  );
}
