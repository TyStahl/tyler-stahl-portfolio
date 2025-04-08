import { siteInfo } from '../siteInfo'

export default function Projects() {
  return (
    <section id="projects" className="">
      <div className="">
        <h2 className="">#Projects</h2>
        <div className="">
          {siteInfo.projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <h3 className="">{project.title}</h3>
              <p className="">{project.description}</p>
              <div className="">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
