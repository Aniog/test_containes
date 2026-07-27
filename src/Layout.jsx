import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, Factory, Search, ShieldCheck, Ship, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, opts)
    }
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="hidden md:block bg-brand-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +86 755 8888 6666
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> info@ssourcingchina.com
            </span>
          </div>
          <span>Serving global buyers since 2012</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-brand-900 tracking-tight">SSourcing</div>
                <div className="text-[10px] font-semibold text-accent-500 uppercase tracking-widest">China</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="accent" onClick={() => navigate('/contact')}>
                Get a Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                      isActive
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <Button variant="accent" className="w-full" onClick={() => { setMobileMenuOpen(false); navigate('/contact') }}>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-brand-600" />
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-bold text-white tracking-tight">SSourcing</div>
                  <div className="text-[10px] font-semibold text-accent-400 uppercase tracking-widest">China</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality from production to delivery.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-300 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <Search className="w-4 h-4 text-accent-400" /> Supplier Sourcing
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <Factory className="w-4 h-4 text-accent-400" /> Factory Verification
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <ShieldCheck className="w-4 h-4 text-accent-400" /> Quality Control
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <Ship className="w-4 h-4 text-accent-400" /> Shipping Coordination
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-accent-400" /> +86 755 8888 6666
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-accent-400" /> info@ssourcingchina.com
                </li>
                <li className="text-slate-300 mt-1">
                  Shenzhen, Guangdong, China
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}