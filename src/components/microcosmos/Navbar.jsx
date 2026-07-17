import { useState, useEffect } from 'react'
import { Microscope, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Explore', href: '#explore' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Discoveries', href: '#discoveries' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmos-bg/90 backdrop-blur-md border-b border-cosmos-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-cosmos-primary/20 flex items-center justify-center border border-cosmos-primary/40 group-hover:bg-cosmos-primary/30 transition-colors">
            <Microscope className="w-5 h-5 text-cosmos-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-cosmos-text">
            Micro<span className="text-cosmos-primary">Cosmos</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cosmos-muted hover:text-cosmos-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cosmos-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cosmos-bg/95 backdrop-blur-md border-t border-cosmos-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cosmos-muted hover:text-cosmos-primary transition-colors text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
