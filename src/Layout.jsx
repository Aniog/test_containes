import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Globe, Mail, Phone } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Globe className="w-7 h-7 text-navy" />
            <span className="text-xl font-bold text-navy tracking-tight">SSourcing China</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.path
                    ? 'text-navy bg-slate-100'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-lg text-sm no-underline transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 border-none bg-transparent"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium no-underline ${
                  location.pathname === link.path
                    ? 'text-navy bg-slate-100'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-accent text-white text-center font-semibold px-5 py-2.5 rounded-lg text-sm no-underline"
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
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white text-sm no-underline transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-center gap-2 text-slate-300 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                info@ssourcingchina.com
              </li>
              <li className="flex items-center gap-2 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                +86 138 0000 0000
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <Globe className="w-4 h-4 text-accent mt-0.5" />
                Guangzhou, China
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm m-0">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm m-0">
            Helping global buyers source from China with confidence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
