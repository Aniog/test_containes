import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <Globe className="w-7 h-7 text-secondary" />
              <span className="text-lg font-bold text-white">
                SSourcing China
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Blog</Link></li>
              <li><Link to="/products" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Products We Source</Link></li>
              <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-white no-underline transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-sm text-neutral-400">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-sm text-neutral-400">+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-sm text-neutral-400">Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-neutral-500 hover:text-white no-underline transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-neutral-500 hover:text-white no-underline transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
