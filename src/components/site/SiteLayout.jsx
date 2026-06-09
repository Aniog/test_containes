import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/site/CTAButton'
import { navigationItems } from '@/data/siteContent'

const SiteLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-slate-900" ref={containerRef}>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <Link className="shrink-0" to="/">
            <div className="text-xl font-semibold tracking-tight text-slate-950">
              SSourcing China
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
              China sourcing support for overseas buyers
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-sm font-semibold text-sky-700'
                    : 'text-sm font-medium text-slate-600 transition hover:text-slate-950'
                }
                key={item.path}
                to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton to="/contact">Get a Free Sourcing Quote</CTAButton>
          </div>

          <button
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto grid w-full max-w-7xl gap-2 px-4 py-4 sm:px-6 lg:px-8">
              {navigationItems.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-sky-700'
                      : 'rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50'
                  }
                  key={item.path}
                  to={item.path}>
                  {item.label}
                </NavLink>
              ))}
              <CTAButton className="mt-2 w-full justify-center" to="/contact">
                Get a Free Sourcing Quote
              </CTAButton>
            </div>
          </div>
        ) : null}
      </header>

      <Outlet />

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              SSourcing China
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A China-based sourcing agent helping global buyers with supplier
              search, verification, quality control, production follow-up, and
              shipping coordination.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Pages
              </h3>
              <div className="mt-4 grid gap-3">
                {navigationItems.map((item) => (
                  <Link className="text-sm font-medium text-slate-700 hover:text-slate-950" key={item.path} to={item.path}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Main focus
              </h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
                <li>Supplier verification</li>
                <li>Factory checks</li>
                <li>Quality inspection</li>
                <li>Production follow-up</li>
                <li>Shipping coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
