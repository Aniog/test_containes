import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Monitoring', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  products: [
    { label: 'Consumer Electronics', path: '/products' },
    { label: 'Home & Kitchen', path: '/products' },
    { label: 'Apparel & Textiles', path: '/products' },
    { label: 'Industrial Parts', path: '/products' },
    { label: 'Packaging Materials', path: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-lg">
                SSourcing <span className="text-brand-300">China</span>
              </span>
            </div>
            <p className="text-surface-300 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="space-y-3 text-sm text-surface-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-300 shrink-0" />
                <span>Guangzhou, Guangdong Province, China</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-300 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-300 shrink-0" />
                <a href="tel:+862088888888" className="hover:text-white transition-colors">+86 20 8888 8888</a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-300 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-surface-300 text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-300 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-surface-300 text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-300 mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-surface-300 text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-surface-400 text-sm text-center">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}