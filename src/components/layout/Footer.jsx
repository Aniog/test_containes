import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const footerLinks = {
  services: [
    { to: '/services', label: 'Supplier Verification' },
    { to: '/services', label: 'Quality Inspection' },
    { to: '/services', label: 'Production Monitoring' },
    { to: '/services', label: 'Shipping & Logistics' },
    { to: '/services', label: 'Product Sourcing' },
  ],
  company: [
    { to: '/about', label: 'About Us' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ],
  resources: [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products We Source' },
    { to: '/faq', label: 'FAQ' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy-800 font-bold text-sm">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">SSourcing</span>
                <span className="text-xs text-gray-400 leading-tight -mt-0.5">China</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted China-based sourcing partner. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>Guangzhou, Guangdong Province, China</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <a href="tel:+861234567890" className="hover:text-white transition-colors">+86 123 4567 890</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}