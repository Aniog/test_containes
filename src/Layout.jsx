import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">
                    ARTITECT
                  </span>
                  <span className="text-sm text-blue-700 font-semibold tracking-wider">
                    MACHINERY
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#contact"
                  className="bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-colors"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="#home"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">ARTITECT</h3>
                  <p className="text-xs text-blue-400">MACHINERY</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Precision sheet metal folding solutions for modern manufacturing.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@artitectmachinery.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Industrial Blvd</li>
                <li>City, State 12345</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
