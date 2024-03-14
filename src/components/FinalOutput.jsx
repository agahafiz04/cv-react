/* eslint-disable react/prop-types */
import "../styles/app.css";
import { format } from "date-fns";

export default function FinalOutputs({ general, education, work }) {
  return (
    <div className="output">
      <div className="cv-general">
        <h1 className="output-main-title">{general.fullName}</h1>
        <div>
          {general.email && <p className="email">&#9993; {general.email}</p>}
          {general.phone && <p className="phone">&#128222; {general.phone}</p>}
          {general.address && (
            <p className="address">&#127968; {general.address}</p>
          )}
        </div>
      </div>
      <div className="cv-education">
        <h2 className="cv-output-title">Education History</h2>
        {education.map((eduItem) => (
          <div key={eduItem.id} className="cv-entry">
            <p className="degree">{eduItem.degree}</p>
            <div className="cv-dates">
              {eduItem.startDate && (
                <p className="cv-start-date">
                  {format(eduItem.startDate, "MM/dd/yyyy")}
                </p>
              )}
              {eduItem.startDate && eduItem.endDate && "-"}
              {eduItem.endDate && (
                <p className="cv-end-date">
                  {format(eduItem.endDate, "MM/dd/yyyy")}
                </p>
              )}
            </div>
            <p className="school">{eduItem.school}</p>
            <div className="cv-education-place">
              {eduItem.city && <p className="city">{eduItem.city}</p>}
              <p className="country">{eduItem.country}</p>
            </div>
            <p className="description">{eduItem.description}</p>
          </div>
        ))}
      </div>
      <div className="cv-work">
        <h2 className="cv-output-title">Work Experience</h2>
        {work.map((workItem) => (
          <div key={workItem.id} className="cv-entry">
            <div className="cv-job">
              {workItem.jobTitle && (
                <p className="cv-job-title">{workItem.jobTitle}</p>
              )}
              <p className="cv-job-company">{workItem.company}</p>
            </div>
            <div className="cv-dates">
              {workItem.workStartDate && (
                <p className="cv-start-date">
                  {format(workItem.workStartDate, "MM/dd/yyyy")}
                </p>
              )}
              {workItem.workStartDate && workItem.workEndDate && "-"}
              {workItem.workEndDate && (
                <p className="cv-end-date">
                  {format(workItem.workEndDate, "MM/dd/yyyy")}
                </p>
              )}
            </div>
            <p className="cv-job-description">{workItem.jobDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
