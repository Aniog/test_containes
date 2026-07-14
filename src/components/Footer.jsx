import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">SSourcing</span>
              <span className="text-xl font-bold text-accent">China</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white no-underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">+86 138 0000 8888</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Helping global buyers source from China since 2015.
          </p>
        </div>
      </div>
    </footer>
  )
}
