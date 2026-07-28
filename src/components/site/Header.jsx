import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/siteData'

const navItemClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
  }`

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link className="flex items-center gap-3" to="/" onClick={() => setMenuOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
            SS
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">SSourcing China</p>
            <p className="text-sm text-slate-500">China sourcing support for global buyers</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} className={navItemClass} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            to="/contact"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                className={navItemClass}
                onClick={() => setMenuOpen(false)}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              onClick={() => setMenuOpen(false)}
              to="/contact"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
