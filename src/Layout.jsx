import { useState, useEffect } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Menu, X, ChevronDown, Factory, Phone, Mail } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f5f0]">
      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#14161a]/95 backdrop-blur-sm shadow-sm'
            : 'bg-[#14161a]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#c8a45c] flex items-center justify-center rounded-sm">
                <Factory className="w-5 h-5 text-[#14161a]" />
              </div>
              <span className="font-['Playfair_Display'] text-lg md:text-xl font-semibold tracking-wide text-[#e8e4dc]">
                ARTITECT <span className="text-[#c8a45c]">MACHINERY</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'text-[#c8a45c]'
                      : 'text-[#e8e4dc]/80 hover:text-[#e8e4dc]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-sm bg-[#c8a45c] text-[#14161a] hover:bg-[#d4b87a] transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#e8e4dc]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1e2127] border-t border-[#2a2d35]">
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2.5 text-sm font-medium uppercase rounded-sm transition-colors ${
                    location.pathname === link.to
                      ? 'bg-[#14161a] text-[#c8a45c]'
                      : 'text-[#e8e4dc]/80 hover:bg-[#14161a] hover:text-[#e8e4dc]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-3 py-2.5 text-sm font-medium rounded-sm bg-[#c8a45c] text-[#14161a] text-center hover:bg-[#d4b87a] transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#14161a] text-[#e8e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#c8a45c] flex items-center justify-center rounded-sm">
                  <Factory className="w-4 h-4 text-[#14161a]" />
                </div>
                <span className="font-['Playfair_Display'] text-lg font-semibold tracking-wide">
                  ARTITECT <span className="text-[#c8a45c]">MACHINERY</span>
                </span>
              </div>
              <p className="text-[#7a7d85] text-sm leading-relaxed">
                Precision-engineered sheet metal folding machines built for durability, accuracy, and performance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#c8a45c]">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-[#7a7d85] hover:text-[#e8e4dc] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#c8a45c]">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-[#7a7d85] hover:text-[#e8e4dc] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-2 text-sm text-[#7a7d85] hover:text-[#e8e4dc] transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@artitectmachinery.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#2a2d35] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#7a7d85]">
              &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-xs text-[#7a7d85] hover:text-[#e8e4dc] cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-xs text-[#7a7d85] hover:text-[#e8e4dc] cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
