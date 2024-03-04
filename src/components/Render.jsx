/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Save({ inputType, inputValue }) {
  const [object, setObject] = useState([]);

  function handleSave() {
    const inputVal = Object.values(inputValue);

    for (let i = 0; i < inputVal.length; i++) {
      if (inputVal[i] === "") {
        console.error("Please input all of the value");
        return;
      }
    }

    switch (inputType) {
      case "test":
        break;

      default:
        break;
    }
  }

  return (
    <>
      <SaveButton buttonClick={handleSave} />
    </>
  );
}

function SaveButton({ buttonClick }) {
  return (
    <button onClick={buttonClick}>
      <span>&#10003;</span>Save
    </button>
  );
}
