import "./HeaderNavigation.css";

export default function HeaderNavigation() {
  return (
    <nav className="main-header__navigation">
      <ul className="main-header__navigation-list">
        <li className="main-header__navigation-item">
          <a href="#" className="main-header__navigation-link">
            Home
          </a>
        </li>
        <li className="main-header__navigation-item">
          <a href="#services" className="main-header__navigation-link">
            Services
          </a>
        </li>
        <li className="main-header__navigation-item">
          <a href="#portfolio" className="main-header__navigation-link">
            Portfolio
          </a>
        </li>
        <li className="main-header__navigation-item">
          <a href="#about" className="main-header__navigation-link">
            About us
          </a>
        </li>
        <li className="main-header__navigation-item">
          <a href="#contact" className="main-header__navigation-link">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
