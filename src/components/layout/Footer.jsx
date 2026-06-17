import { Factory } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Factory className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-bold text-white tracking-tight">
                ARTITECT <span className="text-amber-500">MACHINERY</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Precision metal folding machinery built with craftsmanship and engineering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>info@artitect-machinery.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Industrial Way, Chicago, IL</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
