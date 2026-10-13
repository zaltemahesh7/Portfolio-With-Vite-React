import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroImage from '../assets/heroImageM.jpg';

const Home = () => (
  <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Software Developer · Pune, India</p>
      <h1 id="hero-title">Mahesh Zalte</h1>
      <p className="hero-role">Software Developer | Node.js Backend Developer | AWS | PostgreSQL</p>
      <h2>Building Reliable Backend Systems and Scalable Web Applications.</h2>
      <p className="hero-intro">
        I build backend services and full-stack applications, with a focus on dependable APIs,
        thoughtful data design, and practical cloud deployment.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#portfolio">View Projects</a>
        <a className="button button-secondary" href="/Mahesh_Zalte.pdf" download>
          Download Resume
        </a>
        <a className="button button-text" href="#contact">Contact Me</a>
      </div>
      <div className="hero-socials" aria-label="Social profiles">
        <a href="https://github.com/zaltemahesh7" target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" /> <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/maheshzalte2000" target="_blank" rel="noreferrer">
          <FaLinkedin aria-hidden="true" /> <span>LinkedIn</span>
        </a>
      </div>
    </div>
    <div className="hero-photo-wrap">
      <img
        className="hero-photo"
        src={HeroImage}
        alt="Mahesh Zalte"
        width="496"
        height="656"
      />
    </div>
  </section>
);

export default Home;
