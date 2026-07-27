import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { navItems } from './content.js'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  const activeClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-soft text-brand-blue' : 'text-brand-ink hover:bg-brand-soft hover:text-brand-blue'}`

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-page text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="SSourcing China home">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-lg font-bold text-white">SS</span>
            <span>
              <span className="block text-lg font-semibold tracking-tight text-brand-navy">SSourcing China</span>
              <span className="block text-xs font-medium text-brand-muted">Sourcing • QC • Shipping</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <NavLink key={item.href} to={item.href} className={activeClass}>{item.label}</NavLink>)}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy">
              Get a Free Sourcing Quote
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-navy lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-brand-border bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="grid gap-2">
              {navItems.map((item) => <NavLink key={item.href} to={item.href} className={activeClass}>{item.label}</NavLink>)}
            </div>
          </nav>
        )}
      </header>

      <Outlet />

      <footer className="border-t border-brand-border bg-white py-10 text-brand-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <div className="text-xl font-semibold text-brand-navy">SSourcing China</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-brand-muted">China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.</p>
          </div>
          <div>
            <div className="font-semibold text-brand-navy">Services</div>
            <div className="mt-3 grid gap-2 text-sm text-brand-muted">
              <span>Supplier search</span>
              <span>Factory verification</span>
              <span>Quality inspection</span>
              <span>Shipping coordination</span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-brand-navy">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-brand-muted">
              <span>For overseas buyers</span>
              <Link to="/contact" className="font-semibold text-brand-blue">Request a quote</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
