import { siteInfo } from '../siteInfo'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-card">
          <h2 className="section-title">#Skills & Tools</h2>
          <div className="skills-grid">
            {siteInfo.skills.map((skill) => (
              <div key={skill} className="skill-item">
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
