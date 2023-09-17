import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="section-skills" id="skills">
      <div className="container">
        <h2 className="heading-secondary">Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <div className="skill">
              <div className="skill__img-box">
                <img
                  className="skill__img"
                  src={skill.imgSrc}
                  alt={skill.alt}
                />
              </div>
              <span className="skill__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
