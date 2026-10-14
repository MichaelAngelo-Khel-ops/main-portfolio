import { handleNavigation } from "./smoothScroll";
import "./Navbar.css";

const navigation = [
  { label: "Home", href: "#Home" },
  { label: "Projects", href: "#Projects" },
  { label: "Experiences", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a
        href="#Home"
        className="navbar__logo"
        onClick={(event) =>
          handleNavigation(event, "#Home", event.currentTarget.closest(".navbar"))
        }
      >
        Portfolio
      </a>

      <ul className="navbar__links">
        {navigation.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(event) =>
                handleNavigation(
                  event,
                  item.href,
                  event.currentTarget.closest(".navbar"),
                )
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
