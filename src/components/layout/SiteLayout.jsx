import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Globe2, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navigationLinks, seoByPath } from '@/data/siteContent'
import strkImgConfig from '@/strk-img-config.json'

const navLinkClass = ({ isActive }) =>
  `whitespace-nowrap text-sm font-medium transition-colors ${
    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
  }`

const setMetaDescription = (content) => {
  let meta = document.querySelector('meta[name="description"]')

  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }

  meta.content = content
}

const SiteLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    const currentSeo = seoByPath[location.pathname] || seoByPath['/']
    document.title = currentSeo.title
    setMetaDescription(currentSeo.description)
  }, [location.pathname])

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [location.pathname])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Globe2 className="h-5 w-5" />
            </div>
            <div>
              <p className="whitespace-nowrap text-base font-semibold tracking-tight text-slate-900">
                SSourcing China
              </p>
              <p className="hidden whitespace-nowrap text-sm text-slate-500 2xl:block">
                China-based sourcing support for global buyers
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-3 xl:gap-4 2xl:gap-6 lg:flex">
            {navigationLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <span className="whitespace-nowrap text-white">Get a Free Sourcing Quote</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navigationLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              >
                <span className="whitespace-nowrap text-white">Get a Free Sourcing Quote</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white" />
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xl font-semibold tracking-tight text-slate-900">
              SSourcing China
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Practical sourcing support for overseas buyers who need reliable supplier screening,
              factory verification, quality control follow-up, and shipment coordination in China.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-4 py-2">Supplier verification</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Quality inspection</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Production follow-up</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Shipping coordination</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Pages
              </p>
              <div className="mt-4 grid gap-3">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Response focus
              </p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>Clear inquiry review and next-step recommendations</p>
                <p>Support aligned with your sourcing stage</p>
                <p>Professional communication for international buyers</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
