import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/contact' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  products: [
    { label: 'Electronics & Components', path: '/products' },
    { label: 'Machinery & Equipment', path: '/products' },
    { label: 'Textiles & Apparel', path: '/products' },
    { label: 'Home & Garden', path: '/products' },
    { label: 'Auto Parts & Accessories', path: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-7 h-7 text-blue-400" />
              <span className="text-xl font-bold text-white">
                SSourcing <span className="text-blue-400">China</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+8675512345678" className="hover:text-white transition-colors">
                  +86 755 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products We Source</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
