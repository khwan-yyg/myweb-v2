import "./header.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { LanguageSelector } from "../language-selector/LanguageSelector";
import DarkMode from "../darkmode/DarkMode";

const Header = () => {
  /*=============== Change Background When Scroll ===============*/
  const [scrollHeader, setScrollHeader] = useState(false);
  const [scrollLogo, setScrollLogo] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY > 50) {
        setScrollHeader(true);
        setScrollLogo(true);
      } else {
        setScrollHeader(false);
        setScrollLogo(false);
      }
    };
    window.addEventListener("scroll", changeNav);
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, ShowMenu] = useState(false);
  /*=============== Toggle Menu close when click Link ===============*/
  const [activeLink, setActiveLink] = useState(true);

  /*=============== Close nav__menu When Click outside ===============*/
  const menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        ShowMenu(false);
        setActiveLink(true);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <header className={scrollHeader ? "header scroll-header" : "header"}>
      <nav className="nav container">
        <Link className="nav__logo" to="home" smooth={true} duration={100}>
          <p>{scrollLogo ? "Khwan-yyg" : "Khwankamon"}</p>
        </Link>

        <div
          className={
            Toggle === activeLink ? "nav__menu show-menu" : "nav__menu"
          }
          ref={menuRef}
        >
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Khwan-yyg</h3>

          <ul className="nav__list">
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="nav__link-active"
                spy={true}
                to="home"
                smooth={true}
                duration={100}
                onClick={() => setActiveLink(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="nav__link-active"
                spy={true}
                to="resumes"
                smooth={true}
                duration={100}
                onClick={() => setActiveLink(false)}
              >
                Resume
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="nav__link-active"
                spy={true}
                to="projects"
                smooth={true}
                duration={100}
                onClick={() => setActiveLink(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="nav__link-active"
                spy={true}
                to="contact"
                smooth={true}
                duration={100}
                onClick={() => setActiveLink(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" onClick={() => ShowMenu(!Toggle)}>
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <LanguageSelector />

          <DarkMode />

          <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
            <i className="bx bx-menu-alt-right"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
