import "./projects.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import { useTranslation } from "react-i18next";

const Projects = () => {
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

      <div className="section" id="projects">
        <h2 className="section__title-1">
          <span>Projects</span>
        </h2>
        <p className="section__subtitle">{t("proj.section-subtitle")}</p>
        <div className="container">
          <Swiper
            className="project__container"
            loop={true}
            grabCursor={true}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {Data.map(
              ({
                id,
                image,
                title,
                description,
                languages,
                githuburl,
                demourl,
              }) => {
                return (
                  <SwiperSlide className="project__card" key={id}>
                    <img src={image} alt="" className="project__img" />
                    <div className="project__content flex">
                      <h3 className="project__name">{title}</h3>
                      <div className="project__info flex">
                        <p className="project__description">{t(description)}</p>
                        <p className="project__languages">{languages}</p>
                      </div>
                      <div className="project__links">
                        <a className="alink" href={githuburl} target="_blank">
                          GitHub
                          <i className="bx bxl-github"></i>
                        </a>
                        <a className="alink" href={demourl} target="_blank">
                          Demo
                          <i className="bx bx-link-external"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
