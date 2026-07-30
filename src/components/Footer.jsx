import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react'

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
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Products We Source', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-white font-bold text-lg">SSourcing China</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 max-w-sm">
              A China-based sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping — with transparency at every step.
            </p>
            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Shenzhen & Yiwu, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>English · Français · Español · Deutsch</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-neutral-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm">
            China Sourcing Agent · Supplier Verification · Quality Control · Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
