
import { Database } from 'lucide-react';
import SectionHeading from './SectionHeading';

function Education() {
  return (
    <section className="section section-tint" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="04 / EDUCATION"
          title="My learning journey."
        />

        <div className="education-card">
          <div className="education-mark">
            <Database size={24} />
          </div>

          <div>
            <span className="project-category">
              UNDERGRADUATE
            </span>

            <h3>BS Computer Science</h3>

            <p className="education-place">
              Sukkur IBA University · Pakistan
            </p>

            <p>
              Building a strong foundation in programming, algorithms,
              databases, and software development.
            </p>
          </div>

          <span className="education-date">Present</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
