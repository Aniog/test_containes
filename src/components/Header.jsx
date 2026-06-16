import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              ARTITECT<span className="text-blue-600">MACHINERY</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@artitectmachinery.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@artitectmachinery.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              <a href="tel:+1234567890" className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@artitectmachinery.com" className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@artitectmachinery.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
