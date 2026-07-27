import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +86 755 8888 6666
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> info@ssourcingchina.com
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Shenzhen, China
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="leading-tight">
                <span className="text-primary font-bold text-lg md:text-xl">SSourcing</span>
                <span className="text-slate-500 text-xs block -mt-0.5">China</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-accent bg-blue-50'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors shadow-sm"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    location.pathname === link.to
                      ? 'text-accent bg-blue-50'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-cta text-white px-5 py-3 rounded-lg font-semibold mt-3 hover:bg-orange-600 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">SS</span>
                </div>
                <div className="leading-tight">
                  <span className="text-white font-bold text-lg">SSourcing</span>
                  <span className="text-slate-300 text-xs block -mt-0.5">China</span>
                </div>
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Your trusted partner for sourcing, supplier verification, quality control, and logistics in China.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-slate-300 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Futian District, Shenzhen, Guangdong, China</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+86 755 8888 6666</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
