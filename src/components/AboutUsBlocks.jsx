import "./AboutUsBlocks.css";

export default function AboutUsBlocks({ Icon, firstText, secondText }) {
  return (
    <div className="about-container">
      {Icon}

      <div className="about-container__text-content sub-heading">
        <p>
          <span className="about-container__text-title">{firstText}</span>
          <span className="about-container__text-type">{secondText}</span>
        </p>
      </div>
    </div>
  );
}