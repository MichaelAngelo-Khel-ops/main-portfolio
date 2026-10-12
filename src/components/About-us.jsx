import "./About-us.css";
import image from "../assets/my-profile.jpg";
import AboutUsBlocks from "./AboutUsBlocks";

export default function AboutUs() {
    return (
      <div className="ms-about-us">
        <div class="ms-about__background-color"></div>
        <div className="ms-about-wrapper ">
          <div className="ms-about__content">
            <div className="ms-about__content-title">
              <h1 className="ms-section-heading">Background and Development</h1>
              <div className="div-underline"></div>
            </div>

            <div className="ms-about__content-wrapper">
              <div className="ms-about__content-image-container">
                <img
                  src={image}
                  alt="profile image"
                  className="ms-about__content-image"
                />
              </div>

              <div className="ms-about__content-text">
                <h3>From Account Manger to Developer</h3>
                <div className="ms-about__content-text">
                  <p>
                    After 6 years in sales, marketing, and account management, I
                    discovered that the problem-solving, attention to detail,
                    and client-focused mindset that shaped my career in the BPO
                    industry translate naturally into front-end and Shopify
                    development.
                  </p>
                  <p>
                    Today, I bring that same approach to building and
                    customizing Shopify stores—combining technical skills with a
                    strong understanding of client needs, business goals, and
                    user experience.
                  </p>
                  <p>
                    I believe great websites are more than just good-looking
                    designs. They should be reliable, purposeful, easy to use,
                    and built to help a business grow. My goal is to turn your
                    ideas into a Shopify experience you can confidently share
                    with your customers.
                  </p>
                </div>
                <div className="ms-about__content-brief">
                  <AboutUsBlocks
                    Icon={<i className="fa-brands fa-html5"></i>}
                    firstText="Analysis → "
                    secondText="Debugging"
                  />
                  <AboutUsBlocks
                    Icon={<i className="fa-brands fa-css3-alt"></i>}
                    firstText="Customer Service → "
                    secondText="User Experience"
                  />
                  <AboutUsBlocks
                    Icon={<i className="fa-brands fa-js-square"></i>}
                    firstText="Attention to Details → "
                    secondText="Code Quality"
                  />
                  <AboutUsBlocks
                    Icon={<i className="fa-brands fa-react"></i>}
                    firstText="Output → "
                    secondText="Production"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}