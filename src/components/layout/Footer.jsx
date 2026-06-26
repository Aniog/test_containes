import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
  'Custom Packaging',
]

const company = [
  { label: 'About Us', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-base text-white">SSourcing</span>
                <span className="text-[10px] text-text-light font-medium uppercase tracking-widest">China</span>
              </div>
            </div>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, and manage quality from quote to delivery.
            </p>
            <div className="flex flex-col gap-2 text-sm text-text-light">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> info@ssourcingchina.com
              </a>
              <a href="tel:+862112345678" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +86 21 1234 5678
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Shanghai, China
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-text-light hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-text-light hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">Get Started</h4>
            <p className="text-sm text-text-light mb-5 leading-relaxed">
              Tell us what products you need. We'll respond within 24 hours with a sourcing plan and competitive quotes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Request a Quote <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-light">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
