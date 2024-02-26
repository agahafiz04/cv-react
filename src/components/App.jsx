import EducationInfo from "./Education";
import GeneralInfo from "./General";
import FinalOutput from "./Output";
import WorkInfo from "./Work";
import ToggleVisibility from "./Toggle";

/* eslint-disable react/prop-types */

export default function App() {
  return (
    <main>
      <section className="input-form">
        <ToggleVisibility name={"General Information"}>
          <GeneralInfo />
        </ToggleVisibility>

        <ToggleVisibility name={"Education"}>
          <EducationInfo />
        </ToggleVisibility>

        <ToggleVisibility name={"Work Experience"}>
          <WorkInfo />
        </ToggleVisibility>
      </section>
      <section className="cv-output">
        <FinalOutput />
      </section>
    </main>
  );
}
