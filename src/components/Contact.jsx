
import { ArrowUpRight, Mail, ExternalLink, Code2, Globe } from 'lucide-react';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <span className="eyebrow">05 / GET IN TOUCH</span>

        <h2>
          Have an idea?<br />
          <span>Let's connect.</span>
        </h2>

        <p>
          I’m always interested in learning, collaborating,
          and discussing new opportunities.
        </p>

        <a
          className="button button-light"
          href="mailto:your.email@example.com"
        >
          Send me an email <ArrowUpRight size={17} />
        </a>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} /> GitHub <ExternalLink size={13} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Globe size={18} /> LinkedIn <ExternalLink size={13} />
          </a>

          <a href="mailto:your.email@example.com">
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
