/* eslint-disable react/prop-types */
import "../styles/app.css";

let nextId = 0;

export default function WorkInfo({ work, setWork }) {
  console.log(work);

  function handleChange(event) {
    switch (event.target.id) {
      case "job-title":
        setWork([
          ...work.slice(0, -1),
          { ...work[nextId], jobTitle: event.target.value },
        ]);
        break;

      case "company":
        setWork([
          ...work.slice(0, -1),
          { ...work[nextId], company: event.target.value },
        ]);
        break;

      case "job-description":
        setWork([
          ...work.slice(0, -1),
          { ...work[nextId], jobDescription: event.target.value },
        ]);
        break;

      case "work-start-date":
        setWork([
          ...work.slice(0, -1),
          { ...work[nextId], workStartDate: event.target.value },
        ]);
        break;

      case "work-end-date":
        setWork([
          ...work.slice(0, -1),
          { ...work[nextId], workEndDate: event.target.value },
        ]);
        break;

      default:
        break;
    }
  }

  function handleSave() {
    const inputVal = Object.values(work[nextId]);

    console.log(inputVal);

    if (inputVal.includes("")) {
      console.error("There is an empty value!");
      return;
    }

    setWork([
      ...work,
      {
        jobTitle: "",
        company: "",
        jobDescription: "",
        workStartDate: "",
        workEndDate: "",
        id: ++nextId,
      },
    ]);
  }

  return (
    <div className="work-info form">
      <ul>
        <li>
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            name="job-title"
            id="job-title"
            placeholder="Software Developer"
            value={work[nextId].jobTitle || ""}
            onChange={handleChange}
            maxLength={25}
          />
        </li>
        <li>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Google Inc"
            value={work[nextId].company || ""}
            onChange={handleChange}
            maxLength={25}
          />
        </li>
        <li>
          <label htmlFor="job-description">Description</label>
          <textarea
            name="job-description"
            id="job-description"
            placeholder="Insert the job description here"
            cols="10"
            rows="7"
            value={work[nextId].jobDescription || ""}
            onChange={handleChange}></textarea>
        </li>
        <li className="date-container">
          <div>
            <label htmlFor="work-start-date">Start Date</label>
            <input
              type="date"
              name="work-start-date"
              id="work-start-date"
              value={work[nextId].workStartDate || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="work-end-date">End Date</label>
            <input
              type="date"
              name="work-end-date"
              id="work-end-date"
              value={work[nextId].workEndDate || ""}
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
