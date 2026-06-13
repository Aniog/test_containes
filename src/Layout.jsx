import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui.jsx'

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span>🇨🇳 Based in Guangzhou, China</span>
            <span className="hidden sm:inline">✉️ info@ssourcingchina.com</span>
          </div>
          <span className="hidden md:inline">📞 +86 20 1234 5678</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-900 tracking-tight">
              <span className="text-blue-600 text-2xl">S</span>
              <span>Sourcing China</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="ml-3">
                <Button size="sm">Get a Free Quote</Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Button className="w-full mt-2">Get a Free Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">SSourcing China</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for sourcing, supplier verification, quality control, and shipping coordination from China.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Supplier Identification</li>
                <li>Factory Verification &amp; Audits</li>
                <li>Quality Control Inspections</li>
                <li>Production Monitoring</li>
                <li>Shipping &amp; Logistics Coordination</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Guangzhou, Guangdong, China</li>
                <li>info@ssourcingchina.com</li>
                <li>+86 20 1234 5678</li>
                <li>Mon–Fri, 9:00–18:00 CST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}