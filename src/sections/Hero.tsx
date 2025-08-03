import { siteInfo } from '../siteInfo'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-card">
          <h1 className="hero-title">
            {siteInfo.name}
          </h1>
          <p className="hero-subtitle">
            {siteInfo.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
