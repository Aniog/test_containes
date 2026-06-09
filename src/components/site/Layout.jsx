import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { companyDetails, navigation } from '@/data/siteContent'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-950'
  }`

const Layout = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              SSourcing China
            </span>
            <span className="text-xs text-slate-500">China-based sourcing support</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-900 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:px-10">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={navLinkClass} end={item.path === '/'}>
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <h2 className="text-xl font-semibold text-white">{companyDetails.name}</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              {companyDetails.tagline}. We help overseas buyers verify suppliers, control quality,
              follow production, and coordinate shipping from China.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pages
            </h3>
            <div className="mt-4 grid gap-3 text-sm">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} className="text-slate-300 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>{companyDetails.location}</p>
              <a className="block transition hover:text-white" href={`mailto:${companyDetails.email}`}>
                {companyDetails.email}
              </a>
              <Link to="/contact" className="inline-flex text-white underline underline-offset-4">
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
