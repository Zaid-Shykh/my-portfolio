
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

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

function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionHeading
        eyebrow="03 / SELECTED WORK"
        title="Projects I've worked on."
        text="A selection of academic and personal projects. More work will be added as I build."
      />

      <div className="projects-list">
        {projects.map(project => (
          <article className="project-card" key={project.number}>
            <span className="project-number">
              {project.number}
            </span>

            <div className="project-main">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <a
              className="project-link"
              href={project.link}
              aria-label={`Learn more about ${project.title}`}
            >
              <ArrowUpRight size={22} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
