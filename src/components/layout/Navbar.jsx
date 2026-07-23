import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wider ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center gap-8 ${textColor} transition-colors`}>
            <Link to="/shop" className="text-sm font-medium tracking-wide hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-sm font-medium tracking-wide hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm font-medium tracking-wide hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm font-medium tracking-wide hover:text-gold transition-colors">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor} transition-colors`}>
            <button aria-label="Search" className="hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className="relative hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
