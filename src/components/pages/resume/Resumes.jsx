import "./resumes.css";
import { useTranslation } from "react-i18next";

const Resumes = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="section-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="section" id="resumes">
        <h2 className="section__title-1">
          <span>Resume</span>
        </h2>
        <p className="section__subtitle">{t("resume.subtitle")}</p>

        <div className="container resume__container">
          <div className="resume__content">
            {/* Education */}
            <div className="resume__content-col">
              <div className="resume__title">
                <span>{t("resume.edu.title")}</span>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p></p>
                  {t("resume.edu.edu1.subtitle")}
                </div>
                <div className="resume__company">
                  <p> {t("resume.edu.edu1.place")}</p>
                </div>
                <div className="resume__date">
                  <p> {t("resume.edu.edu1.year")}</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p> {t("resume.edu.edu2.subtitle")}</p>
                </div>
                <div className="resume__company">
                  <p> {t("resume.edu.edu2.place")}</p>
                </div>
                <div className="resume__date">
                  <p> {t("resume.edu.edu2.year")}</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p> {t("resume.edu.edu3.subtitle")}</p>
                </div>
                <div className="resume__company">
                  <p> {t("resume.edu.edu3.place")}</p>
                </div>
                <div className="resume__date">
                  <p> {t("resume.edu.edu3.year")}</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="resume__content-col">
              <div className="resume__title">
                <span>{t("resume.exp.title")}</span>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p>{t("resume.exp.exp1.subtitle")}</p>
                </div>
                <div className="resume__company">
                  <p>{t("resume.exp.exp1.place")}</p>
                </div>
                <div className="resume__date">
                  <p>{t("resume.exp.exp1.year")}</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p>Web designer (Intern)</p>
                </div>
                <div className="resume__company">
                  <p>WEWEBPLUS CO.,LTD.</p>
                </div>
                <div className="resume__date">
                  <p>{t("resume.exp.exp2.year")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume__content">
            {/* Certificate */}
            <div className="resume__content-col">
              <div className="resume__title">
                <span>{t("resume.cer.title")}</span>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <a
                    className="alink"
                    target="_blank"
                    href="https://tpqi-net.tpqi.go.th/cer/print/MTMwNjU5"
                  >
                    {t("resume.cer.cer1.subtitle")}
                    <i className="bx bx-chevrons-right"></i>
                  </a>
                </div>
                <div className="resume__company">
                  <p>{t("resume.cer.cer1.place")}</p>
                </div>
                <div className="resume__date">
                  <p>{t("resume.cer.cer1.year")}</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <a
                    className="alink"
                    target="_blank"
                    href="https://cert.efset.org/qFjcfY"
                  >
                    English Certificate
                    <i className="bx bx-chevrons-right"></i>
                  </a>
                </div>
                <div className="resume__company">
                  <p>EF SET certificate</p>
                </div>
                <div className="resume__date">
                  <p>Intermediate</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <a
                    className="alink"
                    target="_blank"
                    href="https://www.linkedin.com/in/khwan-yyg/"
                  >
                    LinkedIn Certificate
                    <i className="bx bx-chevrons-right"></i>
                  </a>
                </div>
                <div className="resume__company">
                  <p>My LinkedIn Profile</p>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="resume__content-col">
              <div className="resume__title">
                <span>{t("resume.lang.title")}</span>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  {t("resume.lang.subtitle1")}
                </div>
                <div className="resume__subtitle">
                  {t("resume.lang.subtitle2")}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="resume__title skills__title">
            <span>{t("resume.skill.title")}</span>
          </div>
          <div className="resume__content">
            {/* Technical Skills */}
            <div className="resume__content-col">
              <div className="resume__subtitle">
                <p>Technical Skills</p>
              </div>
              <div className="resume__info">
                <div className="resume__subtitle">
                  <p>Languages</p>
                </div>
                <div className="resume__company">
                  <p>HTML5, CSS/SCSS, JavaScript, TypeScript, C/C#</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p>Frameworks / Libraries</p>
                </div>
                <div className="resume__company">
                  <p>
                    React, Angular, Node.js, Express.js, Bootstrap, AJAX, REST
                    API
                  </p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p>Tools / Platforms</p>
                </div>
                <div className="resume__company">
                  <p>GitHub, VSCode, PostMan, NPM, Netlify, Vercel</p>
                </div>
                <div className="resume__company">
                  <p>Adobe Photoshop, XD, Illustrator, Figma, Notion</p>
                </div>
              </div>

              <div className="resume__info">
                <div className="resume__subtitle">
                  <p>Databases</p>
                </div>
                <div className="resume__company">
                  <p>MongoDB, MySQL</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="resume__content-col">
              <div className="resume__subtitle">
                <p>Soft Skills</p>
              </div>

              <div className="resume__info skill__soft-container ">
                <div className="skill__soft">
                  <div className="skill__soft-info">
                    <p>{t("resume.skill.sskill.sskill1")}</p>
                    <p>{t("resume.skill.sskill.sskill2")}</p>
                    <p>{t("resume.skill.sskill.sskill3")}</p>
                    <p>{t("resume.skill.sskill.sskill4")}</p>
                  </div>
                  <div className="skill__soft-info">
                    <p>{t("resume.skill.sskill.sskill5")}</p>
                    <p>{t("resume.skill.sskill.sskill6")}</p>
                    <p>{t("resume.skill.sskill.sskill7")}</p>
                  </div>
                </div>

                <div className="resume__info">
                  <p className="resume__text-gradient">
                    And still learning until Now
                  </p>
                  <a
                    href="/src/assets/Khwankamon_Resume_EN.pdf"
                    target="_blank"
                    className="btn btn-first btn-resume-c"
                  >
                    Resume<i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumes;
