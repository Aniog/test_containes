import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Inspection' },
    { to: '/services', label: 'Production Follow-up' },
    { to: '/services', label: 'Shipping Coordination' },
  ],
  Resources: [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products-we-source', label: 'Products We Source' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-brand-navy font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                SSourcing<span className="text-brand-orange">China</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and manage logistics.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-brand-orange hover:text-orange-300 text-sm font-medium transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>+86 755 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-500 text-sm hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}