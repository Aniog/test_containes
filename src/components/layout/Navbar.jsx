import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Anchor } from 'lucide-react'
import { navLinks, company } from '@/data/content'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border-base">
      <nav className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={close}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Anchor className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-ink">
              {company.name}
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'text-primary-accent bg-slate-50'
                        : 'text-slate-body hover:text-primary hover:bg-slate-50',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button to="/contact" size="sm">
              Get a Free Sourcing Quote
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border-base bg-white">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={close}
                  className={({ isActive }) =>
                    cn(
                      'block px-3 py-2.5 rounded-md text-base font-medium',
                      isActive
                        ? 'text-primary-accent bg-slate-50'
                        : 'text-slate-body hover:text-primary hover:bg-slate-50',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button to="/contact" className="w-full" onClick={close}>
                Get a Free Sourcing Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
