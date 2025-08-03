import { siteInfo } from '../siteInfo'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <h2 className="section-title">#Contact Me</h2>
          <p className="contact-text">Let's build something cool together. Reach out any time.</p>
          <div className="contact-buttons">
            <a 
              href={siteInfo.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button github-button"
            >
              GitHub
            </a>
            <a 
              href={siteInfo.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button linkedin-button"
            >
              LinkedIn
            </a>
            <a 
              href={siteInfo.links.email} 
              className="contact-button email-button"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
