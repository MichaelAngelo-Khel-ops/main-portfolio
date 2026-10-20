import "./Tools.css";
import { toolBlocks } from "../JSData/ToolsBlock";
import ToolsBlock from "./ToolsBlock/ToolsBlock.jsx";
import { IconCarousel } from "../JSData/ToolsIconSlide.js";
import Reveal from "./Reveal";

export default function Tools() {
    return (
      <div id="Tools" className="ms-tools-wrapper" tabIndex={-1}>
        <div className="ms-tools__title">
          <h1 className="ms-section-heading">My Inventory</h1>
          <div className="div-underline"></div>
        </div>

        <div className="ms-tools__content">
          <Reveal>
            <div className="ms-tools__items">
              {toolBlocks.map(({ id, name, subName, icon: Icon, tools }) => (
                <ToolsBlock
                  key={id}
                  blockTitle={name}
                  blockDescription={subName}
                  icon={<Icon className="box-icon" />}
                  toolsList={tools}
                />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="ms-tools__content-text">
              <h3>TECHNICAL EXPERTISE</h3>
              <div className="ms-tools__description">
                <p>
                  My toolkit brings together Shopify Liquid, JavaScript, React,
                  HTML, and CSS to create thoughtful, responsive digital
                  experiences. I specialize in Shopify theme development, custom
                  sections and blocks, metafields, Shopify APIs, and B2B
                  storefronts—turning business requirements into interfaces that
                  are both purposeful and easy to use.
                </p>
                <p>
                  From interactive front-end experiences with GSAP to
                  version-controlled development with Git and GitHub and
                  deployment through Vercel, I approach each project with an
                  emphasis on clean implementation, usability, and reliable
                  performance.
                </p>
                <p>
                  My background in sales, account management, and learning
                  development taught me that successful projects start with
                  understanding people. I bring that same mindset into
                  development: listen carefully, understand the problem,
                  communicate clearly, and build solutions that work.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="ms-tools-slider">
            <div className="ms-tools-slider-track">
              {[0, 1].map((copy) => (
                <div
                  className="ms-tools-slide-container"
                  key={copy}
                  aria-hidden={copy === 1}
                >
                  {IconCarousel.map(({ name, icon }) => (
                    <div className="ms-tools-slide" key={name}>
                      <img src={icon} alt={copy === 0 ? name : ""} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}