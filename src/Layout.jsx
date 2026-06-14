import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Menu, X, Globe, ShieldCheck, Truck, Factory, ClipboardCheck, Phone, Mail, MapPin } from 'lucide-react'

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
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">SSourcing China</div>
              <div className="text-xs text-slate-500">Trusted China Sourcing Agent</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm transition-colors ${
                  location.pathname === item.to
                    ? 'text-slate-900 font-medium'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </nav>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm ${
                    location.pathname === item.to
                      ? 'text-slate-900 font-medium'
                      : 'text-slate-600'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm" className="mt-1">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Sourcing Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-tight">SSourcing China</div>
                  <div className="text-xs text-slate-500">China Sourcing Agent for Global Buyers</div>
                </div>
              </div>
              <p className="mt-3 max-w-md text-sm text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Supplier Sourcing</li>
                <li>Factory Verification</li>
                <li>Quality Inspection</li>
                <li>Production Monitoring</li>
                <li>Shipping Coordination</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> info@ssourcingchina.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +86 20 8888 6666
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Guangzhou, China
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified Supplier Network
              </span>
              <span className="inline-flex items-center gap-1">
                <Factory className="h-3.5 w-3.5" /> On-Ground QC Teams
              </span>
              <span className="inline-flex items-center gap-1">
                <Truck className="h-3.5 w-3.5" /> End-to-End Shipping
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
