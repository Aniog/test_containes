import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', to: '/services' },
    { label: 'Factory Verification', to: '/services' },
    { label: 'Quality Inspection', to: '/services' },
    { label: 'Production Follow-up', to: '/services' },
    { label: 'Shipping Coordination', to: '/services' },
  ],
  Company: [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
  ],
  'Products We Source': [
    { label: 'Electronics', to: '/products' },
    { label: 'Furniture & Home', to: '/products' },
    { label: 'Clothing & Textiles', to: '/products' },
    { label: 'Machinery', to: '/products' },
    { label: 'All Categories', to: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl">SSourcing China</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-blue-300" />
                <span>Guangzhou, China (Operations across major manufacturing hubs)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-blue-300" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-blue-300" />
                <span>WhatsApp: +86 138 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-blue-200 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
