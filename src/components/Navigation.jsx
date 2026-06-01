import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Archive, Star } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/about', label: 'The Mission' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cosmos/90 backdrop-blur-xl border-b border-nebula-900/50 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full bg-nebula-600/30 group-hover:bg-nebula-600/50 transition-colors duration-300" />
              <Archive className="w-5 h-5 text-nebula-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <span className="font-display font-semibold text-white text-lg leading-none block">
                Mnemosynē
              </span>
              <span className="text-xs text-slate-500 font-mono tracking-widest uppercase leading-none">
                Archive
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.href
                    ? 'text-nebula-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-nebula-400 transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contribute"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-nebula-600/20 border border-nebula-500/30 text-nebula-300 text-sm font-medium hover:bg-nebula-600/30 hover:border-nebula-400/50 transition-all duration-200"
            >
              <Star className="w-3.5 h-3.5" />
              Contribute Memory
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cosmos/95 backdrop-blur-xl border-t border-nebula-900/50 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? 'bg-nebula-900/50 text-nebula-300'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contribute"
            className="block px-4 py-3 rounded-lg text-sm font-medium text-nebula-300 bg-nebula-600/20 border border-nebula-500/30 mt-2"
          >
            Contribute Memory
          </Link>
        </div>
      </div>
    </nav>
  )
}
