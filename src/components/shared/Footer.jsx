import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-brand rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/how-it-works" className="text-gray-300 text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-300 text-sm hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 text-sm hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-sky-brand flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-sky-brand flex-shrink-0" />
                <span className="text-gray-300 text-sm">+86 755 1234 5678</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-brand flex-shrink-0" />
                <span className="text-gray-300 text-sm">Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
