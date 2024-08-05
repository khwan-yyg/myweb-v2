import "./languageSelector.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "th", lang: "TH" },
    { code: "en", lang: "EN" },
  ];

  const [langActiveId, setlangActiveId] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setlangActiveId(lng);
  };

  return (
    <>
      <ul className="langue__container" title="langueChange">
        {languages.map((lang, index) => {
          return (
            <li
              onClick={() => changeLanguage(lang.code)}
              key={index}
              className={
                langActiveId == lang.code
                  ? "langue__btn langue__btn-active "
                  : "langue__btn"
              }
            >
              {lang.lang}
            </li>
          );
        })}
      </ul>
    </>
  );
};
