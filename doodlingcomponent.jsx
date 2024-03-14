export function Sembarang() {
  return (
    <div className="cv-education">
      <h2 className="cv-output-title">Education History</h2>
      {education.map((eduItem) => (
        <div key={eduItem.id} className="cv-entry">
          <p className="degree">{eduItem.degree}</p>
          <div className="cv-dates">
            <p className="cv-start-date">
              {format(eduItem.startDate, "MM/dd/yyyy")}
            </p>
            {"-"}
            <p className="cv-end-date">
              {format(eduItem.endDate, "MM/dd/yyyy")}
            </p>
          </div>
          <p className="school">{eduItem.school}</p>
          <div className="cv-education-place">
            <p className="city">{eduItem.city}</p>
            <p className="country">{eduItem.country}</p>
          </div>
          <p className="description">{eduItem.description}</p>
        </div>
      ))}
    </div>
  );
}

//

/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/app.css";

let nextId = 1;

export default function EducationInfo({ education, setEducation }) {
  const [inputValue, setInputValue] = useState({
    degree: "",
    school: "",
    city: "",
    description: "",
    startDate: "",
    endDate: "",
    id: 0,
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

      case "eduCity":
        setInputValue({ ...inputValue, city: event.target.value });
        break;

      case "eduCountry":
        setInputValue({ ...inputValue, country: event.target.value });
        break;

      case "description":
        setInputValue({ ...inputValue, description: event.target.value });
        break;

      default:
        break;
    }
  }

  function handleSave() {
    const inputVal = Object.values(inputValue);

    if (inputVal.includes("")) {
      console.error("There is an empty value!");
      return;
    }

    setInputValue({ ...inputValue, id: nextId++ });
    setEducation([...education, inputValue]);
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
            maxLength={35}
          />
        </li>
        <li>
          <label htmlFor="eduCity">City</label>
          <input
            type="text"
            name="eduCity"
            id="eduCity"
            placeholder="Semarang"
            value={inputValue.city || ""}
            onChange={handleChange}
            maxLength={15}
          />
        </li>
        <li>
          <label htmlFor="eduCountry">Country</label>
          <input
            type="text"
            name="eduCountry"
            id="eduCountry"
            placeholder="Indonesia"
            value={inputValue.country || ""}
            onChange={handleChange}
            maxLength={15}
          />
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Insert description here"
            cols="20"
            rows="10"
            value={inputValue.description}
            onChange={handleChange}></textarea>
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
