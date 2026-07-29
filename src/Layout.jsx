import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              info@ssourcingchina.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +86 755 8888 9999
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Shenzhen, China
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900">SSourcing</span>
                <span className="text-blue-700 font-bold text-lg"> China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 bg-blue-700 text-white text-center px-5 py-3 rounded font-medium text-sm"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="font-bold text-lg text-white">SSourcing China</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Your trusted sourcing partner in China. We help global buyers find reliable suppliers,
                verify factories, and ensure product quality from start to finish.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  info@ssourcingchina.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  +86 755 8888 9999
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  Shenzhen, Guangdong, China
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Contact Us</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4">Products We Source</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Electronics & Components</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Machinery & Industrial</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Consumer Goods</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Textiles & Apparel</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3" />Building Materials</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
