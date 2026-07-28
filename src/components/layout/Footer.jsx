import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Monitoring', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
    { label: 'Factory Audits', path: '/services' },
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
    <footer className="bg-brand-navy text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white tracking-tight">SSourcing</span>
                <span className="text-[10px] font-medium text-brand-orange uppercase tracking-widest">China</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality from production to shipping.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-orange transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-orange transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-orange transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">Room 1205, Tower B, World Trade Center, Guangzhou 510000, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-orange shrink-0" />
                <span className="text-sm text-gray-400">+86 20 8888 6666</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-orange shrink-0" />
                <span className="text-sm text-gray-400">info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
