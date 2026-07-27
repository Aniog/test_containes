import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Globe2, Mail, Phone, MapPin, Clock3 } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '@/data/content'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="SSourcing China home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
        <Globe2 className="h-5 w-5 text-accent" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold tracking-tight text-ink">SSourcing China</span>
        <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-500">
          Sourcing · QC · Shipping
        </span>
      </span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-brand' : 'text-slate-600 hover:text-ink'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-white"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-white px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block rounded-md px-3 py-2.5 text-sm font-medium',
                  isActive ? 'bg-brand-light text-brand' : 'text-slate-600 hover:bg-paper hover:text-ink'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-ink"
          >
            Get a Free Sourcing Quote
          </Link>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Globe2 className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <span className="text-base font-bold tracking-tight text-white">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A China-based sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, follow production and coordinate shipping.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" className="text-slate-300 transition-colors hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-300 transition-colors hover:text-white">Factory Audit & Verification</Link></li>
              <li><Link to="/services" className="text-slate-300 transition-colors hover:text-white">Quality Control & Inspection</Link></li>
              <li><Link to="/services" className="text-slate-300 transition-colors hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-slate-300 transition-colors hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 transition-colors hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-slate-300">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-slate-300">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-slate-300">{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            China Sourcing Agent · Supplier Verification · Quality Control · Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
