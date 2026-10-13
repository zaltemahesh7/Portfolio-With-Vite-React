import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <section className="section section-muted" id="contact" aria-labelledby="contact-title">
    <div className="section-inner contact-layout">
      <div className="contact-copy">
        <p className="eyebrow">Get in touch</p>
        <h2 className="section-title" id="contact-title">Let’s talk about what you’re building.</h2>
        <p className="section-lead">For opportunities and professional enquiries, reach me here:</p>
        <a className="contact-email" href="mailto:maheshzalte.dev@gmail.com">
          maheshzalte.dev@gmail.com
        </a>
        <p className="contact-location">Pune, Maharashtra, India</p>
        <div className="contact-socials">
          <a href="https://github.com/zaltemahesh7" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <a href="https://linkedin.com/in/maheshzalte2000" target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
      <form
        action="https://getform.io/f/5b896697-e59d-4463-949c-9e19ff5680f1"
        className="contact-form"
        method="post"
      >
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input autoComplete="name" id="name" maxLength="100" name="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            id="email"
            maxLength="254"
            name="email"
            required
            type="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" maxLength="5000" minLength="10" name="message" required rows="5" />
        </div>
        <button className="button button-primary" type="submit">Send message</button>
      </form>
    </div>
  </section>
);

export default Contact;
