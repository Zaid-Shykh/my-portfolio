
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'Programming', items: ['C++', 'Java', 'Python'] },
  { name: 'Web development', items: ['HTML', 'CSS', 'React', 'Node.js'] },
  { name: 'Database', items: ['MongoDB', 'SQL'] },
  { name: 'Core concepts', items: ['Data Structures', 'Algorithms', 'OOP'] }
];

function Skills() {
  return (
    <section className="section section-tint" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="02 / WHAT I WORK WITH"
          title="Skills & technologies."
          text="Tools and concepts I’m learning and using as I grow as a developer."
        />

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.name}>
              <span className="skill-index">
                0{index + 1}
              </span>

              <h3>{group.name}</h3>

              <div className="skill-tags">
                {group.items.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
