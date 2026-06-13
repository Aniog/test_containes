import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0f1f33] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-[#e8956a] transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@artitect.com" className="hidden sm:flex items-center gap-1 hover:text-[#e8956a] transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@artitect.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>Industrial District, Manufacturing City</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-[#1e3a5f] font-extrabold text-xl tracking-tight">ARTITECT</span>
                <span className="block text-[#c87941] text-xs font-medium -mt-1">MACHINERY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#c87941] bg-[#c87941]/10'
                      : 'text-[#374151] hover:text-[#1e3a5f] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-5 py-2 bg-[#c87941] text-white rounded-md text-sm font-medium hover:bg-[#a05d2e] transition-colors"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-[#374151] hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#c87941] bg-[#c87941]/10'
                      : 'text-[#374151] hover:text-[#1e3a5f] hover:bg-gray-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-2 bg-[#c87941] text-white rounded-md text-sm font-medium text-center hover:bg-[#a05d2e] transition-colors mt-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="font-extrabold text-xl tracking-tight">ARTITECT</span>
                  <span className="block text-[#e8956a] text-xs font-medium -mt-1">MACHINERY</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Precision engineering for sheet metal folding. Trusted by manufacturers worldwide for quality and reliability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-[#e8956a] transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Double Folding Machines</li>
                <li>Sheet Metal Folders</li>
                <li>Metal Folding Equipment</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#e8956a] flex-shrink-0" />
                  <span>Industrial District, Manufacturing City, MC 12345</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e8956a] flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-[#e8956a] transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#e8956a] flex-shrink-0" />
                  <a href="mailto:info@artitect.com" className="hover:text-[#e8956a] transition-colors">info@artitect.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
