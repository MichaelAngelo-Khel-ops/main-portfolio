export default function Modal({ProjectImage, ProjectTitle, ProjectDescription}) {
    return (
      <div className="project-modal">
        <div className="project-modal__wrapper">
          <div className="project-modal__content">
            <div className="project-modal__text">
              <h3 className="project-modal__title">{ProjectTitle}</h3>
              <p className="project-modal__description">
                {ProjectDescription}
              </p>
            </div>

            <div className="project-modal__image">
              <img src={ProjectImage} alt={ProjectTitle} />
            </div>
          </div>
        </div>
      </div>
    );
}