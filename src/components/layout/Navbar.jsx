import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ onCartOpen, onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-velmora-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2 text-charcoal-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${
                scrolled || !isHome ? 'text-charcoal-900' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                to="/shop"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold-500 ${
                  scrolled || !isHome ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold-500 ${
                  scrolled || !isHome ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold-500 ${
                  scrolled || !isHome ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold-500 ${
                  scrolled || !isHome ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-gold-500 ${
                  scrolled || !isHome ? 'text-charcoal-900' : 'text-white'
                }`}
                onClick={onSearchOpen}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-gold-500 ${
                  scrolled || !isHome ? 'text-charcoal-900' : 'text-white'
                }`}
                onClick={onCartOpen}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-50 md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              to="/shop"
              className="font-serif text-3xl text-charcoal-900 tracking-widest uppercase hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="font-serif text-3xl text-charcoal-900 tracking-widest uppercase hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-serif text-3xl text-charcoal-900 tracking-widest uppercase hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="font-serif text-3xl text-charcoal-900 tracking-widest uppercase hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
