import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Mail, Phone } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-sky" />
            <span className="text-xl font-bold text-navy">SSourcing China</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-sky bg-blue-50'
                    : 'text-slate-600 hover:text-sky hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-sky text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-sky-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-sky bg-transparent border-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-sky bg-blue-50'
                    : 'text-slate-600 hover:text-sky hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-sky text-white px-4 py-2.5 rounded-lg font-semibold text-sm text-center hover:bg-sky-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-7 h-7 text-sky" />
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-sky transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-sky transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-sky transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-sky transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-sky transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/how-it-works" className="hover:text-sky transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-sky transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-sky transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-sky transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-sky transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-sky mt-0.5" />
                <span>Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Helping global buyers source from China since 2015.
          </p>
        </div>
      </div>
    </footer>
  )
}

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
