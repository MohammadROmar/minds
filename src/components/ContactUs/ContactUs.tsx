import IdeaIcon from "../../assets/icons/Idea.tsx";
import EmailIcon from "../../assets/icons/Email.tsx";

import "./ContactUs.css";
import Reveal from "../RevealAnimation.tsx";

export default function ContactUs() {
  return (
    <Reveal renderAs="section" id="contact" className="contact">
      <div className="contact__wrapper">
        <h3 className="contact__title">Contact us</h3>
        <div className="contact__email-wrapper">
          <EmailIcon />
          <p className="contact__email">minds.sd@gmail.com</p>
        </div>
      </div>
      <IdeaIcon />
    </Reveal>
  );
}
