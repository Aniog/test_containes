import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products-we-source' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1A365D] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+86-755-XXXX-XXXX</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>hello@ssourcingchina.com</span>
            </span>
          </div>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>Shenzhen, China</span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${
          scrolled ? 'shadow-md border-slate-200' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#1A365D] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#1A365D] font-bold text-lg leading-tight">SSourcing</span>
                <span className="text-[#64748B] text-[10px] leading-tight tracking-wider uppercase">China</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#C27A3E] bg-[#F5EDE3]'
                      : 'text-[#1E293B] hover:text-[#C27A3E] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors"
              >
                Get a Free Quote
              </Link>
              <button
                className="lg:hidden p-2 text-[#1A365D]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                    location.pathname === link.path
                      ? 'text-[#C27A3E] bg-[#F5EDE3]'
                      : 'text-[#1E293B] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block sm:hidden mt-3 text-center px-5 py-2.5 bg-[#C27A3E] text-white text-sm font-semibold rounded-md"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-[#C27A3E] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-lg">SSourcing China</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Your trusted China sourcing agent since 2012. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#C27A3E] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#C27A3E] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link to="/services" className="hover:text-[#C27A3E] transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-[#C27A3E] transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-[#C27A3E] transition-colors">Quality Control</Link></li>
                <li><Link to="/services" className="hover:text-[#C27A3E] transition-colors">Production Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-[#C27A3E] transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link to="/case-studies" className="hover:text-[#C27A3E] transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-[#C27A3E] transition-colors">Blog</Link></li>
                <li><Link to="/how-it-works" className="hover:text-[#C27A3E] transition-colors">How It Works</Link></li>
                <li><Link to="/contact" className="hover:text-[#C27A3E] transition-colors">Contact Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#C27A3E] transition-colors">Get a Quote</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#C27A3E] shrink-0" />
                  <span>Room 1205, Block A, Huaqiang North Rd, Futian District, Shenzhen, China 518031</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C27A3E] shrink-0" />
                  <span>+86-755-XXXX-XXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C27A3E] shrink-0" />
                  <span>hello@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-xs">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
