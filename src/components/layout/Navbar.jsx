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
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide-xl ${textColor}`}>
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center gap-8 text-sm tracking-wide uppercase ${textColor}`}>
            <Link to="/shop" className="hover:text-gold transition-colors duration-200">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-gold transition-colors duration-200">Collections</Link>
            <Link to="/about" className="hover:text-gold transition-colors duration-200">About</Link>
            <Link to="/journal" className="hover:text-gold transition-colors duration-200">Journal</Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor}`}>
            <button aria-label="Search" className="hover:text-gold transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:text-gold transition-colors duration-200"
              onClick={openCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
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
          <div className="flex flex-col gap-6 text-lg tracking-wide uppercase text-charcoal">
            <Link to="/shop" className="py-2 border-b border-border">Shop</Link>
            <Link to="/shop?category=earrings" className="py-2 border-b border-border">Collections</Link>
            <Link to="/about" className="py-2 border-b border-border">About</Link>
            <Link to="/journal" className="py-2 border-b border-border">Journal</Link>
          </div>
        </div>
      )}
    </>
  )
}
