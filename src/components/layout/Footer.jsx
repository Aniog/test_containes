import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  { label: 'Supplier Sourcing', path: '/services' },
  { label: 'Factory Verification', path: '/services' },
  { label: 'Quality Inspection', path: '/services' },
  { label: 'Production Monitoring', path: '/services' },
  { label: 'Shipping Coordination', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">SSourcing</span>
                <span className="text-[10px] leading-tight tracking-wider uppercase text-blue-300">China</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and manage logistics.
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Online
              </span>
              <span>|</span>
              <span>Mon–Fri 9:00–18:00 CST</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
              <li>
                <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  info@ssourcingchina.com
                </a>
              </li>
              <li>
                <a href="tel:+861234567890" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  +86 123 4567 890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}