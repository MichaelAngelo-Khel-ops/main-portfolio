import "./header.css";

function Header() {
  return (
    <header>
      <a href="#top">
        <h3 className="logo">MS</h3>
      </a>
      <div className="header-right">
        <nav>
          <a href="#top">Home</a>
          <a href="#top">About</a>
          <a href="#top">Tools</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          class="ms-header__mobile-toggle"
          id="mobile-menu-toggle-{{ section.id }}"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-menu-{{ section.id }}"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
