import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products We Source', href: '/products-we-source' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const SiteHeader = () => {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `text-xs font-semibold transition hover:text-brand-blue xl:text-sm ${
      isActive ? 'text-brand-blue' : 'text-brand-slate'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-brand-steel/80 bg-white/95 text-brand-ink backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-base font-bold text-white">
            SS
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-brand-navy">SSourcing China</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-brand-slate">Sourcing Agent</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-blue px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-navy xl:px-5 xl:text-sm lg:inline-flex"
        >
          Get a Free Sourcing Quote
        </Link>

        <button
          type="button"
          className="inline-flex rounded-xl border border-brand-steel bg-white p-2 text-brand-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-steel bg-white px-6 py-4 text-brand-ink lg:hidden">
          <nav className="grid gap-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
