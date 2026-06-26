import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-navy font-bold text-lg md:text-xl">SSourcing China</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-sky-blue bg-sky-blue/5'
                      : 'text-body-text hover:text-navy hover:bg-section-bg'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="bg-sky-blue text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-sky-blue-dark transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border-gray bg-white">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-sky-blue bg-sky-blue/5'
                      : 'text-body-text hover:text-navy hover:bg-section-bg'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 bg-sky-blue text-white px-4 py-3 rounded-lg font-semibold text-sm text-center hover:bg-sky-blue-dark transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-sky-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-lg">SSourcing China</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Your reliable China sourcing partner. We help global buyers find verified suppliers, manage quality, and coordinate shipping.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services" className="text-white/70 text-sm hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-white/70 text-sm hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-white/70 text-sm hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-white/70 text-sm hover:text-white transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="text-white/70 text-sm hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Company</h4>
              <ul className="space-y-2.5">
                <li><Link to="/how-it-works" className="text-white/70 text-sm hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/case-studies" className="text-white/70 text-sm hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-white/70 text-sm hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-white/70 text-sm hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Contact</h4>
              <ul className="space-y-2.5 text-white/70 text-sm">
                <li>Guangzhou, Guangdong, China</li>
                <li>info@ssourcingchina.com</li>
                <li>+86 755 1234 5678</li>
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-4 bg-sky-blue text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-sky-blue-dark transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
