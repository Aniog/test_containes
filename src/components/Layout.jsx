import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header / Navigation */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white">ARTITECT</span>
                <span className="text-xs text-slate-300 tracking-widest">MACHINERY</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  location.pathname === '/' ? 'text-orange-400' : 'text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  location.pathname === '/products' ? 'text-orange-400' : 'text-white'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  location.pathname === '/about' ? 'text-orange-400' : 'text-white'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  location.pathname === '/contact' ? 'text-orange-400' : 'text-white'
                }`}
              >
                Contact
              </Link>
              <a 
                href="#quote" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-lg font-bold">ARTITECT MACHINERY</span>
              </div>
              <p className="text-slate-400 text-sm">
                Precision engineering for sheet metal fabrication. Quality folding machines for every industry.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Home</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Products</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Products</h3>
              <ul className="space-y-2">
                <li><span className="text-slate-400 text-sm">Double Folding Machine</span></li>
                <li><span className="text-slate-400 text-sm">Sheet Metal Folder</span></li>
                <li><span className="text-slate-400 text-sm">Metal Folding Machine</span></li>
                <li><Link to="/products" className="text-orange-400 hover:text-orange-300 text-sm">View All Products →</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-sm text-slate-400">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@artitectmachinery.com</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-slate-400">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-slate-400">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Industrial Ave, Detroit, MI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 ARTITECT MACHINERY. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
