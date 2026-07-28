import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '@/lib/siteData'

const Header = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 text-slate-950">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-card">
            SS
          </span>
          <span>
            <span className="block text-lg font-semibold leading-tight">SSourcing China</span>
            <span className="block text-xs font-medium text-slate-500">Sourcing · QC · Shipping</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-950'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-blue-800 lg:inline-flex"
        >
          Get a Free Sourcing Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 text-slate-950 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 py-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mx-auto flex max-w-7xl justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
