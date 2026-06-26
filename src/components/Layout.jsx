import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-primary text-white py-2 px-4 text-sm">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone size={14} />
                +1 (555) 123-4567
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} />
                info@architectmachinery.com
              </span>
            </div>
            <div className="text-sm">
              Precision Sheet Metal Folding Solutions
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary font-display">
                  ARTITECT
                </h1>
                <p className="text-xs text-gray-600 uppercase tracking-wider">
                  Machinery
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.href
                      ? 'text-accent'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.href
                      ? 'text-accent'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-2 bg-accent text-white px-6 py-2 rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company info */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-display">
                ARTITECT MACHINERY
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Leading manufacturer of precision sheet metal folding machines.
                Quality, durability, and innovation in every machine we build.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Products</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Double Folding Machine</li>
                <li>Double Folder</li>
                <li>Sheet Metal Folder</li>
                <li>Metal Folding Machine</li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  info@architectmachinery.com
                </p>
                <p>123 Industrial Blvd</p>
                <p>Manufacturing City, MC 12345</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} ARTITECT MACHINERY. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
