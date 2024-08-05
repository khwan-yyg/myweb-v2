import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <p className="footer__name">Designed & Built by Khwankamon</p>
        <div className="footer__date">2024</div>
        <div className="footer__icons flex">
          <a
            href="https://www.figma.com/design/KyC15NA3PXMp8YRgSjzyjK/My-Website?node-id=0-1&t=WkYODNmkg955ofcZ-1"
            target="_blank"
            className="button__ghost"
          >
            <i className="bx bxl-figma"></i>
          </a>
          <a
            href="https://github.com/khwan-yyg/myweb-v2"
            target="_blank"
            className="button__ghost"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
