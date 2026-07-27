import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data'
import CTAButton from './CTAButton'

export default function Header() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-base font-black text-white">SS</span>
          <span>
            <span className="block text-lg font-black tracking-tight text-slate-900">SSourcing China</span>
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-600">Sourcing · QC · Shipping</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton className="px-5 py-2.5" />
        </div>

        <button
          type="button"
          className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 text-slate-900 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <CTAButton className="w-full" />
        </div>
      )}
    </header>
  )
}
