import { useState } from 'react';
import {
  ArrowUpRight, Mail, Menu, X, Code2,
  Database, Globe, Laptop, ExternalLink, MapPin
} from 'lucide-react';
const projects = [
  {
    number: '01',
    title: 'Ledger Management System',
    category: 'Full-stack web application',
    description: 'A digital khata platform designed to help small retail businesses manage customer credit, payments, and outstanding balances.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: '#contact'
  },
  {
    number: '02',
    title: 'Employee Management System',
    category: 'Full-stack web application',
    description: 'An employee management application for organizing employee records, departments, attendance, and leave requests.',
    stack: ['React', 'FastAPI', 'MongoDB'],
    link: '#contact'
  },
  {
    number: '03',
    title: 'Linux Backup Automation',
    category: 'Operating systems project',
    description: 'A Linux-based automation project focused on scheduled backups, monitoring, and reliable file management.',
    stack: ['Linux', 'Bash', 'Cron'],
    link: '#contact'
  }
];

const skills = [
  { name: 'Programming', items: ['C++', 'Java', 'Python'] },
  { name: 'Web development', items: ['HTML', 'CSS', 'React', 'Node.js'] },
  { name: 'Database', items: ['MongoDB', 'SQL'] },
  { name: 'Core concepts', items: ['Data Structures', 'Algorithms', 'OOP'] }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'],
    ['Education', '#education'], ['Contact', '#contact']
  ];

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>ZS<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> Computer Science Student</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>Muhammad Zaid<br /><span>Shaikh.</span></h1>
            <p className="hero-description">
              I’m a Computer Science student who enjoys solving problems and building useful digital experiences. I’m currently growing my skills in software and web development.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-location"><MapPin size={15} /> Sukkur, Pakistan</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-top"><span>PORTFOLIO / 2026</span><span>01 — 05</span></div>
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
            <div className="floating-note"><span className="note-icon"><Laptop size={18} /></span><span>Learning.<br /><strong>Building. Improving.</strong></span></div>
            <span className="decor decor-one" />
            <span className="decor decor-two" />
          </div>
        </section>

        <section className="quick-facts">
          <div className="container facts-grid">
            <div><strong>CS</strong><span>Undergraduate</span></div>
            <div><strong>03+</strong><span>Project experiences</span></div>
            <div><strong>Curious</strong><span>Always learning</span></div>
            <div><strong>Open</strong><span>To opportunities</span></div>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title="A little about me." />
          <div className="about-grid">
            <p className="about-lead">I believe good technology starts with curiosity, clear thinking, and a willingness to keep learning.</p>
            <div className="about-detail">
              <p>I’m studying Computer Science at <strong>Sukkur IBA University</strong>. I enjoy exploring how software works, strengthening my programming fundamentals, and turning ideas into practical projects.</p>
              <p>My current interests include web development, data structures and algorithms, databases, and building software that solves everyday problems.</p>
              <a className="inline-link" href="#contact">More about my journey <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="skills">
          <div className="container">
            <SectionHeading eyebrow="02 / WHAT I WORK WITH" title="Skills & technologies." text="Tools and concepts I’m learning and using as I grow as a developer." />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.name}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.name}</h3>
                  <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects I've worked on." text="A selection of academic and personal projects. More work will be added as I build." />
          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                </div>
                <a className="project-link" href={project.link} aria-label={`Learn more about ${project.title}`}><ArrowUpRight size={22} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tint" id="education">
          <div className="container">
            <SectionHeading eyebrow="04 / EDUCATION" title="My learning journey." />
            <div className="education-card">
              <div className="education-mark"><Database size={24} /></div>
              <div>
                <span className="project-category">UNDERGRADUATE</span>
                <h3>BS Computer Science</h3>
                <p className="education-place">Sukkur IBA University · Pakistan</p>
                <p>Building a strong foundation in programming, algorithms, databases, and software development.</p>
              </div>
              <span className="education-date">Present</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>Have an idea?<br /><span>Let's connect.</span></h2>
            <p>I’m always interested in learning, collaborating, and discussing new opportunities.</p>
            <a className="button button-light" href="mailto:your.email@example.com">Send me an email <ArrowUpRight size={17} /></a>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub <ExternalLink size={13} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Globe size={18} /> LinkedIn <ExternalLink size={13} /></a>
              <a href="mailto:your.email@example.com"><Mail size={18} /> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">ZS<span>.</span></a>
          <p>Designed & built by Muhammad Zaid Shaikh.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;