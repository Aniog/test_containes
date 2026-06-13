import { Menu, MessageSquareQuote, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { navigationItems } from '../../siteContent.js'

const linkClassName = ({ isActive }) =>
  `whitespace-nowrap transition-colors ${
    isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'
  }`

function SiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <Link to="/" className="flex items-center gap-3 xl:flex-none" onClick={() => setMobileOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-lg font-bold text-white">
              SS
            </span>
            <div>
              <p className="text-base font-semibold text-slate-900">SSourcing China</p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-4 text-xs font-medium xl:flex 2xl:gap-6 2xl:text-sm">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden xl:flex xl:flex-none">
            <Link
              to="/contact#quote-form"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              <MessageSquareQuote className="h-4 w-4" />
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 xl:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 md:px-10">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact#quote-form"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <Outlet />

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-lg font-bold text-white">
                SS
              </span>
              <div>
                <p className="text-base font-semibold text-slate-900">SSourcing China</p>
                <p className="text-sm text-slate-500">Supplier verification, QC and shipping coordination</p>
              </div>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              We help overseas buyers work with China suppliers more clearly and more confidently through practical sourcing support.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClassName}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact#quote-form" className="font-semibold text-blue-700 hover:text-blue-800">
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
