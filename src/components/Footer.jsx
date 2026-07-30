import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  Company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SS<span className="text-red-300">ourcing</span>
                <span className="text-blue-200 font-medium text-sm ml-1">China</span>
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-blue-200 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="text-blue-200 text-sm hover:text-white transition-colors">
                  info@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href="tel:+8620XXXXXXXX" className="text-blue-200 text-sm hover:text-white transition-colors">
                  +86 20 XXXX XXXX
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-block bg-accent text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm">
            China Sourcing Agent | Supplier Verification | Quality Control
          </p>
        </div>
      </div>
    </footer>
  )
}
