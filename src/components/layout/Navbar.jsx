import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { name: 'Shop', path: '/collection' },
  { name: 'Collections', path: '/collection' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'
  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wider ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-sans uppercase tracking-[0.15em] ${textColor} hover:text-gold transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-gold transition-colors`} aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className={`relative ${textColor} hover:text-gold transition-colors`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-charcoal text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-lg border-t border-light-gray animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-sm font-sans uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
