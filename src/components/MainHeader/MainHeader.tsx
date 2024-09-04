import LogoIcon from "../../assets/icons/Logo.tsx";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation.tsx";

import "./MainHeader.css";

export default function MainHeader() {
  return (
    <header className="main-header">
      <LogoIcon width="3rem" height="3rem" />
      <HeaderNavigation />
      <button className="main-header__cta">Contact us</button>
    </header>
  );
}
