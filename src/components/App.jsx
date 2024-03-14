/* eslint-disable react/prop-types */
import EducationInfo from "./Education";
import GeneralInfo from "./General";
import WorkInfo from "./Work";
import ToggleVisibility from "./Toggle";

import FinalOutput from "./FinalOutput";
import { useState } from "react";

export default function App() {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState([
    {
      degree: "",
      school: "",
      city: "",
      country: "",
      // description: "",
      startDate: "",
      endDate: "",
      id: 0,
    },
  ]);
  const [work, setWork] = useState([
    {
      jobTitle: "",
      company: "",
      jobDescription: "",
      workStartDate: "",
      workEndDate: "",
      id: 0,
    },
  ]);

  return (
    <main>
      <section className="input-form">
        <ToggleVisibility name={"General Information"}>
          <GeneralInfo general={general} setGeneral={setGeneral} />
        </ToggleVisibility>

        <ToggleVisibility name={"Education"}>
          <EducationInfo education={education} setEducation={setEducation} />
        </ToggleVisibility>

        <ToggleVisibility name={"Work Experience"}>
          <WorkInfo work={work} setWork={setWork} />
        </ToggleVisibility>
      </section>
      <section className="cv-output">
        <FinalOutput general={general} education={education} work={work} />
      </section>
    </main>
  );
}
