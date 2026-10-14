import "./AboutUsBlocks.css";

export default function AboutUsBlocks({ Icon, firstText, secondText }) {
  return (
    <div className="about-container border-hover">
      {Icon}

      <div className="about-container__text-content">
        <p>
          <span className="about-container__text-title">{firstText}</span>
          <span className="about-container__text-type">{secondText}</span>
        </p>
      </div>
    </div>
  );
}