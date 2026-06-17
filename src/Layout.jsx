import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@ssourcingchina.com</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +86 755 1234 5678</span>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Shenzhen, Guangdong, China</span>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-teal rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="leading-tight">
              <span className="text-navy font-bold text-lg block leading-none">SSourcing</span>
              <span className="text-teal text-xs font-medium tracking-wide">CHINA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-teal bg-teal/5'
                    : 'text-slate-700 hover:text-teal hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1 bg-teal hover:bg-teal-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Get a Free Quote <ChevronRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-teal bg-teal/5'
                      : 'text-slate-700 hover:text-teal hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 flex items-center justify-center gap-1 bg-teal hover:bg-teal-dark text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors"
              >
                Get a Free Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-teal rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="leading-tight">
                  <span className="font-bold text-lg block leading-none">SSourcing</span>
                  <span className="text-teal-light text-xs font-medium tracking-wide">CHINA</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link to="/services" className="hover:text-teal-light transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-teal-light transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-teal-light transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-teal-light transition-colors">Production Follow-up</Link></li>
                <li><Link to="/services" className="hover:text-teal-light transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-base mb-4">Resources</h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link to="/how-it-works" className="hover:text-teal-light transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-teal-light transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-teal-light transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-teal-light transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-base mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> info@ssourcingchina.com</li>
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +86 755 1234 5678</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Room 1205, Tower B, XX Center, Nanshan District, Shenzhen, China</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-light transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
