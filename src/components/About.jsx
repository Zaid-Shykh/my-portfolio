
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <section className="section container" id="about">
      <SectionHeading
        eyebrow="01 / ABOUT ME"
        title="A little about me."
      />

      <div className="about-grid">
        <p className="about-lead">
          I believe good technology starts with curiosity, clear thinking,
          and a willingness to keep learning.
        </p>

        <div className="about-detail">
          <p>
            I’m studying Computer Science at
            <strong> Sukkur IBA University</strong>. I enjoy exploring how
            software works, strengthening my programming fundamentals,
            and turning ideas into practical projects.
          </p>

          <p>
            My current interests include web development, data structures
            and algorithms, databases, and building software that solves
            everyday problems.
          </p>

          <a className="inline-link" href="#contact">
            More about my journey <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
