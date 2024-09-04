import EdgeIcon from "../../assets/icons/Edge.tsx";
import BrainIcon from "../../assets/icons/Brain.tsx";
import CirclesIcon from "../../assets/icons/Circles.tsx";
import PortfolioIcon from "../../assets/icons/Portfolio.tsx";
import CreativityIcon from "../../assets/icons/Creativity.tsx";

import "./Portfolio.css";
import Reveal from "../RevealAnimation.tsx";

export default function Portfolio() {
  return (
    <Reveal renderAs="section" id="portfolio" className="portfolio">
      <div className="portfolio__heading">
        <div className="portfolio__icon-wrapper">
          <PortfolioIcon />
        </div>
        <h2 className="portfolio__title">PORTFOLIO</h2>
      </div>
      <button className="portfolio__show-all-btn">Show all</button>
      <EdgeIcon style={{ right: 0, top: 0, transform: "scaleY(-1)" }} />
      <EdgeIcon style={{ left: 0, bottom: 0, transform: "scaleX(-1)" }} />
      <EdgeIcon style={{ right: 0, bottom: 0 }} />
      <CreativityIcon className="portfolio__creativity-icon" />
      <div className="portfolio__circles-icon-wrapper">
        <CirclesIcon
          color="#151918"
          width="100%"
          height="100%"
          style={{ scale: "2" }}
        />
      </div>{" "}
      <div className="portfolio__brain-icon-wrapper">
        <BrainIcon />
      </div>
    </Reveal>
  );
}
