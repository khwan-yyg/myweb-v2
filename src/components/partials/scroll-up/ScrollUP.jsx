import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./scrollUP.css";

const ScrollUP = () => {
  const [ScrollUP, setScrollUP] = useState(false);
  useEffect(() => {
    const showScrollUP = () => {
      if (window.scrollY > 500) {
        setScrollUP(true);
      } else {
        setScrollUP(false);
      }
    };
    window.addEventListener("scroll", showScrollUP);
  });

  return (
    <Link to="home" className={ScrollUP ? "scrollup show-scroll" : "scrollup"}>
      <i className="bx bx-chevron-up"></i>
    </Link>
  );
};

export default ScrollUP;
