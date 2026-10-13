import { formatExperienceRange } from "../utils/formatExperienceDate";

export default function ExperienceItem({ experience }) {
  const { role, company, startDate, endDate, highlights } = experience;

  return (
    <article className="experience">
      <div className="experience__header">
        <div className="experience__info">
          <h3 className="experience__role">{role}</h3>

          <p className="experience__company">{company}</p>
        </div>

        <p className="experience__date">
          {formatExperienceRange(startDate, endDate)}
        </p>
      </div>

      <ul className="experience__highlights">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
