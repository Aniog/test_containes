import { Link } from 'react-router-dom'
import { Factory, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-text-on-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Factory className="w-6 h-6 text-gold" />
              <span className="text-lg font-bold tracking-tight">
                ARTITECT MACHINERY
              </span>
            </div>
            <p className="text-sm text-text-on-dark/70 leading-relaxed max-w-xs">
              Precision sheet metal folding machines engineered for durability,
              accuracy, and ease of use.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-text-on-dark/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-text-on-dark/70 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-text-on-dark/70 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-text-on-dark/70">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-text-on-dark/70">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                info@artitectmachinery.com
              </li>
              <li className="flex items-center gap-3 text-sm text-text-on-dark/70">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                450 Industrial Parkway, Chicago, IL 60607
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-text-on-dark/50">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}