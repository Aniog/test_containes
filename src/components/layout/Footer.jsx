import { Link } from 'react-router-dom'
import { Factory, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center">
                <Factory className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                ARTITECT<span className="text-brand-accent"> MACHINERY</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Precision-engineered metal folding machines built for reliability, accuracy, and industrial excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/about#contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-accent shrink-0" />
                <span>123 Industrial Parkway, Suite 400<br />Chicago, IL 60601</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <span>+1 (312) 555-0198</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}