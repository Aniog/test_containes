import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Set up the navigation bridge for the preview iframe
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      // React Router navigation handled by Link components
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@ssourcingchina.com</span>
            </a>
            <a href="tel:+86-755-1234-5678" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+86 755 1234 5678</span>
            </a>
          </div>
          <span>Shenzhen, China</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-primary leading-tight">SSourcing</div>
                <div className="text-xs text-text-muted leading-tight">China Sourcing Agent</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/5'
                        : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors text-sm"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-primary bg-primary/5'
                        : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="block mt-3 text-center bg-accent text-white font-semibold px-5 py-3 rounded-lg hover:bg-accent-hover transition-colors"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-white leading-tight">SSourcing</div>
                  <div className="text-xs text-white/60 leading-tight">China Sourcing Agent</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Helping global buyers find reliable suppliers, verify factories, and manage quality control in China since 2015.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2.5">
                {navLinks.map((link) => (
                  <div key={link.to}>
                    <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <nav className="space-y-2.5">
                {[
                  'Supplier Sourcing',
                  'Factory Verification',
                  'Quality Inspection',
                  'Production Follow-up',
                  'Shipping Coordination',
                ].map((s) => (
                  <div key={s}>
                    <Link to="/services" className="text-white/60 hover:text-white text-sm transition-colors">
                      {s}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p>Shenzhen, Guangdong, China</p>
                <p>
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                    info@ssourcingchina.com
                  </a>
                </p>
                <p>
                  <a href="tel:+86-755-1234-5678" className="hover:text-white transition-colors">
                    +86 755 1234 5678
                  </a>
                </p>
                <p className="text-white/40 text-xs mt-4">
                  Mon - Fri: 9:00 AM - 6:00 PM (CST)
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}