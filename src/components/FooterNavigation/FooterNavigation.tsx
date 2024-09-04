import { footerNavigationItems } from "../../data/footer-navigation.ts";

import "./FooterNavigation.css";

export default function FooterNavigation() {
  const navigationLinks = footerNavigationItems.map(({ title, to }) => (
    <li key={title} className="main-footer__navigation-item">
      <a href={to} className="main-footer__navigation-link">
        {title}
      </a>
    </li>
  ));

  return (
    <nav className="main-footer__navigation">
      <ul className="main-footer__navigation-list">{navigationLinks}</ul>
    </nav>
  );
}
