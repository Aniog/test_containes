import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import CTAButton from './CTAButton.jsx?ssourcing=20260728'
import { navLinks } from '@/data/siteContent.js'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-base font-bold text-white">SS</span>
          <span>
            <span className="block text-base font-bold tracking-tight">SSourcing China</span>
            <span className="block text-xs font-medium text-slate-600">China sourcing agent</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `text-sm font-semibold transition ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton href="/contact">Get a Free Sourcing Quote</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-950 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700">
                {link.label}
              </NavLink>
            ))}
            <CTAButton href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
