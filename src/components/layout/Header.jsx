import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
              <span className="text-sm font-bold">SS</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
              <div className="text-xs text-slate-500">Trusted Sourcing Partner</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors hover:text-slate-900 ${
                  location.pathname === item.to ? 'text-slate-900 font-medium' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">info@ssourcingchina.com</span>
            </a>
            <Button asChild size="sm">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white pb-4">
            <nav className="flex flex-col gap-1 pt-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm ${
                    location.pathname === item.to ? 'bg-slate-100 text-slate-900 font-medium' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full">Get a Free Sourcing Quote</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
