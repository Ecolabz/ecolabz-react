import HeroIconSide from "../assets/icons/hero-icon-side.svg";
import HeroIconSubtract from "../assets/icons/hero-icon-subtract.svg";
import HeroIconStar from "../assets/icons/hero-icon-star.svg";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <img
          src={HeroIconSide}
          alt="Hero icon side"
          className="hero-icon-side"
        />
        <img
          src={HeroIconSubtract}
          alt="Hero icon subtract"
          className="hero-icon-subtract"
        />
        <img
          src={HeroIconStar}
          alt="Hero icon start"
          className="hero-icon-star"
        />
        <div className="hero-content">
          <h1>Fostering Innovation.<br/>From Ideation to scaling.<br/>Paving the Path to Success.</h1>
          <p>
            Building products with a Mission to Transform Africa's Challenges into Global Solutions.
          </p>
          <div className="call-to-action">
            <Link to="/contact" className="contact">
              Let's Talk
            </Link>
            <Link to="/portfolio" className="view-works">
              Portfolio
            </Link>
          </div>
        </div>
        <img
          src={HeroIconSubtract}
          alt="Hero icon subtract"
          className="hero-icon-subtract-end"
        />
      </div>
    </>
  );
};

export default HeroSection;
