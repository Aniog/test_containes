import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-brand text-white flex items-center justify-center font-extrabold text-lg">S</span>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">SSourcing<span className="text-brand">China</span></span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand ${pathname === link.path ? 'text-brand' : 'text-slate-600'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+8613812345678" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand">
              <Phone className="w-4 h-4" />
              <span>+86 138 1234 5678</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="section-container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block text-base font-medium ${pathname === link.path ? 'text-brand' : 'text-slate-700'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full text-center mt-2"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
