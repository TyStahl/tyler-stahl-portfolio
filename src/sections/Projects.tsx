import { siteInfo } from '../siteInfo'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-card">
          <h2 className="section-title">#Projects</h2>
          <div className="projects-grid">
            {siteInfo.projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
