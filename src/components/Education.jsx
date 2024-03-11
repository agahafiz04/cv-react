/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/app.css";

let nextId = 0;

export default function EducationInfo({ education, setEducation }) {
  const [inputValue, setInputValue] = useState({
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(event) {
    switch (event.target.id) {
      case "degree":
        setInputValue({ ...inputValue, degree: event.target.value });
        break;

      case "school":
        setInputValue({ ...inputValue, school: event.target.value });
        break;

      case "education-start-date":
        setInputValue({ ...inputValue, startDate: event.target.value });
        break;

      case "education-end-date":
        setInputValue({ ...inputValue, endDate: event.target.value });
        break;

      default:
        break;
    }
  }

  function handleSave() {
    const inputVal = Object.values(inputValue);
    console.log(inputVal);

    if (inputVal.length !== 5) {
      console.error("Please input all of the value");
      return;
    } else {
      setInputValue({ ...inputValue, id: nextId++ });
      setEducation([...education, inputValue]);
    }

    console.log(education);
  }

  return (
    <div className="education-info form">
      <ul>
        <li>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Computer Engineering"
            value={inputValue.degree || ""}
            onChange={handleChange}
            maxLength={30}
          />
        </li>
        <li>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Diponegoro University"
            value={inputValue.school || ""}
            onChange={handleChange}
            maxLength={30}
          />
        </li>
        <li className="date-container">
          <div>
            <label htmlFor="education-start-date">Start Date</label>
            <input
              type="date"
              name="education-start-date"
              id="education-start-date"
              value={inputValue.startDate || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="education-end-date">End Date</label>
            <input
              type="date"
              name="education-end-date"
              id="education-end-date"
              value={inputValue.endDate || ""}
              onChange={handleChange}
            />
          </div>
        </li>
      </ul>
      <button onClick={handleSave}>
        <span>&#10003;</span>Save
      </button>
    </div>
  );
}
