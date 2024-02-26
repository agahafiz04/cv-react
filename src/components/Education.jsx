import "../styles/app.css";

export default function EducationInfo() {
  return (
    <div className="education-info form">
      <ul>
        <li>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Bachelor Of Computer Engineering"
          />
        </li>
        <li>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Diponegoro University"
          />
        </li>
        <li className="date-container">
          <div>
            <label htmlFor="education-start-date">Start Date</label>
            <input
              type="date"
              name="education-start-date"
              id="education-start-date"
            />
          </div>
          <div>
            <label htmlFor="education-end-date">End Date</label>
            <input
              type="date"
              name="education-end-date"
              id="education-end-date"
            />
          </div>
        </li>
      </ul>
      <button>
        <span>&#10003;</span>Save
      </button>
    </div>
  );
}
