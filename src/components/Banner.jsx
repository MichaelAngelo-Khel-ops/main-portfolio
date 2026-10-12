import "./Banner.css"

export default function Banner() {


    return (
      <div className="ms-banner">
        <div class="ms-banner-wrapper">
          <img src="" alt="" />

          <div class="ms-banner__background-overlay"></div>

          <div class="ms-banner__content">
            <div class="ms-banner__text">
              <h1 class="ms-banner__title ms-section-heading">
                Michael Angelo Salonga
              </h1>
              <span class="ms-banner__subtitle sub-heading">
                Transforming business ideas into responsive, reliable, and
                engaging digital experiences.
              </span>
            </div>

            <div class="ms-banner__button-container">
              <div class="ms-banner__button">
                <a
                  href=""
                  class="ms-banner__button-link ms-banner__button-portfolio button-primary"
                >
                  VIEW PORTFOLIO
                </a>
              </div>

              <div class="ms-banner__button ms-banner__button--contact">
                <a href="" class="ms-banner__button-link button-secondary">
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}