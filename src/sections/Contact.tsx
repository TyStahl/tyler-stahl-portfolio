import { siteInfo } from '../siteInfo'

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="">
        <h2 className="">#Contact Me</h2>
        <p className="">Let's build something cool together. Reach out any time.</p>
        <div className="flex justify-center gap-6">
          <a href={siteInfo.links.github} target="_blank" className="hover:text-indigo-400">GitHub</a>
          <a href={siteInfo.links.linkedin} target="_blank" className="hover:text-indigo-400">LinkedIn</a>
          <a href={siteInfo.links.email} className="hover:text-indigo-400">Email</a>
        </div>
      </div>
    </section>
  )
}
