import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section-projects" id="projects">
      <div className="container">
        <h2 className="heading-secondary">Projects</h2>

        <div className="projects">
          {projects.map((project) => (
            <div className="project">
              <div className="project__img-box">
                <img
                  className="project__img"
                  src={project.imgSrc}
                  alt={project.projectName}
                />
              </div>
              <div className="project__text">
                <h3 className="project__name">{project.projectName}</h3>
                <p className="project__description">{project.description}</p>
                <span className="project__stack">{project.stack}</span>
                <p className="project__links">
                  <a
                    href={project.code}
                    className="project__link-code"
                    target="_blank"
                  >
                    View code
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
