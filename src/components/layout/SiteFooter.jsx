import React from 'react'
import { Link } from 'react-router-dom'
import { Factory, ShieldCheck, Ship, Globe, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { name: 'Supplier Sourcing', href: '/services' },
  { name: 'Factory Verification', href: '/services' },
  { name: 'Quality Inspection', href: '/services' },
  { name: 'Production Monitoring', href: '/services' },
  { name: 'Shipping Coordination', href: '/services' },
]

const company = [
  { name: 'About Us', href: '/' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const products = [
  { name: 'Electronics', href: '/products' },
  { name: 'Textiles & Apparel', href: '/products' },
  { name: 'Home & Garden', href: '/products' },
  { name: 'Industrial Equipment', href: '/products' },
  { name: 'Auto Parts', href: '/products' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                SS
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white">SSourcing China</span>
                <span className="text-xs text-slate-400 leading-tight">Trusted Sourcing Partner</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your reliable China-based sourcing agent. We help global buyers find verified suppliers, inspect quality, and ship with confidence.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-slate-400">
                <Globe className="h-4 w-4" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-400">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Partners</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Products We Source</h3>
            <ul className="mt-4 space-y-2">
              {products.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <a href="tel:+8610-1234-5678" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +86 10-1234-5678
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <span className="text-sm text-slate-400">
                  Guangzhou, China
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild size="sm" className="w-full">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}