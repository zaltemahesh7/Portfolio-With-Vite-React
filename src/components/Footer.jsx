import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="site-footer">
    <p>© {new Date().getFullYear()} Mahesh Zalte</p>
    <div className="footer-links">
      <a href="https://github.com/zaltemahesh7" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub aria-hidden="true" />
      </a>
      <a href="https://linkedin.com/in/maheshzalte2000" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin aria-hidden="true" />
      </a>
      <a href="mailto:maheshzalte.dev@gmail.com">Email</a>
    </div>
  </footer>
);

export default Footer;
