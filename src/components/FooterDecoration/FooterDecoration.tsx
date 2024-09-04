import CirclesIcon from "../../assets/icons/Circles.tsx";

import "./FooterDecoration.css";

export default function FooterDecoration() {
  return (
    <ul className="main-footer__decoration-circles">
      <li className="main-footer__circle">
        <CirclesIcon className="main-footer__circles-icon" color="#cdc9bf" />
      </li>
      <li className="main-footer__circle">
        <CirclesIcon className="main-footer__circles-icon" color="#735821" />
      </li>
      <li className="main-footer__circle">
        <CirclesIcon className="main-footer__circles-icon" color="#56315d" />
      </li>
    </ul>
  );
}
