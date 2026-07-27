import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg tracking-tight">SSourcing China</span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-navy-100">Services</h3>
            <ul className="space-y-2">
              {['Supplier Search', 'Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-navy-200 hover:text-white text-sm transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-navy-100">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact Us', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-navy-200 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-navy-100">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-navy-200 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2 text-navy-200 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+86 755 8888 0000</span>
              </li>
              <li className="flex items-start gap-2 text-navy-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-300 text-sm">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <Link
            to="/contact"
            className="bg-accent-400 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-500 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </div>
    </footer>
  )
}
