import "./Header.css";

function Header() {
  return (
    <header>
      <a href="#Home">
        <h3 className="logo">MS</h3>
      </a>
      <div className="header-right">
        <nav>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Tools">Tools</a>
          <a href="#Projects">Projects</a>
          <a href="#Experience">Experience</a>
          <a href="#Contact">Contact</a>
        </nav>
        <button
          type="button"
          class="ms-header__mobile-toggle"
          id="mobile-menu-toggle"
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
