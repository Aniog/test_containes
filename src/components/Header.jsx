import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Globe2 } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-navy text-white">
              <Globe2 className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold text-brand-navy tracking-tight">SSourcing China</span>
              <span className="text-[11px] text-brand-muted font-medium">China Sourcing Agent</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition ${
                    isActive
                      ? 'text-brand-navy bg-brand-surface'
                      : 'text-brand-muted hover:text-brand-navy hover:bg-brand-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue transition"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy hover:bg-brand-surface"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm font-medium rounded-md ${
                    isActive
                      ? 'text-brand-navy bg-brand-surface'
                      : 'text-brand-muted hover:text-brand-navy hover:bg-brand-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
