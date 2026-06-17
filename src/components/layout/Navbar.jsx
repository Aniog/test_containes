import { useState } from 'react'
import { Menu, X, Factory } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <Factory className="w-7 h-7 text-amber-500" />
            <span className="text-lg lg:text-xl font-bold text-slate-900 tracking-tight">
              ARTITECT <span className="text-amber-500">MACHINERY</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
