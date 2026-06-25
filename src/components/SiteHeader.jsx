import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-950 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-slate-950" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-base font-black text-white">SS</span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight">SSourcing China</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Sourcing agent</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/contact#inquiry" className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">
            Get a Free Sourcing Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-950 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <a href="/contact#inquiry" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-bold text-white">
              Get a Free Sourcing Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
