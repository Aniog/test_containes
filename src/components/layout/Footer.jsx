import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ARTITECT<span className="text-amber-400 ml-1">MACHINERY</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision-engineered sheet metal folding machines built for performance, reliability, and lasting value.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Sheet Metal Folders</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Metal Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                <span>Industrial District, Manufacturing City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
