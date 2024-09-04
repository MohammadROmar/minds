import Reveal from "../RevealAnimation.tsx";
import ServicesIcon from "../../assets/icons/Services.tsx";

import { services } from "../../data/services.ts";

import "./Services.css";

export default function Services() {
  const serviceItems = services.map(({ icon: Icon, title }) => (
    <li key={title} className="service">
      <Icon className="service__icon" />
      <h3 className="service__title">{title}</h3>
    </li>
  ));

  return (
    <Reveal renderAs="section" id="services" className="services">
      <div className="services__icon-wrapper">
        <ServicesIcon width="100%" height="100%" />
      </div>
      <h2 className="services__title">SERVICES</h2>
      <ul className="services-list">{serviceItems}</ul>
    </Reveal>
  );
}
