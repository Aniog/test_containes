import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const Layout = ({ children }) => {
  const location = useLocation()
  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white font-bold">S</div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
              <div className="text-xs text-slate-500">Trusted Sourcing Partner</div>
            </div>
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

          <div className="hidden md:block">
            <Link to="/contact">
              <Button size="sm">Get a Free Sourcing Quote</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`py-1 ${
                      location.pathname === item.to ? 'text-slate-900' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button className="w-full" size="sm">Get a Free Sourcing Quote</Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white font-bold text-sm">S</div>
                <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/services" className="hover:text-slate-900">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-slate-900">Shipping Coordination</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/how-it-works" className="hover:text-slate-900">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-slate-900">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Email: info@ssourcingchina.com</li>
                <li>WeChat: ssourcing_china</li>
                <li>Location: Shenzhen, China</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
