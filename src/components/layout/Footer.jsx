import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const services = [
  { to: '/services#supplier-verification', label: 'Supplier Verification' },
  { to: '/services#quality-control', label: 'Quality Control' },
  { to: '/services#production-follow', label: 'Production Follow-up' },
  { to: '/services#shipping', label: 'Shipping Coordination' },
  { to: '/services#sourcing', label: 'Product Sourcing' },
  { to: '/services#factory-audit', label: 'Factory Audit' },
]

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-navy font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">SSourcing</span>
                <span className="text-blue-300 text-[10px] font-medium tracking-widest uppercase">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Your trusted China sourcing partner. We connect global buyers with reliable Chinese manufacturers, ensuring quality and timely delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  Room 1205, Building A,<br />
                  Nanshan District,<br />
                  Shenzhen, China 518000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-blue-200 text-sm">+86 755 8888 9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-blue-200 text-sm">info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-blue-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
