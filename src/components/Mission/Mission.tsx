import Reveal from "../RevealAnimation.tsx";
import MissionIcon from "../../assets/icons/Mision.tsx";

import "./Mission.css";

export default function Mission() {
  return (
    <Reveal renderAs="section" id="mission" className="mission">
      <MissionIcon width="100%" height="100%" />
      <h2 className="mission__title">MISSION</h2>

      <div className="mission__text-wrapper">
        <p className="mission__objective">Empowering Business with Code...</p>
        <p className="mission__details">
          At Minds, we trust in technology's ability to effectivly spread your
          message. Our mission is to craft tailored programming solutions that
          inhance your brand's reach and success.
        </p>
      </div>
    </Reveal>
  );
}
