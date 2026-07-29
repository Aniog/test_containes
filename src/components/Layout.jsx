import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { navigation } from '../data/siteData.js'
import CTAButton from './CTAButton.jsx'

const Layout = () => {
  const [open, setOpen] = useState(false)

  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-slate-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-700'
    }`

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
              SS
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight text-slate-900">SSourcing China</span>
              <span className="block text-xs font-medium text-slate-600">Sourcing, QC & shipping support</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block xl:ml-4">
            <CTAButton />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft xl:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={navClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <CTAButton />
              </div>
            </div>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">SSourcing China</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
              China-based sourcing support for overseas buyers who need reliable supplier search,
              factory verification, quality inspection, production follow-up, and shipping coordination.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Pages</h3>
            <div className="mt-4 grid gap-2">
              {navigation.slice(1).map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Next step</h3>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Send your product details and sourcing requirements. We will review and suggest practical next steps.
            </p>
            <div className="mt-5">
              <CTAButton />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
          © 2026 SSourcing China. Practical sourcing support for global buyers.
        </div>
      </footer>
    </div>
  )
}

export default Layout
