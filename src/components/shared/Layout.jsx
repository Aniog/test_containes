import { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold text-primary-800">
                SSourcing <span className="text-accent-500">China</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-foreground hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-600 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-foreground hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-600 transition-colors mt-3"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SC</span>
                </div>
                <span className="text-xl font-bold text-white">
                  SSourcing <span className="text-accent-400">China</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted China-based sourcing partner. We help overseas buyers find reliable suppliers, verify factories, and manage the entire procurement process.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <nav className="space-y-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <nav className="space-y-2.5">
                <Link to="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Supplier Sourcing</Link>
                <Link to="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Factory Verification</Link>
                <Link to="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Quality Inspection</Link>
                <Link to="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Production Monitoring</Link>
                <Link to="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Shipping & Logistics</Link>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <div className="space-y-2.5 text-sm text-gray-400">
                <p>Shenzhen, China</p>
                <p>info@ssourcingchina.com</p>
                <p>+86 755 8662 8820</p>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-4 bg-accent-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-600 transition-colors"
              >
                Send Inquiry
              </Link>
            </div>
          </div>

          <div className="border-t border-primary-800 mt-10 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}