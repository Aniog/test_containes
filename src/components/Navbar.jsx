import { useState } from 'react'
import { Menu, X, Factory, Phone } from 'lucide-react'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-lg border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-accent-gold/15 flex items-center justify-center group-hover:bg-accent-gold/25 transition-colors">
              <Factory className="w-5 h-5 text-accent-gold" />
            </div>
            <span className="font-[family-name:var(--font-family-heading)] text-xl md:text-2xl font-bold tracking-tight text-text-primary">
              ARTITECT<span className="text-accent-gold"> MACHINERY</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent-gold text-brand-dark px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-text-secondary hover:text-accent-gold transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-subtle bg-brand-surface">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium uppercase tracking-wider py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-accent-gold text-brand-dark px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-gold-light transition-colors mt-2"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
