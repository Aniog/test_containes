import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button>Get a Free Sourcing Quote</Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium py-2 ${isActive(link.href) ? 'text-slate-900' : 'text-slate-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-2">Get a Free Sourcing Quote</Button>
            </Link>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold">SS</span>
              </div>
              <span className="font-semibold text-white">SSourcing China</span>
            </div>
            <p className="text-sm">Professional China sourcing services for global buyers since 2015.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-white">About Us</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/blog" className="hover:text-white">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/services" className="hover:text-white">Supplier Sourcing</Link>
              <Link to="/services" className="hover:text-white">Factory Verification</Link>
              <Link to="/services" className="hover:text-white">Quality Control</Link>
              <Link to="/services" className="hover:text-white">Shipping Coordination</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="text-sm space-y-2">
              <p>Shanghai, China</p>
              <p>info@ssourcingchina.com</p>
              <p>+86 21 5888 9999</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout