import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products We Source', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900">SSourcing</span>
                <span className="text-lg font-light text-slate-500 ml-1">China</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 px-4 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg text-center"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-blue-light rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-white">SSourcing</span>
                  <span className="text-lg font-light text-slate-400 ml-1">China</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, 
                verify factories, inspect quality, and manage production logistics.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>Email: info@ssourcingchina.com</li>
                <li>Phone: +86 20 1234 5678</li>
                <li>Guangzhou, China</li>
                <li>
                  <Link to="/contact" className="text-brand-blue-light hover:text-blue-300 transition-colors">
                    Get a Free Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}