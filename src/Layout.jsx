import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="hidden sm:inline text-white/80">Your Trusted China Sourcing Partner</span>
          <div className="flex items-center gap-4 text-white/90">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1 hover:text-white no-underline text-white/90">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@ssourcingchina.com</span>
            </a>
            <a href="tel:+8613800000000" className="flex items-center gap-1 hover:text-white no-underline text-white/90">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+86 138 0000 0000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-text-primary">SSourcing<span className="text-accent">China</span></span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent bg-accent/5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-alt'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-3 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2 rounded-lg text-sm no-underline transition-colors"
              >
                Get a Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-alt border-none bg-transparent cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium no-underline ${
                    location.pathname === link.path
                      ? 'text-accent bg-accent/5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-alt'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 bg-accent text-white font-semibold px-5 py-2.5 rounded-lg text-sm text-center no-underline"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-xl font-bold">SSourcing<span className="text-accent">China</span></span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality control.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link to="/services" className="text-white/70 hover:text-white text-sm no-underline">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white text-sm no-underline">Factory Verification</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white text-sm no-underline">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white text-sm no-underline">Production Follow-up</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white text-sm no-underline">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link to="/how-it-works" className="text-white/70 hover:text-white text-sm no-underline">How It Works</Link></li>
                <li><Link to="/products" className="text-white/70 hover:text-white text-sm no-underline">Products We Source</Link></li>
                <li><Link to="/case-studies" className="text-white/70 hover:text-white text-sm no-underline">Case Studies</Link></li>
                <li><Link to="/blog" className="text-white/70 hover:text-white text-sm no-underline">Blog</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white text-sm no-underline">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li className="text-white/70 text-sm">Guangzhou, China</li>
                <li><a href="mailto:info@ssourcingchina.com" className="text-white/70 hover:text-white text-sm no-underline">info@ssourcingchina.com</a></li>
                <li><a href="tel:+8613800000000" className="text-white/70 hover:text-white text-sm no-underline">+86 138 0000 0000</a></li>
                <li className="text-white/70 text-sm">Mon-Fri: 9:00 - 18:00 CST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">&copy; 2026 SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm no-underline">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm no-underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
