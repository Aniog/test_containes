import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PreviewNavigationBridge from '@/components/layout/PreviewNavigationBridge'
import { companyName, navigationItems, primaryCta } from '@/content/siteContent'

const buttonClassName =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors'

const SiteLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      console.log('Refreshing stock images for route', location.pathname)
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-site-bg text-site-ink">
      <PreviewNavigationBridge />

      <div className="border-b border-site-border bg-brand-dark text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 text-sm lg:px-8">
          <p className="max-w-3xl text-white/90">
            China-based sourcing support for overseas buyers who need supplier verification, QC, production follow-up, and shipping coordination.
          </p>
          <Link className="hidden items-center gap-2 font-semibold text-white md:inline-flex" to="/contact#inquiry-form">
            {primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-site-border/80 bg-site-surface/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link className="flex items-center gap-3" to="/">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-lg font-bold text-brand-dark">
              SS
            </div>
            <div>
              <p className="text-base font-semibold text-site-ink">{companyName}</p>
              <p className="text-sm text-site-muted">China sourcing agent for global buyers</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-soft text-brand-dark' : 'text-site-muted hover:bg-site-bg hover:text-site-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link className={`${buttonClassName} hidden bg-brand text-white hover:bg-brand-dark md:inline-flex`} to="/contact#inquiry-form">
              {primaryCta}
            </Link>
            <button
              aria-label="Toggle navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-site-border bg-white text-site-ink lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              type="button"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-site-border bg-site-surface lg:hidden">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-4 lg:px-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-brand-soft text-brand-dark' : 'text-site-ink hover:bg-site-bg'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link className={`${buttonClassName} mt-2 bg-brand text-white hover:bg-brand-dark`} to="/contact#inquiry-form">
                {primaryCta}
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-site-border bg-site-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">SSourcing China</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-site-ink">
              Practical China sourcing support for buyers who value clarity and control.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-site-muted">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clearer local execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className={`${buttonClassName} bg-brand text-white hover:bg-brand-dark`} to="/contact#inquiry-form">
                {primaryCta}
              </Link>
              <Link className={`${buttonClassName} border border-site-border bg-white text-site-ink hover:bg-site-bg`} to="/services">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-site-muted">Pages</h3>
              <ul className="mt-4 space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.to}>
                    <Link className="text-sm text-site-ink transition hover:text-brand" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-site-muted">What buyers ask us for</h3>
              <ul className="mt-4 space-y-3 text-sm text-site-muted">
                <li>Supplier search and comparison</li>
                <li>Factory verification</li>
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
