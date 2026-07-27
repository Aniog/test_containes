import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-7 h-7 text-brand-orange" />
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-brand-orange transition">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/how-it-works" className="hover:text-brand-orange transition">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-brand-orange transition">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand-orange transition">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-brand-orange transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-brand-orange flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-brand-orange flex-shrink-0" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-orange flex-shrink-0" />
                <span>Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
