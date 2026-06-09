import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const serviceLinks = [
  'Supplier Verification',
  'Factory Audits',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Custom Sourcing',
]

const resourceLinks = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-base leading-none">S</span>
              </div>
              <span className="text-lg font-bold tracking-tight">SSourcing <span className="text-secondary">China</span></span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@ssourcingchina.com
              </a>
              <a href="tel:+8675588888888" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> +86 755-8888-8888
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Shenzhen, Guangdong, China
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-neutral-400 hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get Started</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Tell us what products you need. We will provide a detailed sourcing proposal within 24 hours.
            </p>
            <Link to="/contact" className="btn-primary text-sm w-full">
              Start Sourcing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
