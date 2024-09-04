import Team from "../../components/Team/Team.tsx";
import HeadIcon from "../../assets/icons/Head.tsx";
import Mission from "../../components/Mission/Mission.tsx";
import Services from "../../components/Services/Services.tsx";
import ContactUs from "../../components/ContactUs/ContactUs.tsx";
import Portfolio from "../../components/Portfolio/Portfolio.tsx";
import LandingPageHero from "../../components/LandingPageHero/LandingPageHero.tsx";

import "./Landing.css";

export default function LandingPage() {
  return (
    <>
      <LandingPageHero />
      <div className="services-wrapper">
        <Mission />
        <Services />
        <HeadIcon width="10rem" className="services__wrapper-icon" />
      </div>
      <Portfolio />
      <ContactUs />
      <Team />
    </>
  );
}
