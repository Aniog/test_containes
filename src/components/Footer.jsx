import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const services = [
  { label: 'Supplier Sourcing', href: '/services' },
  { label: 'Factory Verification', href: '/services' },
  { label: 'Quality Inspection', href: '/services' },
  { label: 'Production Follow-up', href: '/services' },
  { label: 'Shipping Coordination', href: '/services' },
  { label: 'Private Label / OEM', href: '/services' },
]

const company = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products We Source', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-white font-bold text-lg">
                SSourcing<span className="text-accent-400">China</span>
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-brand-700 hover:bg-brand-600 rounded-md flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-brand-700 hover:bg-brand-600 rounded-md flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.href} className="text-neutral-300 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.label}>
                  <Link to={c.href} className="text-neutral-300 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-neutral-300 hover:text-white text-sm transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+8618000000000" className="text-neutral-300 hover:text-white text-sm transition-colors">
                  +86 180 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  Guangzhou, Guangdong, China
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs">
            China Sourcing Agent | Supplier Verification | Quality Inspection | Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
