import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, Globe } from 'lucide-react'

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
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                <Globe className="h-5 w-5" />
              </div>
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

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">info@ssourcingchina.com</span>
              </a>
              <Button asChild size="sm">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === item.to ? 'bg-slate-50 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
                  <div className="text-xs text-slate-500">China Sourcing Agent for Global Buyers</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600 max-w-md">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link to="/services" className="hover:text-slate-900">Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-slate-900">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-slate-900">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@ssourcingchina.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +86 20 1234 5678</li>
                <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> Guangzhou, China</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-slate-700">Privacy Policy</Link>
              <Link to="/" className="hover:text-slate-700">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
