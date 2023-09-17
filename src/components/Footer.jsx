function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer__copyright">Copyright &copy; 2023 DanielJHV</p>
      <div className="footer__links">
        <a
          className="footer-link"
          href="https://github.com/DanielJHV"
          target="_blank"
        >
          <img
            className="footer-logo github-logo"
            src="/images/github-logo.svg"
            alt="Github logo"
          />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/danielveresjhv/"
          target="_blank"
        >
          <img
            className="footer-logo linkedin-logo"
            src="/images/linkedin-logo.svg"
            alt="Linkedin logo"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
