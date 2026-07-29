import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              Serving buyers in 30+ countries
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@ssourcingchina.com
            </a>
            <a href="tel:+861234567890" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +86 123 456 7890
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="font-bold text-xl text-slate-900">SSourcing</span>
                <span className="text-primary font-semibold ml-1">China</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 py-4">
            <nav className="container-custom flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Sourcing Quote
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
      <footer className="bg-slate-900 text-slate-300">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-white">SSourcing</span>
                  <span className="text-primary font-semibold ml-1">China</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Your trusted partner for sourcing products from China. We help global buyers find reliable suppliers, verify factories, and ensure quality.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {['Product Sourcing', 'Supplier Verification', 'Quality Inspection', 'Factory Audit', 'Production Monitoring', 'Shipping Coordination'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-400 hover:text-white transition-colors">
                    info@ssourcingchina.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <a href="tel:+861234567890" className="text-slate-400 hover:text-white transition-colors">
                    +86 123 456 7890
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">
                    Room 1201, Building A,<br />
                    Nanshan District,<br />
                    Shenzhen, China
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
