import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products-we-source', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              +86 755 1234 5678
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              info@ssourcingchina.com
            </span>
          </div>
          <span>Your Trusted China Sourcing Partner Since 2012</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-lg">SS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-navy font-bold text-lg leading-tight">SSourcing</div>
                <div className="text-gold text-xs font-semibold tracking-wider">CHINA</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold bg-navy/5'
                        : 'text-gray-700 hover:text-navy hover:bg-surface'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Get a Free Sourcing Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy hover:bg-surface rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold bg-navy/5'
                        : 'text-gray-700 hover:text-navy hover:bg-surface'
                    }`
                  }
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-center bg-gold hover:bg-gold-light text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
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
      <footer className="bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                  <span className="text-gold font-bold text-lg">SS</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">SSourcing</div>
                  <div className="text-gold text-xs font-semibold tracking-wider">CHINA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Professional China sourcing agent helping global buyers find reliable suppliers, 
                verify factories, and manage quality control since 2012.
              </p>
              <div className="flex items-center gap-2 text-gold text-sm">
                <span className="text-gray-400">Trusted by</span>
                <span className="font-bold">200+</span>
                <span className="text-gray-400">global buyers</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.filter(l => l.to !== '/').map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-gray-400 hover:text-gold text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>Supplier Sourcing & Verification</li>
                <li>Factory Audit & Due Diligence</li>
                <li>Quality Control & Inspection</li>
                <li>Production Monitoring</li>
                <li>Logistics & Shipping Coordination</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span>+86 755 1234 5678</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
                <li className="text-gray-400">
                  Shenzhen, Guangdong, China
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-4 bg-gold hover:bg-gold-light text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}