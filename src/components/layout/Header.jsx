import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Globe2, ShieldCheck } from 'lucide-react'

const NAV = [
  { to: '/', label: 'Home' },
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 rounded-lg bg-brand text-white items-center justify-center font-bold">S</span>
            <div className="leading-tight">
              <div className="font-bold text-brand text-lg">SSourcing China</div>
              <div className="text-[11px] text-ink-soft uppercase tracking-wider hidden sm:block">Sourcing • QC • Shipping</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition ${
                    isActive
                      ? 'text-brand bg-surface-2'
                      : 'text-ink-soft hover:text-brand hover:bg-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-xs text-ink-soft">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Verified Suppliers
            </span>
            <Link
              to="/contact"
              className="bg-accent text-white hover:bg-accent/90 px-4 py-2.5 rounded-lg font-semibold text-sm shadow-sm transition"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-brand"
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive ? 'bg-surface-2 text-brand' : 'text-ink hover:bg-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-accent text-white text-center px-4 py-3 rounded-lg font-semibold"
            >
              Get a Free Quote
            </Link>
            <div className="flex items-center gap-2 mt-2 text-xs text-ink-soft px-1">
              <Globe2 className="w-4 h-4" /> Serving buyers in 40+ countries
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
