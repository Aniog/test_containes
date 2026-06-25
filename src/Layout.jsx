import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-text-light text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@artitectmachinery.com</span>
            </a>
          </div>
          <Link to="/contact" className="flex items-center gap-1 hover:text-accent transition-colors">
            Request a Quote <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-bold text-lg tracking-tight">ARTITECT</span>
              <span className="text-text-muted text-xs tracking-widest uppercase">Machinery</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-light transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-base font-medium py-2 transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-accent text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-text-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-bold text-lg tracking-tight">ARTITECT</span>
              </div>
              <p className="text-sm text-text-light/70 leading-relaxed">
                Precision-engineered sheet metal folding machines built for performance, reliability, and ease of use.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Products</h4>
              <ul className="space-y-2 text-sm text-text-light/70">
                <li><Link to="/products" className="hover:text-accent transition-colors">Double Folding Machines</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Sheet Metal Folders</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Metal Folding Machines</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Company</h4>
              <ul className="space-y-2 text-sm text-text-light/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Our Technology</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
              <ul className="space-y-2 text-sm text-text-light/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  +1 (234) 567-890
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  info@artitectmachinery.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-text-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-light/50">
              © 2026 ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-text-light/50">
              <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-accent transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
