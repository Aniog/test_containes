import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../../data/siteContent'

const Header = () => {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-blue-700 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" to="/" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-base font-bold text-white">SS</span>
          <span>
            <span className="block text-lg font-bold leading-5 text-slate-950">SSourcing China</span>
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Sourcing Agent</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink className={linkClass} key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950 lg:inline-flex" to="/contact">
          Get a Free Sourcing Quote
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-950 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-900 shadow-lg lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink className={linkClass} key={item.path} to={item.path} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white" to="/contact" onClick={() => setOpen(false)}>
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
