import "../styles/app.css";
import { GeneralOutput } from "./General";

export default function FinalOutput() {
  return (
    <div className="output">
      <h1 className="output-main-title">Curriculum Vitae</h1>
      <div className="cv-general">
        <GeneralOutput />
      </div>
      <div className="cv-education">
        <h2 className="cv-output-title">Education History</h2>
        <div className="cv-entry">
          <div className="cv-degree-school">
            <p className="degree">Computer Engineering</p>
            <p className="school">Diponegoro University</p>
          </div>
          <div className="cv-dates">
            <p className="cv-start-date">Feb, 2024</p>
            <p className="cv-end-date">Feb, 2028</p>
          </div>
          <div className="cv-education-place">
            <p className="city">Semarang</p>
            <p className="country">Indonesia</p>
          </div>
        </div>
      </div>
      <div className="cv-work">
        <h2 className="cv-output-title">Work Experience</h2>
        <div className="cv-entry">
          <div className="cv-job">
            <p className="cv-job-title">Software Engineering</p>
            <p className="cv-job-company">Google Inc</p>
          </div>
          <div className="cv-dates">
            <p className="cv-start-date">Feb, 2024</p>
            <p className="cv-end-date">Feb, 2028</p>
          </div>
          <div className="cv-job-place">
            <p className="cv-job-description">Bla Bla Bla...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
