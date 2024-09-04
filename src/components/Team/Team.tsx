import TeamIcon from "../../assets/icons/Team.tsx";

import { teamMembers } from "../../data/team.ts";
import Reveal from "../RevealAnimation.tsx";

import "./Team.css";

export default function Team() {
  const team = teamMembers.map(({ name, image, specialization }) => (
    <li key={name} className="team-member">
      <img
        src={image}
        alt="An image on one of our team members"
        className="team-member__image"
      />
      <h3 className="team-member__name">{name}</h3>
      <p className="team-member__specialization">{specialization}</p>
    </li>
  ));

  return (
    <Reveal renderAs="section" id="team" className="team">
      <div className="team__heading">
        <div className="team__icon-wrapper">
          <TeamIcon />
        </div>
        <h2 className="team__title">TEAM</h2>
      </div>
      <ul className="team-members">{team}</ul>
    </Reveal>
  );
}
