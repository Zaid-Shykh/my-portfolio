
import { ArrowUpRight, Code2, MapPin } from 'lucide-react';

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" />
          Computer Science Student
        </div>

        <p className="hero-intro">Hello, I'm</p>

        <h1>
          Muhammad Zaid<br />
          <span>Shaikh.</span>
        </h1>

        <p className="hero-description">
          I’m a Computer Science student who enjoys solving problems
          and building useful digital experiences. I’m currently growing
          my skills in software and web development.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>

          <a className="text-link" href="#contact">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="hero-location">
          <MapPin size={15} /> Sukkur, Pakistan
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-card">
          <div className="portrait-top">
            <span>PORTFOLIO / 2026</span>
            <span>01 — 05</span>
          </div>

          <img
            src="/images/profile.png"
            alt="Muhammad Zaid Shaikh"
            className="profile-photo"
          />

          <div className="portrait-bottom">
            <span>BUILDING WITH<br />CURIOSITY.</span>
            <Code2 size={25} />
          </div>
        </div>

        <div className="floating-note">
          <span className="note-icon">💻</span>
          <span>Learning.<br /><strong>Building. Improving.</strong></span>
        </div>

        <span className="decor decor-one" />
        <span className="decor decor-two" />
      </div>
    </section>
  );
}

export default Hero;
