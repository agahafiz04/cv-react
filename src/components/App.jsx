/* eslint-disable react/prop-types */
import EducationInfo from "./Education";
import GeneralInfo from "./General";
import WorkInfo from "./Work";
import ToggleVisibility from "./Toggle";

import FinalOutput from "./FinalOutput";
import { useState } from "react";

export default function App() {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState([]);

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
          {/* <WorkInfo /> */}
        </ToggleVisibility>
      </section>
      <section className="cv-output">
        <FinalOutput general={general} education={education} />
      </section>
    </main>
  );
}
