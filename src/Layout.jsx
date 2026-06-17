import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-500 leading-tight tracking-tight">
                  SSourcing
                </span>
                <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest leading-tight">
                  China
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-600 hover:text-primary-500 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-600 hover:text-primary-500 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-neutral-100">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-neutral-900 text-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white leading-tight">SSourcing</span>
                  <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest leading-tight">
                    China
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Your reliable China sourcing partner. We help global buyers find verified
                suppliers, manage quality, and coordinate shipping.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/how-it-works" className="text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="text-neutral-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-neutral-500" />
                  <span className="text-neutral-400">Guangzhou, Guangdong, China</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-neutral-500" />
                  <a href="mailto:info@ssourcingchina.com" className="text-neutral-400 hover:text-white transition-colors">
                    info@ssourcingchina.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0 text-neutral-500" />
                  <a href="tel:+8613800000000" className="text-neutral-400 hover:text-white transition-colors">
                    +86 138 0000 0000
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
