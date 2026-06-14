import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white font-bold">
            SS
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            SSourcing China
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors hover:text-slate-900 ${
                location.pathname === item.to ? 'text-slate-900' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900">
            <Mail className="h-4 w-4" />
            <span className="hidden lg:inline">info@ssourcingchina.com</span>
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`py-1 ${location.pathname === item.to ? 'text-slate-900' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button className="w-full">Get a Free Sourcing Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
