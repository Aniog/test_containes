import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Toaster />
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +86 180 1234 5678
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                info@ssourcingchina.com
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Guangzhou, China
              </span>
            </div>
            <span className="text-brand-200 text-xs">China Sourcing Agent for Global Buyers</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div>
                <span className="font-bold text-lg text-brand-500">SSourcing</span>
                <span className="text-gray-400 font-medium text-lg"> China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-brand-500'
                      : 'text-gray-600 hover:text-brand-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="default" size="default">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-brand-50 text-brand-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="default" size="default" className="w-full">
                    Get a Free Sourcing Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-lg">SSourcing China</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your trusted China sourcing agent. We help global buyers find reliable suppliers, 
                verify factories, inspect quality, and coordinate shipping.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" className="w-9 h-9 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors">
                  <span className="text-xs">fb</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Shipping & Logistics</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm">Baiyun District, Guangzhou, China</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                  <span className="text-gray-400 text-sm">+86 180 1234 5678</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                  <span className="text-gray-400 text-sm">info@ssourcingchina.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Send Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}