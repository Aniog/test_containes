import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', href: '/services' },
    { label: 'Factory Verification', href: '/services' },
    { label: 'Quality Inspection', href: '/services' },
    { label: 'Production Follow-up', href: '/services' },
    { label: 'Shipping Coordination', href: '/services' },
  ],
  Company: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Products We Source', href: '/products' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg leading-none">S</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg tracking-tight">SSourcing</span>
                <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-blue-200 text-sm hover:text-white transition-colors"
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
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-red-300" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-red-300" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">
                  info@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-red-300" />
                <a href="tel:+8613800000000" className="hover:text-white transition-colors">
                  +86 138 0000 0000
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-block bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-blue-200 text-sm">
            China Sourcing Agent | Supplier Verification | Quality Inspection | Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
