import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FolderKanban,
  House,
  Mail,
  Menu,
  Moon,
  UserRound,
  Wrench,
  X,
  Sun,
} from "lucide-react";
import { handleNavigation } from "./smoothScroll";
import "./Header.css";

const navigationLinks = [
  { label: "Home", href: "#Home", Icon: House },
  { label: "About", href: "#About", Icon: UserRound },
  { label: "Tools", href: "#Tools", Icon: Wrench },
  { label: "Projects", href: "#Projects", Icon: FolderKanban },
  { label: "Experience", href: "#Experience", Icon: BriefcaseBusiness },
  { label: "Contact", href: "#Contact", Icon: Mail },
];

function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function closeMenuOnEscape(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("keydown", closeMenuOnEscape);
    return () => document.removeEventListener("keydown", closeMenuOnEscape);
  }, [isMenuOpen]);

  function toggleTheme() {
    setIsLightMode((currentMode) => !currentMode);
  }

  return (
    <header>
      <div className="ms-header-container">
        <a
          href="#Home"
          onClick={(event) =>
            handleNavigation(event, "#Home", event.currentTarget.closest("header"))
          }
        >
          <h3 className="logo">MS</h3>
        </a>
        <div className="header-right">
          <nav
            className="header-nav"
            id="header-navigation"
            data-open={isMenuOpen}
            aria-label="Main navigation"
          >
            {navigationLinks.map(({ label, href, Icon }) => (
              <a
                href={href}
                className="header-nav__link"
                key={label}
                onClick={(event) => {
                  setIsMenuOpen(false);
                  handleNavigation(
                    event,
                    href,
                    event.currentTarget.closest("header"),
                  );
                }}
              >
                <Icon
                  className="header-nav__icon"
                  size={18}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
            aria-pressed={isLightMode}
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            className="ms-header__mobile-toggle"
            onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="header-navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
