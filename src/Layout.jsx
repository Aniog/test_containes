import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> +86 138 0013 8000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} /> info@ssourcingchina.com
            </span>
          </div>
          <span>Trusted by 500+ global buyers since 2012</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-navy">
                SSourcing<span className="text-accent-red">China</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-accent-red bg-red-50'
                        : 'text-gray-700 hover:text-accent-red hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors shadow-md"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-accent-red bg-red-50'
                        : 'text-gray-700 hover:text-accent-red hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-5 py-3 text-sm transition-colors shadow-md text-center"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-lg text-white">
                  SSourcing<span className="text-accent-gold">China</span>
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your trusted China sourcing partner. We help global buyers find
                reliable suppliers, verify factories, and manage quality control.
              </p>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone size={14} /> +86 138 0013 8000
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
                <Mail size={14} /> info@ssourcingchina.com
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navItems.slice(1).map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-gray-300 hover:text-accent-gold text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li>Supplier Sourcing & Vetting</li>
                <li>Factory Audit & Verification</li>
                <li>Quality Control Inspection</li>
                <li>Production Monitoring</li>
                <li>Shipping & Logistics</li>
                <li>Product Development Support</li>
              </ul>
            </div>

            {/* Newsletter / Trust */}
            <div>
              <h4 className="text-white font-semibold mb-4">Why Choose Us</h4>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-0.5">✓</span>
                  13+ years in China sourcing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-0.5">✓</span>
                  500+ verified supplier network
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-0.5">✓</span>
                  On-the-ground QC teams
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-0.5">✓</span>
                  Bilingual project managers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-0.5">✓</span>
                  End-to-end shipment coordination
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <span>
              © {new Date().getFullYear()} SSourcing China. All rights
              reserved.
            </span>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
