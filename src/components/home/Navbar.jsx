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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-navy font-extrabold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              ARTITECT<span className="text-gold ml-1">MACHINERY</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-200 hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold text-navy font-semibold px-5 py-2 rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-200 hover:text-gold transition-colors text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-navy font-semibold px-5 py-3 rounded-lg hover:bg-gold-light transition-colors text-sm text-center mt-2"
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
