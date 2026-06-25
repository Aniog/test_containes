import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 no-underline">
            <span className="text-accent font-extrabold text-xl lg:text-2xl tracking-tight">
              ARTITECT
            </span>
            <span className="text-text-on-dark font-light text-sm lg:text-base tracking-widest uppercase">
              Machinery
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-on-dark/80 hover:text-accent text-sm font-medium tracking-wide transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors no-underline"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-on-dark p-2 bg-transparent border-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-on-dark/80 hover:text-accent text-base font-medium py-2 no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-accent hover:bg-accent-light text-white text-center font-semibold px-5 py-3 rounded-lg transition-colors no-underline mt-4"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
