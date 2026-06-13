import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-navy flex items-center justify-center">
                <span className="text-brand-gold font-serif text-xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-brand-navy leading-tight">
                  ARTITECT
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-slate font-medium leading-tight">
                  Machinery
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-brand-gold'
                      : 'text-brand-navy hover:text-brand-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2.5 bg-brand-gold text-white text-sm font-medium uppercase tracking-wider hover:bg-brand-gold-dark transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-brand-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-brand-cream-dark bg-white animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium uppercase tracking-wider rounded transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-brand-gold bg-brand-cream'
                      : 'text-brand-navy hover:text-brand-gold hover:bg-brand-cream'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 mt-2 bg-brand-gold text-white text-sm font-medium uppercase tracking-wider text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-brand-gold flex items-center justify-center">
                  <span className="text-brand-navy font-serif text-xl font-bold">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-white leading-tight">
                    ARTITECT
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold-light font-medium leading-tight">
                    Machinery
                  </span>
                </div>
              </div>
              <p className="text-brand-slate-light text-sm leading-relaxed">
                Precision metal folding solutions for modern manufacturing. Trusted by industry leaders worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-brand-gold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-brand-slate-light hover:text-brand-gold text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-brand-gold mb-4">Products</h4>
              <ul className="space-y-2.5">
                {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Metal Folding Machine'].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to="/products"
                        className="text-brand-slate-light hover:text-brand-gold text-sm transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-brand-gold mb-4">Contact</h4>
              <ul className="space-y-2.5 text-brand-slate-light text-sm">
                <li>info@artitectmachinery.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Industrial Blvd, Suite 200<br />Manufacturing City, MC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-navy-light mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-slate-light text-xs">
              &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
            <p className="text-brand-slate-light text-xs">
              Precision Metal Folding Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}