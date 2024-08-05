import "./contact.css";
import { useState } from "react";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("");

  function copyToClipboard() {
    navigator.clipboard.writeText("khwan_yyg@outlook.com");
    setCopySuccess(" Copied!");
  }

  const { t } = useTranslation();
  return (
    <section>
      <div className="section-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d8e9fc"
            d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="section" id="contact">
        <h2 className="section__title-1">
          <span>Get In Touch</span>
        </h2>
        <p className="section__subtitle">Let&apos;s Talk</p>

        <div className="container">
          <div className="contact__content">
            <p className="contact__text">{t("contact.text")}</p>
            <a
              href="/src/assets/Khwankamon_Resume_EN.pdf"
              target="_blank"
              className="btn btn-first"
            >
              Resume<i className="bx bx-link-external"></i>
            </a>
            <div className="contact__copy-conytainer" onClick={copyToClipboard}>
              <p className="contact__copy-email">khwan_yyg@outlook.com</p>
              <span className="contact__copy-tooltip">
                <i className="bx bx-copy"></i>
                {copySuccess}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
