import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'
import { navItems } from '@/data/siteData.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sourcing-line bg-white/95 text-sourcing-ink shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3 text-sourcing-navy" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sourcing-navy text-sm font-bold text-white">SSC</span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-base font-bold tracking-tight">SSourcing China</span>
            <span className="block whitespace-nowrap text-xs font-medium text-sourcing-muted">Sourcing, QC & shipping support</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-sourcing-sky text-sourcing-blue' : 'text-sourcing-ink hover:bg-sourcing-soft hover:text-sourcing-blue'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a className="hidden whitespace-nowrap text-sm font-semibold text-sourcing-muted hover:text-sourcing-blue 2xl:inline" href="mailto:inquiries@ssourcingchina.com">
            inquiries@ssourcingchina.com
          </a>
          <Button as={Link} to="/contact" className="whitespace-nowrap py-2.5">Get a Free Sourcing Quote</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sourcing-line bg-white text-sourcing-navy xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sourcing-line bg-white px-4 py-4 text-sourcing-ink shadow-lg xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-sourcing-sky text-sourcing-blue' : 'text-sourcing-ink hover:bg-sourcing-soft'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button as={Link} to="/contact" onClick={() => setOpen(false)} className="mt-2 w-full">Get a Free Sourcing Quote</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
