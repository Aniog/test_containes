import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy font-bold text-sm">AM</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wide uppercase">
                Artitect <span className="text-gold">Machinery</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gold text-navy px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-hover transition-colors"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden bg-navy-light border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-base font-medium py-2 ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block bg-gold text-navy px-4 py-2 rounded-md text-sm font-semibold text-center mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">AM</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide uppercase">
                  Artitect <span className="text-gold">Machinery</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Precision-engineered sheet metal folding solutions for the modern
                manufacturing industry. Built to last, designed to perform.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail size={16} className="text-gold shrink-0" />
                  <span>info@artitectmachinery.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                  <span>1200 Industrial Parkway, Building 4<br />Chicago, IL 60608</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
