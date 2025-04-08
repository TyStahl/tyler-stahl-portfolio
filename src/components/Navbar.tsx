export default function Navbar() {
    const navItems = ["Home", "About", "Skills", "Projects", "Contact"]
  
    return (
      <nav className="">
        <div className="">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className=""
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    )
  }
  