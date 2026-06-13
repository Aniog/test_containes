import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Factory } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/about#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-brand-accent'
        : 'text-brand-primary hover:text-brand-accent'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center group-hover:bg-brand-primary-dark transition-colors">
              <Factory className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-brand-primary tracking-tight">
              ARTITECT<span className="text-brand-accent"> MACHINERY</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/about#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-accent rounded-lg hover:brightness-110 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-brand-primary hover:bg-brand-primary-light transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/about#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-accent rounded-lg hover:brightness-110 transition-all duration-200 mt-2"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
