import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Supplier Verification', path: '/services' },
      { label: 'Factory Audits', path: '/services' },
      { label: 'Quality Inspection', path: '/services' },
      { label: 'Production Monitoring', path: '/services' },
      { label: 'Shipping Coordination', path: '/services' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  products: {
    title: 'Products We Source',
    links: [
      { label: 'Electronics', path: '/products' },
      { label: 'Home & Living', path: '/products' },
      { label: 'Apparel & Textiles', path: '/products' },
      { label: 'Industrial Parts', path: '/products' },
      { label: 'Packaging Materials', path: '/products' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-600 font-bold text-sm">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">SSourcing</span>
                <span className="text-xs text-gray-400 leading-tight -mt-0.5">China</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Your trusted China-based sourcing agent. We help overseas buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+86-1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+86 123 4567 890</span>
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@ssourcingchina.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Guangzhou, Guangdong Province, China</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}