import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-tight">SSourcing</span>
              <span className="text-xs text-cyan-600 font-medium leading-tight">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-700 bg-cyan-50'
                    : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-sm">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700 hover:text-cyan-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-cyan-700 bg-cyan-50'
                      : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">SSourcing</span>
                <span className="text-xs text-cyan-400 font-medium leading-tight">China</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Supplier Verification</li>
              <li>Quality Inspection</li>
              <li>Production Follow-up</li>
              <li>Shipping Coordination</li>
              <li>Custom Sourcing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">Email:</span>
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">WeChat:</span>
                <span>SSourcing_China</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">WhatsApp:</span>
                <span>+86 150 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout