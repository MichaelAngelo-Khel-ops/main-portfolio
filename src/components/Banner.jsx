import "./Banner.css"

export default function Banner() {


    return (
      <div className="ms-banner" id="Home" tabIndex={-1}>
        <div className="ms-banner-wrapper">
          <img src="" alt="" />

          <div className="ms-banner__background-overlay"></div>

          <div className="ms-banner__content">
            <div className="ms-banner__text">
              <h1 className="ms-banner__title">
                Michael Angelo{" "}
                <span className="ms-banner-heading">Salonga</span>
              </h1>
              <span className="ms-banner__subtitle sub-heading">
                Transforming business ideas into responsive, reliable, and
                engaging digital experiences.
              </span>
            </div>

            <div className="ms-banner__button-container">
              <div className="ms-banner__button">
                <a
                  href="#Projects"
                  className="ms-banner__button-link ms-banner__button-portfolio button-primary"
                >
                  VIEW PORTFOLIO
                </a>
              </div>

              <div className="ms-banner__button ms-banner__button--contact">
                <a
                  href="#Contact"
                  className="ms-banner__button-link button-secondary"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}