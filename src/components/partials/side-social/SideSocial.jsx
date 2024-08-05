import { useState, useEffect } from "react";
import "./sideSocial.css";

const SideSocial = () => {
  const [SideSocial, setSideSocial] = useState(false);

  useEffect(() => {
    const showSideSocial = () => {
      if (window.scrollY > 500) {
        setSideSocial(true);
      } else {
        setSideSocial(false);
      }
    };
    window.addEventListener("scroll", showSideSocial);
  });

  return (
    <div
      className={
        SideSocial ? "side_container show-side_container" : "side_container "
      }
    >
      <a
        className="button__ghost button__ghost-side"
        target="_blank"
        href="tel:+66930460716"
        title="093 046 0716"
      >
        <i className="bx bx-phone"></i>
      </a>

      <a
        className="button__ghost button__ghost-side"
        target="_blank"
        href="mailto:khwan_yyg@outlook.com"
        title="khwan_yyg@outlook.com"
      >
        <i className="bx bx-envelope"></i>
      </a>
    </div>
  );
};

export default SideSocial;
