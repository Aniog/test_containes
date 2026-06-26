import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">A</span>
            </div>
            <div className="leading-tight">
              <span className="text-neutral-dark font-extrabold text-lg tracking-tight block">ARTITECT</span>
              <span className="text-primary font-medium text-xs tracking-[0.2em] uppercase">Machinery</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-mid font-medium text-sm hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-light text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors duration-200"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-neutral-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-neutral-mid font-medium text-base hover:text-primary transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-accent hover:bg-accent-light text-white font-semibold text-center px-6 py-3 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
