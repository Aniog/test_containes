import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-slate-900">ARTITECT<span className="text-blue-600">.</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter">ARTITECT MACHINERY</h2>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
            Premium double folding and sheet metal machinery. Engineered for precision, built for durability, and designed for professionals who demand excellence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>sales@artitect.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 ARTITECT MACHINERY. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
