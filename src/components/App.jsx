import "../styles/app.css";

function GeneralInfo() {
  return (
    <div className="general-info form">
      <h1>General Information</h1>
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Robert Downy Jr."
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </li>
        <li>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" placeholder="762-900-299" />
        </li>
        <li>
          <label htmlFor="city">City & Country</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Los Angeles - United States Of America"
          />
        </li>
      </ul>
      <button>
        <span>&#10003;</span>Save
      </button>
    </div>
  );
}

function EducationInfo() {
  return (
    <div className="education-info form">
      <h1>Education</h1>
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
        <li>
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

function WorkInfo() {
  return (
    <div className="work-info form">
      <h1>Work Experience</h1>
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
        <li>
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

function FinalOutput() {
  return (
    <div className="output">
      <h1>Curriculum Vitae</h1>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <section className="input-form">
        <GeneralInfo />
        <EducationInfo />
        <WorkInfo />
      </section>
      <section className="cv-output">
        <FinalOutput />
      </section>
    </main>
  );
}
