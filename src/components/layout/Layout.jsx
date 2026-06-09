import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products-we-source' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-900 text-blue-100 text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              info@ssourcingchina.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +86 755 8888 8888
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Shenzhen, Guangdong, China
          </span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="text-xl font-bold text-blue-900">SSourcing</span>
                <span className="text-xl font-light text-blue-700 ml-1">China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Get a Free Sourcing Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-lg font-bold text-white">SSourcing China</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure product quality.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Shenzhen, Guangdong, China</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>+86 755 8888 8888</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
