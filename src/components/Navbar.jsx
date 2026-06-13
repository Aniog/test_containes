import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur border-b border-border-subtle">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 no-underline text-navy">
            <span className="font-serif text-2xl font-bold tracking-tight">ARTITECT</span>
            <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase text-text-secondary font-medium">
              Machinery
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium tracking-wide uppercase text-text-secondary hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block rounded-md bg-gold text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-[#b8944c] transition-colors"
              >
                Get a Quote
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-border-subtle pt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block text-sm font-medium tracking-wide uppercase text-text-secondary hover:text-gold transition-colors py-2"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block rounded-md bg-gold text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-[#b8944c] transition-colors mt-2"
                  onClick={() => setOpen(false)}
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
