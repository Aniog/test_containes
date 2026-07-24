import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-200">
              Shop
            </Link>
            <Link to="/shop" className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-200">
              Collections
            </Link>
            <Link to="/" className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-200">
              About
            </Link>
            <Link to="/" className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-200">
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-semibold tracking-wide-lg text-charcoal transition-all duration-300 ${
              scrolled ? '' : ''
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-charcoal hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-charcoal hover:text-gold transition-colors relative"
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-cream/95 backdrop-blur-md space-y-4">
          <Link
            to="/shop"
            className="block text-sm uppercase tracking-widest text-charcoal hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/shop"
            className="block text-sm uppercase tracking-widest text-charcoal hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/"
            className="block text-sm uppercase tracking-widest text-charcoal hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            to="/"
            className="block text-sm uppercase tracking-widest text-charcoal hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Journal
          </Link>
        </div>
      </div>
    </nav>
  )
}