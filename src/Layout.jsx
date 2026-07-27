import { Link, NavLink, Outlet } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/how-it-works', 'How It Works'],
  ['/products-we-source', 'Products We Source'],
  ['/case-studies', 'Case Studies'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
]

const Layout = () => {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
    }`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 text-slate-950 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-slate-950" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">SS</span>
            <span>
              <span className="block text-base font-bold tracking-tight">SSourcing China</span>
              <span className="block text-xs font-medium text-slate-500">Sourcing · QC · Shipping</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 lg:inline-flex"
          >
            Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-950 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
              {navItems.map(([to, label]) => (
                <NavLink key={to} to={to} className={linkClass} onClick={() => setOpen(false)}>{label}</NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
              >
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">SS</span>
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              China-based sourcing support for overseas buyers: supplier search, verification, quality inspection, production follow-up, and shipping coordination.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Pages</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {navItems.slice(1).map(([to, label]) => (
                <Link key={to} to={to} className="hover:text-white">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Inquiry focus</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Send product details, target quantity, quality requirements, and delivery market to receive a practical sourcing response.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
