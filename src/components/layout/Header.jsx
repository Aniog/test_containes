import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-amber rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              ARTITECT MACHINERY
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-brand-amber transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-amber hover:bg-brand-amber-dark text-navy-900 font-semibold rounded-lg px-5 py-2.5 text-sm transition-all duration-300"
            >
              Get a Quote
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-slate-700/50">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-slate-300 hover:text-brand-amber transition-colors py-2 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-brand-amber hover:bg-brand-amber-dark text-navy-900 font-semibold rounded-lg px-5 py-2.5 text-sm text-center mt-4 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
