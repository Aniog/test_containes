import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Control' },
    { to: '/services', label: 'Production Follow-Up' },
    { to: '/services', label: 'Shipping Coordination' },
  ],
  Company: [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/products', label: 'Products We Source' },
    { to: '/contact', label: 'Contact Us' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-brand-gold" />
              <span className="text-lg font-bold text-white tracking-tight">
                SSourcing<span className="text-brand-gold">China</span>
              </span>
            </Link>
            <p className="text-brand-gray-400 text-sm leading-relaxed mb-4">
              Professional China sourcing agent for global buyers. We help you find verified suppliers, ensure quality, and manage logistics.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-brand-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-300 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-brand-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" />
                <span>Room 1208, International Trade Center, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3 text-brand-gray-400 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-brand-gold" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-gray-400 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-brand-gold" />
                <a href="tel:+8675588888888" className="hover:text-white transition-colors">
                  +86 755 8888 8888
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-500 text-xs">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-gray-500 text-xs hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-gray-500 text-xs hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
