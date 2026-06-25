import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../data/siteContent'

const Header = () => {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 text-slate-950 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link className="flex items-center gap-3" to="/" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
            SS
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-slate-950">SSourcing China</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Sourcing Agent</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink className={linkClass} key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 lg:inline-flex"
          to="/contact"
        >
          Get a Free Sourcing Quote
        </Link>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 text-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink className={linkClass} key={item.href} onClick={() => setOpen(false)} to={item.href}>
                {item.label}
              </NavLink>
            ))}
            <Link
              className="mt-3 inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
              to="/contact"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
