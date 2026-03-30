import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`page-navbar ${scrolled ? 'nav-scrolled shadow-sm' : ''}`}>
      <nav className="container navbar navbar-expand-xl px-0">
        <a className="navbar-brand fw-bold" href="#home">
          Saraswathi Vidya Nikethan
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${open ? 'show' : ''}`}>
          <ul className="navbar-nav align-items-center gap-3">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link smooth-link" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item d-none d-xl-block">
              <a
                href="https://wa.me/917207231018?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Saraswathi%20Vidya%20Nikethan"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary text-white"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
