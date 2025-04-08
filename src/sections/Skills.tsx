import { siteInfo } from '../siteInfo'

export default function Skills() {
  return (
    <section id="skills" className="">
      <div className="">
        <h2 className="">#Skills & Tools</h2>
        <ul className="">
          {siteInfo.skills.map((skill) => (
            <li key={skill} className="">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
