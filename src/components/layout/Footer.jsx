import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const footerLinks = {
  services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Inspection' },
    { to: '/services', label: 'Production Monitoring' },
    { to: '/services', label: 'Shipping & Logistics' },
  ],
  company: [
    { to: '/about', label: 'About Us' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ],
  products: [
    { to: '/products', label: 'Electronics' },
    { to: '/products', label: 'Home & Garden' },
    { to: '/products', label: 'Apparel & Accessories' },
    { to: '/products', label: 'Industrial Equipment' },
    { to: '/products', label: 'Packaging & Printing' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <div>
                <span className="font-bold text-white text-xl leading-tight">SSourcing</span>
                <span className="block text-xs text-slate-300 leading-tight">China</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China-based sourcing partner. We help international buyers find reliable suppliers, 
              verify factories, inspect quality, manage production, and coordinate shipping.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-amber-400 transition-colors">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+86 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-300 hover:text-amber-400 text-sm transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-300 hover:text-amber-400 text-sm transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-300 hover:text-amber-400 text-sm transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}