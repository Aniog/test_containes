import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-brand-navy font-bold text-lg tracking-tight">SSourcing</span>
              <span className="text-content-muted text-[10px] font-medium tracking-widest uppercase">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-navy bg-brand-navy/5'
                      : 'text-content-secondary hover:text-brand-navy hover:bg-surface-light'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-brand-orange text-white font-semibold text-sm rounded-lg hover:bg-brand-orange-hover transition-colors shadow-sm"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-content-secondary hover:text-brand-navy hover:bg-surface-light"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border-light bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-navy bg-brand-navy/5'
                      : 'text-content-secondary hover:text-brand-navy hover:bg-surface-light'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-2.5 bg-brand-orange text-white font-semibold text-sm rounded-lg hover:bg-brand-orange-hover transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
