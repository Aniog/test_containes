import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { navItems } from '@/data'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-slate-950" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">SS</span>
          <span>
            <span className="block text-base font-bold leading-tight">SSourcing China</span>
            <span className="hidden text-xs font-medium text-slate-600 xl:block">Sourcing agent for global buyers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `whitespace-nowrap text-[13px] font-semibold transition ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="whitespace-nowrap px-4 py-2.5 text-xs">Get a Free Sourcing Quote</Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-slate-300 bg-white p-2 text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-900 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100" onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button href="/contact" className="mt-2" onClick={() => setOpen(false)}>Get a Free Sourcing Quote</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
