import { siteInfo } from '../siteInfo'

export default function Hero() {
  return (
    <section id="home" className="">
      <div>
        <h1 className="">{siteInfo.name}</h1>
        <p className="">{siteInfo.tagline}</p>
      </div>
    </section>
  )
}
