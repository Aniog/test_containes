import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products-we-source', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-900 text-white text-sm hidden md:block">
        <div className="container-wide flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail size={14} />
              info@ssourcingchina.com
            </a>
            <a href="tel:+86-400-888-9999" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone size={14} />
              +86 400 888 9999
            </a>
          </div>
          <span className="text-white/60">Your Trusted China Sourcing Partner</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="container-wide flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-800 rounded flex items-center justify-center text-white font-bold text-lg">
              SS
            </div>
            <div>
              <div className="text-lg font-bold text-brand-800 leading-tight">SSourcing China</div>
              <div className="text-xs text-text-muted leading-tight">Sourcing &amp; Supply Chain Solutions</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to))
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${isActive ? 'text-accent-500 bg-accent-50' : 'text-text-secondary hover:text-brand-800 hover:bg-surface-alt'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Get a Free Sourcing Quote
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-brand-800"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-surface-border shadow-lg">
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2.5 rounded text-sm font-medium ${isActive ? 'text-accent-500 bg-accent-50' : 'text-text-secondary hover:bg-surface-alt'}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                className="mt-3 text-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
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

      {/* Footer */}
      <footer className="bg-brand-900 text-white">
        <div className="container-wide py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white font-bold text-lg">
                  SS
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight">SSourcing China</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality from production to shipping.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <div className="flex flex-col gap-2">
                {['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Production Monitoring', 'Shipping & Logistics'].map((s) => (
                  <Link key={s} to="/services" className="text-white/60 hover:text-white text-sm transition-colors">
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-white/60 text-sm">
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+86 400 888 9999</span>
                </div>
                <p className="mt-2">
                  Guangzhou, Guangdong, China<br />
                  Serving clients worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}