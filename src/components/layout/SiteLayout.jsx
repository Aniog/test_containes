import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation, siteMeta, footerColumns } from '@/data/siteContent'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-navy'}`

const SiteLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-surface text-brand-navy">
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold text-white">
              SS
            </div>
            <div>
              <p className="text-base font-semibold text-brand-navy">SSourcing China</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">China sourcing support</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90"
            >
              {siteMeta.cta}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white p-3 text-brand-navy lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-line bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:px-8">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
              >
                {siteMeta.cta}
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="bg-brand-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.25fr_repeat(3,1fr)] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">SSourcing China</p>
            <h2 className="mt-4 text-2xl font-semibold">China sourcing support for global buyers</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              We help overseas buyers source with better supplier visibility, clearer production follow-up,
              and practical quality and shipping coordination in China.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
