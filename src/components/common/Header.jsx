import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/siteContent'
import CTAButton from './CTAButton'

const navLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-brand-sky text-brand-blue' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold text-white">SS</span>
          <span>
            <span className="block text-base font-bold leading-tight text-brand-navy">SSourcing China</span>
            <span className="block text-xs font-medium text-slate-500">Sourcing • QC • Shipping</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton to="/contact" className="px-4 py-2.5">Get a Free Sourcing Quote</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white text-brand-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-line bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navLinkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <CTAButton to="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      )}
    </header>
  )
}
