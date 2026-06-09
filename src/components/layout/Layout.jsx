import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronRight, Globe, Shield, Award, Factory, ClipboardCheck, Ship, Headphones } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const footerServices = [
  'Supplier Identification',
  'Factory Verification',
  'Quality Control',
  'Production Monitoring',
  'Shipping Coordination',
  'Product Development',
]

const footerPages = [
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter">
      <SkipLink />
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <TopBar />
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" role="navigation" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="SSourcing China Home">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-brand-700 leading-tight">SSourcing</span>
              <span className="text-xl font-light text-brand-500 leading-tight">China</span>
            </div>
          </Link>
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-slate-600 hover:text-brand-600 hover:bg-brand-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Get a Free Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'text-brand-600 bg-brand-50'
                          : 'text-slate-600 hover:text-brand-600 hover:bg-brand-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-2 text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
    >
      Skip to main content
    </a>
  )
}

function TopBar() {
  return (
    <div className="hidden md:block bg-brand-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        <div className="flex items-center gap-6">
          <a href="tel:+8613800000000" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+86 138 0000 0000</span>
          </a>
          <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@ssourcingchina.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-brand-200 text-xs">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Verified Suppliers</span>
          <span className="flex items-center gap-1"><Award className="w-3 h-3" /> 15+ Years Experience</span>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white leading-tight">SSourcing</span>
                <span className="text-xl font-light text-gold-400 leading-tight">China</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your trusted partner for sourcing, supplier verification, quality control, and shipping from China.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-800 rounded flex items-center justify-center">
                <Factory className="w-4 h-4 text-gold-400" />
              </div>
              <div className="w-8 h-8 bg-brand-800 rounded flex items-center justify-center">
                <ClipboardCheck className="w-4 h-4 text-gold-400" />
              </div>
              <div className="w-8 h-8 bg-brand-800 rounded flex items-center justify-center">
                <Ship className="w-4 h-4 text-gold-400" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerPages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Headphones className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Mon - Sat, 9:00 - 18:00 (CST)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
