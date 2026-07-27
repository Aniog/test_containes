import { Link } from 'react-router-dom'
import { Package, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping & Logistics', path: '/services' },
  ],
  company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white tracking-tight">
                  SSourcing
                </span>
                <span className="text-[10px] font-medium text-steel-400 -mt-1 tracking-wider uppercase">
                  China
                </span>
              </div>
            </Link>
            <p className="text-steel-300 text-sm leading-relaxed mb-6">
              Your trusted China sourcing partner. We help global buyers find
              reliable suppliers, verify factories, and manage the entire
              sourcing process.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2.5 text-steel-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-400" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-2.5 text-steel-300">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent-400" />
                <span>+86 138 0000 0000</span>
              </div>
              <div className="flex items-center gap-2.5 text-steel-300">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent-400" />
                <span>info@ssourcingchina.com</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Get Started
            </h3>
            <p className="text-sm text-steel-300 mb-5 leading-relaxed">
              Tell us what you need to source from China. We will provide a free
              quote within 24 hours.
            </p>
            <Link to="/contact" className="btn-accent text-sm w-full text-center">
              Request Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-steel-400">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-steel-200 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-steel-200 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
