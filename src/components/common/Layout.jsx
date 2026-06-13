import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../../data/siteContent'
import { CTAButton } from './CTAButton'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-brand-navy backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-3" aria-label="SSourcing China home">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-sm font-bold text-white">SS</span>
            <span>
              <span className="block text-lg font-bold leading-none tracking-tight">SSourcing China</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-brand-subtle">Sourcing Agent</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-brand-muted text-brand-blue' : 'text-brand-navy hover:bg-brand-muted hover:text-brand-blue'
                  }`
                }
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <CTAButton className="px-5 py-2.5" />
          </div>

          <button
            aria-label="Toggle navigation menu"
            className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-brand-navy lg:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 text-brand-navy lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-brand-muted text-brand-blue' : 'text-brand-navy'}`
                  }
                  key={item.path}
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
              <CTAButton className="mt-2 w-full" />
            </div>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="bg-brand-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">SSourcing China</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
              China-based sourcing support for overseas buyers who need supplier search, verification, inspection, production follow-up, and shipping coordination.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Supplier search</li>
              <li>Factory verification</li>
              <li>Quality inspection</li>
              <li>Shipping coordination</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Start a project</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">Send your product details and receive a practical sourcing response.</p>
            <CTAButton className="mt-5" />
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
          © 2026 SSourcing China. Practical sourcing coordination for global buyers.
        </div>
      </footer>
    </div>
  )
}
