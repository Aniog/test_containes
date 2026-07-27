import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Globe2 } from 'lucide-react'
import { NAV_LINKS } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const linkClass = ({ isActive }) =>
    cn(
      'text-sm font-medium transition-colors hover:text-primary-600',
      isActive ? 'text-primary-600' : 'text-slate-700'
    )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-800 text-white">
            <Globe2 className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            SSourcing <span className="text-primary-600">China</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.slice(1).map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
          >
            Get a Free Sourcing Quote
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block rounded-md px-3 py-2.5 text-sm font-medium',
                  isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-50'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-accent-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent-600"
          >
            Get a Free Sourcing Quote
          </Link>
        </nav>
      )}
    </header>
  )
}
