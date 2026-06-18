import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">
                S<span className="text-blue-600">Sourcing</span> China
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 px-4 py-3 bg-blue-600 text-white font-medium text-center rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="text-2xl font-bold">
                S<span className="text-blue-400">Sourcing</span> China
              </Link>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Professional China sourcing agent helping overseas buyers find reliable suppliers, verify factories, and ensure quality.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li><span className="text-slate-400 text-sm">Supplier Verification</span></li>
                <li><span className="text-slate-400 text-sm">Quality Inspection</span></li>
                <li><span className="text-slate-400 text-sm">Production Follow-up</span></li>
                <li><span className="text-slate-400 text-sm">Shipping Coordination</span></li>
                <li><span className="text-slate-400 text-sm">Sample Management</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>Email: info@ssourcing-china.com</li>
                <li>Phone: +86 123 4567 8900</li>
                <li>WeChat: SSourcingChina</li>
                <li>Office: Shenzhen, China</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-center text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout