import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-xl">SS</span>
              </div>
              <div>
                <div className="font-semibold text-xl text-slate-900">SSourcing China</div>
                <div className="text-xs text-slate-500 -mt-1">China Sourcing Agent</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive(link.href) ? 'text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                  <span className="text-slate-900 font-semibold text-lg">SS</span>
                </div>
                <span className="font-semibold text-white text-lg">SSourcing China</span>
              </div>
              <p className="text-sm text-slate-400">
                Professional China sourcing agent helping global buyers find reliable suppliers since 2015.
              </p>
            </div>

            <div>
              <div className="font-semibold text-white mb-4">Company</div>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <div className="font-semibold text-white mb-4">Services</div>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link>
                <Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link>
                <Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link>
                <Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link>
              </div>
            </div>

            <div>
              <div className="font-semibold text-white mb-4">Contact</div>
              <div className="flex flex-col gap-3 text-sm">
                <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} /> info@ssourcingchina.com
                </a>
                <a href="tel:+862162345678" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={16} /> +86 21 6234 5678
                </a>
                <div className="pt-2 text-slate-400">
                  Shanghai, China
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
            <div>© 2026 SSourcing China. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout