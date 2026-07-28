import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Mail, MapPin, Phone } from 'lucide-react'
import CTAButton from './CTAButton.jsx'

const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['How It Works', '/how-it-works'],
  ['Products We Source', '/products'],
  ['Case Studies', '/case-studies'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
]

const RouteBridge = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__ }
  }, [navigate])
  return null
}

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-brand-slate">
      <RouteBridge />
      <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-sm font-bold text-white">SS</span>
            <span>
              <span className="block text-lg font-bold tracking-tight text-brand-navy">SSourcing China</span>
              <span className="block text-xs font-medium text-brand-muted">Sourcing • QC • Shipping</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <NavLink key={href} to={href} className={({ isActive }) => `text-sm font-semibold transition hover:text-brand-blue ${isActive ? 'text-brand-blue' : 'text-brand-slate'}`}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block"><CTAButton>Get a Free Sourcing Quote</CTAButton></div>
          <button className="rounded-lg border border-brand-border p-2 text-brand-navy lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-brand-border bg-white px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map(([label, href]) => <NavLink key={href} to={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-slate hover:bg-brand-mist hover:text-brand-blue">{label}</NavLink>)}
              <CTAButton className="mt-2 w-full" onClick={() => setOpen(false)}>Get a Free Sourcing Quote</CTAButton>
            </div>
          </div>
        )}
      </header>
      {children}
      <footer className="bg-brand-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <p className="text-xl font-bold">SSourcing China</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">China-based sourcing support for overseas buyers who need reliable supplier search, factory verification, quality inspection, production follow-up, and shipping coordination.</p>
          </div>
          <div><p className="font-semibold">Pages</p><div className="mt-4 grid gap-2 text-sm text-white/75">{navItems.slice(1).map(([label, href]) => <Link key={href} to={href} className="hover:text-white">{label}</Link>)}</div></div>
          <div><p className="font-semibold">Contact</p><div className="mt-4 space-y-3 text-sm text-white/75"><p className="flex gap-2"><MapPin className="h-4 w-4 text-brand-amber" /> China sourcing office</p><p className="flex gap-2"><Mail className="h-4 w-4 text-brand-amber" /> inquiries@ssourcingchina.com</p><p className="flex gap-2"><Phone className="h-4 w-4 text-brand-amber" /> Response within one business day</p></div></div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">© 2026 SSourcing China. Practical sourcing support for global buyers.</div>
      </footer>
    </div>
  )
}

export default Layout
