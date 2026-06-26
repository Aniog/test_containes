import { useState, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products We Source', path: '/products-we-source' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white/95'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-dark-text text-lg tracking-tight">SSourcing</span>
                <span className="text-xs text-medium-text -mt-0.5">China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-primary-blue bg-primary-blue/5'
                        : 'text-medium-text hover:text-dark-text hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-accent-red text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-accent-red-hover transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-dark-text"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                      isActive
                        ? 'text-primary-blue bg-primary-blue/5'
                        : 'text-medium-text hover:text-dark-text hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                className="block text-center bg-accent-red text-white px-5 py-3 rounded-md font-semibold text-sm mt-3"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0F2B44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-white text-lg tracking-tight">SSourcing</span>
                  <span className="text-xs text-gray-400 -mt-0.5">China</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted China-based sourcing agent. We help international buyers find reliable suppliers,
                verify factories, ensure quality, and manage shipping — all from China.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-300 text-sm hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2.5">
                <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Production Monitoring</Link></li>
                <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition-colors">Shipping & Logistics</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2.5 text-gray-300 text-sm">
                <li>Guangzhou, China</li>
                <li>info@ssourcingchina.com</li>
                <li>+86 20 8888 6666</li>
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-6 bg-accent-red text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-accent-red-hover transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}