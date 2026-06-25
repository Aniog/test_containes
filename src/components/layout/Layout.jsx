import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '@/lib/pageData'

const ctaPath = '/contact#inquiry'

function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 text-slate-950">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">SS</span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight">SSourcing China</span>
            <span className="block text-xs font-medium text-slate-600">Sourcing agent for global buyers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to={ctaPath} className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-950 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-950 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link onClick={closeMenu} to={ctaPath} className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white">
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">SS</span>
            <div>
              <p className="text-lg font-bold">SSourcing China</p>
              <p className="text-sm text-slate-300">China-based sourcing support for overseas buyers.</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
            Supplier search, factory verification, quality inspection, production follow-up, and shipping coordination with practical communication and clear reporting.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">Website</h2>
          <div className="mt-4 grid gap-2">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">Start a project</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">Send your product category, target quantity, destination, and service needs. We will review the request and reply with next steps.</p>
          <Link to={ctaPath} className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-slate-100">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-400">
        © 2026 SSourcing China. Practical China sourcing support for international buyers.
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
