import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'
import { navItems } from '@/data/siteContent'
import PrimaryCta from '@/components/common/PrimaryCta'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950" ref={containerRef}>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link className="flex items-center gap-3" to="/">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
              SS
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">SSourcing China</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                China Sourcing Agent
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-950'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryCta />
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 lg:px-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <PrimaryCta />
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              SSourcing China
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Practical sourcing support for overseas buyers working with China.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              We help buyers identify reliable suppliers, verify factories, manage quality checks, follow production, and coordinate shipment readiness with clear communication.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-950">Pages</p>
              <ul className="mt-4 space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link className="text-sm text-slate-600 transition hover:text-slate-950" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">Get in touch</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>China-based sourcing support</li>
                <li>Email: sourcing@ssourcingchina.com</li>
                <li>Reply focus: qualified sourcing inquiries</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
