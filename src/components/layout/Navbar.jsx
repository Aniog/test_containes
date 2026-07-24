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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-taupe shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-medium tracking-wide ${textColor} transition-colors duration-300`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm font-medium tracking-wide uppercase ${textColor} hover:opacity-70 transition-all duration-300`}>
            Shop
          </Link>
          <Link to="/shop?category=necklaces" className={`text-sm font-medium tracking-wide uppercase ${textColor} hover:opacity-70 transition-all duration-300`}>
            Collections
          </Link>
          <Link to="/about" className={`text-sm font-medium tracking-wide uppercase ${textColor} hover:opacity-70 transition-all duration-300`}>
            About
          </Link>
          <Link to="/journal" className={`text-sm font-medium tracking-wide uppercase ${textColor} hover:opacity-70 transition-all duration-300`}>
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:opacity-70 transition-opacity duration-300`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`${textColor} hover:opacity-70 transition-opacity duration-300 relative`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} hover:opacity-70 transition-opacity duration-300`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-taupe">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-charcoal text-lg font-serif tracking-wide">Shop</Link>
            <Link to="/shop?category=necklaces" className="text-charcoal text-lg font-serif tracking-wide">Collections</Link>
            <Link to="/about" className="text-charcoal text-lg font-serif tracking-wide">About</Link>
            <Link to="/journal" className="text-charcoal text-lg font-serif tracking-wide">Journal</Link>
          </div>
        </div>
      )}
    </header>
  )
}
