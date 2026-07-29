import { useState, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function Header({ mobileOpen, setMobileOpen }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className={`sticky top-0 z-50 ${isHome ? 'bg-brand-900/95 backdrop-blur-sm text-white' : 'bg-white border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className={`${isHome ? 'text-white' : 'text-brand-900'}`}>SSourcing</span>
            <span className={`px-2 py-0.5 rounded text-sm font-semibold ${isHome ? 'bg-brand-700 text-brand-100' : 'bg-brand-100 text-brand-700'}`}>China</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? isHome
                        ? 'bg-white/15 text-white'
                        : 'bg-brand-50 text-brand-700'
                      : isHome
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-brand-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${isHome ? 'text-white' : 'text-slate-700'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isHome ? 'text-white' : 'text-slate-700'}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-gray-50 hover:text-brand-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="block mt-2 text-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-bold text-lg">SSourcing</span>
              <span className="px-2 py-0.5 rounded bg-brand-800 text-brand-200 text-xs font-semibold">China</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional China sourcing agent helping overseas buyers find reliable suppliers, verify factories, and manage quality control.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <span className="text-slate-400">Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <span className="text-slate-400">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <span className="text-slate-400">+86 755 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
