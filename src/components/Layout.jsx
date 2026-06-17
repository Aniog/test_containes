import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap gap-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@artitectmachinery.com" className="hidden sm:flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@artitectmachinery.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Industrial District, Manufacturing Hub</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">ARTITECT</span>
                <span className="text-sm font-semibold text-amber-600 tracking-widest">MACHINERY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive(item.path)
                      ? 'text-amber-600 border-b-2 border-amber-600 pb-1'
                      : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-amber-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors shadow-sm"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">ARTITECT MACHINERY</div>
                  <div className="text-xs text-amber-500 tracking-wider">PRECISION ENGINEERING</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                Leading manufacturer of high-quality sheet metal folding machines and double folder systems. 
                Precision engineering for industrial applications worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-amber-400 transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-amber-500" />
                  <span>Industrial District, Manufacturing Hub</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <a href="tel:+1234567890" className="hover:text-amber-400 transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <a href="mailto:info@artitectmachinery.com" className="hover:text-amber-400 transition-colors">info@artitectmachinery.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-500 text-center">
            <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout