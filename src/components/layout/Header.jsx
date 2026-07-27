import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="hidden lg:block bg-neutral-900 text-neutral-300 text-sm">
        <div className="container-page flex items-center justify-end gap-6 py-2">
          <a href="tel:+861234567890" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>+86 123 4567 890</span>
          </a>
          <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span>info@ssourcingchina.com</span>
          </a>
        </div>
      </div>

      <div className="container-page">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-brand-500">SS</span>
              <span className="text-lg font-semibold text-neutral-800">ourcing China</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive(item.path)
                    ? 'text-brand-500 bg-brand-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-3">
              <Link to="/contact">
                <Button size="sm">Get a Free Quote</Button>
              </Link>
            </div>
          </nav>

          <button
            className="lg:hidden p-2 text-neutral-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white">
          <div className="container-page py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-3 py-2.5 text-sm font-medium rounded-md transition-colors',
                  isActive(item.path)
                    ? 'text-brand-500 bg-brand-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="lg">Get a Free Quote</Button>
              </Link>
            </div>
            <div className="pt-4 space-y-2 border-t border-neutral-100">
              <a href="tel:+861234567890" className="flex items-center gap-2 text-sm text-neutral-500">
                <Phone className="h-4 w-4" /> +86 123 4567 890
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm text-neutral-500">
                <Mail className="h-4 w-4" /> info@ssourcingchina.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}