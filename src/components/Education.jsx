/* eslint-disable react/prop-types */
import "../styles/app.css";

let nextId = 0;

export default function EducationInfos({ education, setEducation }) {
  function handleChange(event) {
    switch (event.target.id) {
      case "degree":
        setEducation([
          ...education.slice(0, -1),
          { ...education[nextId], degree: event.target.value },
        ]);
        break;

      case "school":
        setEducation([
          ...education.slice(0, -1),
          { ...education[nextId], school: event.target.value },
        ]);
        break;

      case "education-start-date":
        setEducation([
          ...education.slice(0, -1),
          { ...education[nextId], startDate: event.target.value },
        ]);
        break;

      case "education-end-date":
        setEducation([
          ...education.slice(0, -1),
          { ...education[nextId], endDate: event.target.value },
        ]);
        break;

      case "eduCity":
        setEducation([
          ...education.slice(0, -1),
          { ...education[nextId], city: event.target.value },
        ]);
        break;

      case "eduCountry":
        setEducation([
          ...education.slice(0, -1),
          { ...education[nextId], country: event.target.value },
        ]);
        break;

      // case "description":
      //   setEducation([
      //     ...education.slice(0, -1),
      //     { ...education[nextId], description: event.target.value },
      //   ]);
      //   break;

      default:
        break;
    }
  }

  function handleSave() {
    const inputVal = Object.values(education[nextId]);

    console.log(inputVal);

    if (inputVal.includes("")) {
      console.error("There is an empty value!");
      return;
    }

    setEducation([
      ...education,
      {
        degree: "",
        school: "",
        city: "",
        country: "",
        // description: "",
        startDate: "",
        endDate: "",
        id: ++nextId,
      },
    ]);
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
            value={education[nextId].degree || ""}
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
            value={education[nextId].school || ""}
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
            value={education[nextId].city || ""}
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
            value={education[nextId].country || ""}
            onChange={handleChange}
            maxLength={15}
          />
        </li>
        {/* <li>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Insert description here"
            cols="10"
            rows="7"
            value={education[nextId].description}
            onChange={handleChange}></textarea>
        </li> */}
        <li className="date-container">
          <div>
            <label htmlFor="education-start-date">Start Date</label>
            <input
              type="date"
              name="education-start-date"
              id="education-start-date"
              value={education[nextId].startDate || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="education-end-date">End Date</label>
            <input
              type="date"
              name="education-end-date"
              id="education-end-date"
              value={education[nextId].endDate || ""}
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
