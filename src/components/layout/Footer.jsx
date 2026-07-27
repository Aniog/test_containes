import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Supplier Verification', path: '/services' },
      { label: 'Factory Audits', path: '/services' },
      { label: 'Quality Inspection', path: '/services' },
      { label: 'Production Monitoring', path: '/services' },
      { label: 'Shipping & Logistics', path: '/services' },
      { label: 'Product Sourcing', path: '/services' },
    ],
  },
  products: {
    title: 'Products We Source',
    links: [
      { label: 'Electronics & Components', path: '/products' },
      { label: 'Home & Kitchen', path: '/products' },
      { label: 'Apparel & Textiles', path: '/products' },
      { label: 'Industrial Equipment', path: '/products' },
      { label: 'Packaging & Materials', path: '/products' },
      { label: 'Auto Parts & Accessories', path: '/products' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-brand-400">SS</span>
              <span className="text-lg font-semibold text-white">ourcing China</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, ensure quality, and handle logistics from start to finish.
            </p>
            <div className="space-y-3">
              <a href="tel:+861234567890" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-400" />
                <span>+86 123 4567 890</span>
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-brand-400" />
                <span>info@ssourcingchina.com</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="h-4 w-4 text-brand-400" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      <ChevronRight className="h-3 w-3 text-brand-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}