import { experiences } from "../JSData/Experience";
import ExperienceItem from "./ExperienceItem";
import "./Experiences.css";

export default function Experiences() {
  return (
    <section
      className="experiences-section"
      id="Experience"
      aria-labelledby="experiences-title"
    >
      <div className="experiences-section__container">
        <div className="experiences-section__heading">
          <h2 id="experiences-title">Experiences</h2>

          <span className="experiences-section__underline" aria-hidden="true" />
        </div>

        <div className="experiences-section__list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
