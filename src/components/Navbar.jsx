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

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-charcoal/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-white'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl tracking-widest font-light ${textColor} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/shop"
              className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-gold transition-colors duration-300`} aria-label="Search">
              <Search size={20} />
            </button>
            <button
              onClick={openCart}
              className={`relative ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link to="/shop" className="text-sm tracking-widest uppercase font-sans text-white hover:text-gold transition-colors">Shop</Link>
            <Link to="/shop" className="text-sm tracking-widest uppercase font-sans text-white hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="text-sm tracking-widest uppercase font-sans text-white hover:text-gold transition-colors">About</Link>
            <Link to="/journal" className="text-sm tracking-widest uppercase font-sans text-white hover:text-gold transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
