import "../styles/app.css";

export default function WorkInfo() {
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
          />
        </li>
        <li>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Google Inc"
          />
        </li>
        <li>
          <label htmlFor="job-description">Job Description</label>
          <input
            type="text"
            name="job-description"
            id="job-description"
            placeholder="Google is Alphabet's largest subsidiary and is a holding company..."
          />
        </li>
        <li className="date-container">
          <div>
            <label htmlFor="work-start-date">Start Date</label>
            <input type="date" name="work-start-date" id="work-start-date" />
          </div>
          <div>
            <label htmlFor="work-end-date">End Date</label>
            <input type="date" name="work-end-date" id="work-end-date" />
          </div>
        </li>

        <li className="date-container">
          <div>
            <label htmlFor="work-start-date">Start Date</label>
            <input type="date" name="work-start-date" id="work-start-date" />
          </div>
          <div>
            <label htmlFor="work-end-date">End Date</label>
            <input type="date" name="work-end-date" id="work-end-date" />
          </div>
        </li>
      </ul>
      <button>
        <span>&#10003;</span>Save
      </button>
    </div>
  );
}
