import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/siteData'

const Header = () => {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-brand-blue/10 text-brand-blue' : 'text-brand-slate hover:bg-brand-mist hover:text-brand-navy'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 text-brand-navy backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-sm font-bold text-white">
            SS
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-brand-navy">SSourcing China</span>
            <span className="block text-xs font-medium text-brand-slate">China sourcing support</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-navy lg:inline-flex"
        >
          Get a Free Sourcing Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-line bg-white text-brand-navy lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-white px-4 py-4 text-brand-navy shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-brand-blue px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
