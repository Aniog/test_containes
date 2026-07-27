import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <Globe className="w-7 h-7 text-primary-400" />
              <span className="text-lg font-bold text-white">SSourcing China</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Supplier Search', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact Us', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary-400 mt-0.5" />
                <span className="text-sm text-neutral-400">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary-400 mt-0.5" />
                <span className="text-sm text-neutral-400">+86 755 8888 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span className="text-sm text-neutral-400">Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-neutral-500 hover:text-white no-underline transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-neutral-500 hover:text-white no-underline transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
