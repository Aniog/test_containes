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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-18">
          <a href="#home" className="flex items-center gap-2 no-underline">
            <span className="font-[var(--font-heading)] text-xl md:text-2xl font-bold text-white tracking-wide">
              ARTITECT
            </span>
            <span className="text-copper text-sm font-medium tracking-widest uppercase">
              Machinery
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-copper text-sm font-medium tracking-wide transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-copper hover:bg-copper-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 no-underline"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 bg-transparent border-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-copper py-2 text-base font-medium no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-copper hover:bg-copper-dark text-white px-6 py-3 rounded-lg text-sm font-medium text-center mt-2 no-underline"
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
