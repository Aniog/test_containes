import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Ship, ChevronRight } from 'lucide-react'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products-we-source', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0B2545] text-white">
              <Ship className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base lg:text-lg font-bold text-[#0B2545]">SSourcing China</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">Sourcing &middot; QC &middot; Shipping</span>
            </span>
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
                      ? 'text-[#0B2545] bg-slate-100'
                      : 'text-slate-600 hover:text-[#0B2545] hover:bg-slate-50'
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
              className="inline-flex items-center gap-1.5 bg-[#E63946] hover:bg-[#C42E3A] text-white font-semibold text-sm px-4 py-2.5 rounded-md transition"
            >
              Get a Free Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-100 pt-3">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-md text-sm font-medium ${
                      isActive ? 'bg-slate-100 text-[#0B2545]' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[#E63946] hover:bg-[#C42E3A] text-white font-semibold text-sm px-4 py-2.5 rounded-md transition"
              >
                Get a Free Quote
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
