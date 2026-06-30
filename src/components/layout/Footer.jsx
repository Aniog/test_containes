import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg text-white">SSourcing China</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products-we-source" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-Up</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Sample Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <span>Guangzhou, China</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <a href="tel:+861234567890" className="hover:text-white transition-colors">+86 123 4567 890</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <span>ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}