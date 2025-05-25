import { siteInfo } from '../siteInfo'

export default function Hero() {
  return (
 <section
  id="home"
  className="flex items-center"
>
  <div className="container flex flex-col items-center space-y-4">
    <h1 className="text-4xl font-bold text-center">
      {siteInfo.name}
    </h1>
    <p className="text-lg text-center">
      {siteInfo.tagline}
    </p>
  </div>
</section>
  )
}
