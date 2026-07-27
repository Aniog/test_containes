import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/siteData'

const linkClass = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-brand-blue' : 'text-brand-slate hover:text-brand-blue'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 text-brand-navy shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-base font-bold text-white">
            SS
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight">SSourcing China</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">Sourcing Agent</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-navy lg:inline-flex"
        >
          Get a Free Sourcing Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-line bg-white text-brand-navy lg:hidden"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-white px-4 py-4 text-brand-navy lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
