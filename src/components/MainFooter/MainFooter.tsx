import LogoIcon from "../../assets/icons/Logo.tsx";
import HalfCircleIcon from "../../assets/icons/HalfCircle.tsx";
import FooterDecoration from "../FooterDecoration/FooterDecoration.tsx";
import FooterNavigation from "../FooterNavigation/FooterNavigation.tsx";
import SocialMediaAccounts from "../SocialMediaAccounts/SocialMediaAccounts.tsx";

import "./MainFooter.css";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__brand">
        <LogoIcon />
        <p className="main-footer__title">Software Solutions{" </>"}</p>
        <SocialMediaAccounts className="main-footer__social-media-icons" />
        <FooterNavigation />
      </div>

      <HalfCircleIcon />
      <FooterDecoration />

      <p className="main-footer__rights">MINDS 2024, all rights reserved</p>
    </footer>
  );
}
