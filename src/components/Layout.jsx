import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { navigation, primaryCta } from '@/data/siteContent.js'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-full px-3 py-2 text-[13px] font-medium transition xl:px-4 xl:text-sm',
    isActive
      ? 'bg-brand-soft text-accent-strong'
      : 'text-muted hover:bg-brand-soft hover:text-ink',
  ].join(' ')

function Layout() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China'
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      const method = options.replace ? 'replaceState' : 'pushState'
      window.history[method]({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [])

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, document.body) || (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-brand/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3 text-onbrand">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-semibold tracking-tight text-onbrand">
                SS
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">SSourcing China</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">China sourcing support</p>
              </div>
            </Link>
            <Link
              to={primaryCta.path}
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-brand transition hover:bg-white lg:hidden"
            >
              {primaryCta.label}
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to={primaryCta.path}
            className="hidden rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand transition hover:bg-white lg:inline-flex"
          >
            {primaryCta.label}
          </Link>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-white/10 bg-brand text-onbrand">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">SSourcing China</h2>
            <p className="max-w-2xl text-sm leading-7 text-white/75">
              China-based sourcing support for overseas buyers who need reliable supplier screening, factory verification, quality inspection, production follow-up, and shipping coordination.
            </p>
            <p className="text-sm leading-7 text-white/60">
              Professional, clear, and practical support focused on helping buyers make better sourcing decisions.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pages</p>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.path} to={item.path} className="block text-sm text-white/80 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">CTA</p>
              <Link to="/contact" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
