export default function Navbar() {
    const navItems = ["Home", "About", "Skills", "Projects", "Contact"]
  
    return (
      <nav className="flex flex-row container justify-around">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="border-2"
            >
              {item}
            </a>
          ))}
      </nav>
    )
  }
  