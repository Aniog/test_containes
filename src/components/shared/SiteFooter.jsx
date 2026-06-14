import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', to: '/services' },
    { label: 'Factory Verification', to: '/services' },
    { label: 'Quality Inspection', to: '/services' },
    { label: 'Shipping Coordination', to: '/services' },
  ],
  company: [
    { label: 'About Us', to: '/case-studies' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white font-bold">
                SS
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                SSourcing China
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Your trusted China-based sourcing agent for supplier verification, quality control, and shipping coordination.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Shenzhen, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-slate-900">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <a href="tel:+8675512345678" className="hover:text-slate-900">+86 755 1234 5678</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {footerLinks.services.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-slate-900">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {footerLinks.company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-slate-900">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Get Started</h3>
            <p className="mt-3 text-sm text-slate-600">
              Ready to source from China? Contact us for a free consultation and quote.
            </p>
            <Link to="/contact" className="mt-4 inline-block">
              <Button size="sm">Get a Free Sourcing Quote</Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-700">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-700">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
