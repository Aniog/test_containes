import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center">
            <span className="text-white font-semibold text-lg">SS</span>
          </div>
          <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-1 ${isActive ? 'text-slate-900' : 'text-slate-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Sourcing Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header