import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-slate-900">
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
              {navItems.map((item) => (
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
              <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-600 hover:text-slate-900">
                info@ssourcingchina.com
              </a>
              <Button asChild size="sm">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    location.pathname === item.to ? 'bg-slate-100 text-slate-900 font-medium' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main ref={containerRef}>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                  <span className="text-sm font-bold">SS</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
                  <div className="text-xs text-slate-500">China Sourcing Agent for Global Buyers</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 max-w-md">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
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
              <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@ssourcingchina.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +86 20 1234 5678</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Guangzhou, China</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-slate-500">
              <Link to="/" className="hover:text-slate-900">Privacy Policy</Link>
              <Link to="/" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
