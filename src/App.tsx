import { AppDrawer, navItems } from "./components/FlyOut"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <>
    <AppDrawer items={navItems} />
    <div className="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App
