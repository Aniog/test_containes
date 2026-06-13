import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '@/data/siteContent'

const SiteHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-sm font-semibold text-slate-900"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-base font-bold text-white">
            SS
          </span>
          <span>
            <span className="block text-base font-bold text-slate-900">
              SSourcing China
            </span>
            <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">
              China sourcing support
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-sky-700' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact#inquiry-form"
            className="inline-flex items-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact#inquiry-form"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
