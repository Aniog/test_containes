import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Menu, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { navigationItems, pageTitles, primaryCta } from '@/content/siteContent.js'
import { useStrkImages } from '@/lib/useStrkImages.js'

const navLinkClass = ({ isActive }) =>
  `whitespace-nowrap text-sm font-medium transition ${isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'}`

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = pageTitles[location.pathname] || pageTitles['/']
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useStrkImages(containerRef, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-slate-950">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
              SS
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-slate-950">SSourcing China</p>
              <p className="hidden text-xs font-medium uppercase tracking-[0.16em] text-slate-500 2xl:block">
                China sourcing support for overseas buyers
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 xl:flex">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden 2xl:block">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">
              {navigationItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
              <Link
                to={primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main ref={containerRef}>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">SSourcing China</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white">
              Practical sourcing support in China for buyers who need clear communication and reliable follow-up.
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Supplier search and shortlisting',
                'Factory verification and audit support',
                'Quality inspection and production follow-up',
                'Shipping coordination for export orders',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-300" />
                  <span className="text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-300 lg:text-right">
              Tell us what you need to source, where you plan to ship, and which support services matter most.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
