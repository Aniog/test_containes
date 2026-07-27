import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/siteContent'
import CTAButton from '@/components/shared/CTAButton'

const navClass = ({ isActive }) =>
  `text-sm font-medium transition ${isActive ? 'text-brand-blue' : 'text-brand-muted hover:text-brand-navy'}`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 text-brand-ink backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-sm font-bold text-white">
            SS
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-brand-navy">SSourcing China</span>
            <span className="block text-xs font-medium text-brand-muted">Sourcing • QC • Shipping</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/contact">Get a Free Sourcing Quote</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line bg-white text-brand-navy lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-white px-4 py-4 text-brand-ink shadow-sm lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <CTAButton href="/contact" className="mt-2" onClick={() => setOpen(false)}>
              Get a Free Sourcing Quote
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  )
}
