import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Inspection' },
    { to: '/services', label: 'Production Follow-up' },
    { to: '/services', label: 'Shipping Coordination' },
  ],
  Company: [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products We Source' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-extrabold tracking-tight text-white">
                SSourcing<span className="text-brand-400">China</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-navy-300 leading-relaxed max-w-xs">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality every step of the way.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Linkedin className="w-5 h-5 text-navy-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-navy-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-navy-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-navy-400" />
                <span>Room 1208, Building A, No. 88 Huaihai Road, Shanghai, China</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-300">
                <Phone className="w-4 h-4 shrink-0 text-navy-400" />
                <a href="tel:+8613912345678" className="hover:text-white transition-colors">
                  +86 139 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-300">
                <Mail className="w-4 h-4 shrink-0 text-navy-400" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-navy-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-navy-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}