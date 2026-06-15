import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              SSourcing<span className="text-blue-400">China</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted China sourcing agent, helping global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-blue-400 transition-colors">
                  Products We Source
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Supplier Verification</li>
              <li className="text-sm">Factory Audits</li>
              <li className="text-sm">Quality Inspection</li>
              <li className="text-sm">Production Monitoring</li>
              <li className="text-sm">Shipping Coordination</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Shenzhen, Guangdong, China</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+86 755 XXXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">info@ssourcingchina.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
