import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">AM</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              ARTITECT <span className="font-normal text-muted">MACHINERY</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                  location.pathname === link.to
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
          >
            Get a Quote
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container-main py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium uppercase tracking-widest py-2 ${
                  location.pathname === link.to
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-3 rounded-md transition-colors mt-2"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
