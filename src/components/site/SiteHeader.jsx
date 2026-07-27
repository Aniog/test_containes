import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../content'

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 text-brand-navy backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-brand-navy" aria-label="SSourcing China home" onClick={closeMenu}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-base font-bold text-white">
            SS
          </span>
          <span>
            <span className="block text-lg font-semibold leading-tight">SSourcing China</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-brand-ink/60">
              Sourcing Agent
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-brand-blue' : 'text-brand-ink/75 hover:text-brand-blue'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy sm:inline-flex"
          >
            Get a Free Sourcing Quote
          </Link>
          <button
            type="button"
            className="inline-flex rounded-xl border border-brand-line bg-white p-2.5 text-brand-navy lg:hidden"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-brand-line bg-white px-4 py-4 text-brand-navy shadow-lg lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? 'bg-brand-softBlue text-brand-blue' : 'text-brand-ink hover:bg-brand-bg hover:text-brand-blue'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default SiteHeader
