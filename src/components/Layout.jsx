import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/siteContent'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? 'text-sourcing-blue' : 'text-sourcing-ink hover:text-sourcing-blue'}`

  return (
    <div className="min-h-screen bg-white text-sourcing-ink">
      <header className="sticky top-0 z-50 border-b border-sourcing-mist bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sourcing-navy text-lg font-bold text-white">SS</span>
            <span>
              <span className="block text-lg font-bold leading-5 text-sourcing-navy">SSourcing China</span>
              <span className="text-xs font-medium text-sourcing-muted">Sourcing · QC · Shipping</span>
            </span>
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>{item.label}</NavLink>
            ))}
          </div>
          <a href="#inquiry" className="hidden rounded-full bg-sourcing-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-sourcing-navy lg:inline-flex">
            Get a Free Sourcing Quote
          </a>
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex rounded-xl border border-sourcing-mist bg-white p-2 text-sourcing-navy lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-sourcing-mist bg-white px-6 py-4 lg:hidden">
            <div className="grid gap-3">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={linkClass}>{item.label}</NavLink>
              ))}
              <a href="#inquiry" onClick={() => setOpen(false)} className="rounded-full bg-sourcing-blue px-5 py-3 text-center text-sm font-semibold text-white">
                Get a Free Sourcing Quote
              </a>
            </div>
          </div>
        )}
      </header>
      {children}
      <footer className="bg-sourcing-navy py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xl font-bold">SSourcing China</p>
            <p className="mt-3 text-sm leading-6 text-sourcing-mist">China sourcing agent helping overseas buyers source products, verify suppliers, inspect quality, and coordinate shipping.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Services</p>
            <p className="mt-3 text-sm leading-6 text-sourcing-mist">Supplier sourcing, supplier verification, factory audits, quality inspection, production follow-up, and shipping coordination.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Start with a product brief</p>
            <a href="#inquiry" className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-sourcing-navy hover:bg-sourcing-mist">Get a Free Sourcing Quote</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
