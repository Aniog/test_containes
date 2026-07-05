import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function Navbar() {
  const { totalItems, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  const navLinkClass = `text-sm tracking-wide transition-colors duration-300 ${
    transparent ? 'text-white hover:text-white/80' : 'text-charcoal-800 hover:text-gold-600'
  }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className={`w-5 h-5 ${transparent ? 'text-white' : 'text-charcoal-800'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${transparent ? 'text-white' : 'text-charcoal-800'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest font-semibold transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-charcoal-950'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={navLinkClass}>Shop</Link>
            <Link to="/shop" className={navLinkClass}>Collections</Link>
            <Link to="/" className={navLinkClass}>About</Link>
            <Link to="/" className={navLinkClass}>Journal</Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              aria-label="Search"
              className={`p-2 transition-colors duration-300 ${
                transparent ? 'text-white hover:text-white/80' : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              onClick={openCart}
              className={`p-2 relative transition-colors duration-300 ${
                transparent ? 'text-white hover:text-white/80' : 'text-charcoal-800 hover:text-gold-600'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-medium bg-gold-500 text-white rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal-100 px-4 py-6 space-y-4">
          <Link to="/shop" className="block text-charcoal-800 text-sm tracking-wide">Shop</Link>
          <Link to="/shop" className="block text-charcoal-800 text-sm tracking-wide">Collections</Link>
          <Link to="/" className="block text-charcoal-800 text-sm tracking-wide">About</Link>
          <Link to="/" className="block text-charcoal-800 text-sm tracking-wide">Journal</Link>
        </div>
      )}
    </header>
  )
}
