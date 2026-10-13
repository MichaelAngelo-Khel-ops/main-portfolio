import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./Header.css";

function Header() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  function toggleTheme() {
    setIsLightMode((currentMode) => !currentMode);
  }

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
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
          aria-pressed={isLightMode}
        >
          {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
