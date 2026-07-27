import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-blue-700" />
            <span className="text-xl font-bold text-slate-900">
              SSourcing <span className="text-blue-700">China</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-700">
              <Mail className="h-4 w-4" />
              <span>info@ssourcingchina.com</span>
            </a>
            <Button asChild size="sm" className="bg-blue-700 hover:bg-blue-800">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm text-slate-500">
                <Mail className="h-4 w-4" />
                info@ssourcingchina.com
              </a>
              <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">
                SSourcing <span className="text-blue-400">China</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted sourcing partner in China. We help global buyers find reliable suppliers, verify factories, and ensure product quality.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <span>+86 XXX XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
