import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../data/siteContent.js'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-white/95 text-brand-ink shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="SSourcing China home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-lg font-extrabold text-white">SS</span>
          <span>
            <span className="block text-lg font-extrabold leading-5 text-brand-navy">SSourcing China</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">China sourcing agent</span>
          </span>
        </NavLink>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-surface text-brand-blue' : 'text-brand-muted hover:bg-brand-surface hover:text-brand-navy'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="hidden rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-900/15 transition hover:bg-blue-700 sm:inline-flex">
          Get a Free Sourcing Quote
        </NavLink>
        <div className="flex items-center gap-2 lg:hidden">
          <NavLink to="/contact" className="rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white">Quote</NavLink>
          <Menu className="h-6 w-6 text-brand-navy" aria-hidden="true" />
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-brand-border bg-white px-4 py-3 lg:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${isActive ? 'bg-brand-surface text-brand-blue' : 'text-brand-muted'}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
