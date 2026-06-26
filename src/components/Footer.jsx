import { Link } from 'react-router-dom'
import { Factory, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Factory className="w-7 h-7 text-accent-500" />
              <span className="text-lg font-bold text-white tracking-tight">
                ARTITECT <span className="text-accent-500">MACHINERY</span>
              </span>
            </Link>
            <p className="text-brand-400 text-sm leading-relaxed">
              Precision sheet metal folding machines built for reliability, accuracy, and long-lasting performance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-brand-400 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-brand-400 hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-brand-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-brand-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><span className="text-brand-400 text-sm">Double Folding Machine</span></li>
              <li><span className="text-brand-400 text-sm">Sheet Metal Folder</span></li>
              <li><span className="text-brand-400 text-sm">Metal Folding Machine</span></li>
              <li><span className="text-brand-400 text-sm">CNC Folder</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-400 text-sm">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span>123 Industrial Way, Manufacturing District, IL 60007</span>
              </li>
              <li className="flex items-center gap-3 text-brand-400 text-sm">
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <span>+1 (312) 555-0198</span>
              </li>
              <li className="flex items-center gap-3 text-brand-400 text-sm">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 text-center text-brand-500 text-sm">
          &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
