import { useEffect, useState } from "react";
import "../header/header.css";

const DarkMode = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <i
        className="change-theme"
        id="theme-button"
        onClick={() => setIsClicked(!isClicked) || toggleTheme()}
      >
        {isClicked ? (
          <i className="bx bxs-sun" />
        ) : (
          <i className="bx bxs-moon" />
        )}
      </i>
    </>
  );
};

export default DarkMode;
