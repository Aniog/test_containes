import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'
import { useState } from 'react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +86 123 4567 8901</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@ssourcingchina.com</span>
          </div>
          <div className="flex space-x-4">
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-md font-bold text-xl">SS</div>
            <span className="font-bold text-2xl text-primary tracking-tight">SSourcing <span className="text-secondary">China</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-slate-600 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors shadow-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-lg absolute w-full left-0">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="block text-slate-600 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="block bg-accent text-white px-6 py-3 rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white p-1 rounded-sm font-bold">SS</div>
              <span className="font-bold text-xl text-white">SSourcing China</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted sourcing partner in China. We help businesses worldwide find reliable suppliers, ensure quality, and streamline their supply chain.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Product Sourcing</li>
              <li>Supplier Verification</li>
              <li>Quality Control</li>
              <li>Production Follow-up</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-accent" /> Shenzhen, Guangdong, China</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 shrink-0 text-accent" /> +86 123 4567 8901</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2 shrink-0 text-accent" /> info@ssourcingchina.com</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
