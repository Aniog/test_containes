import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/data/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, totalItems } = useCart()
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
    ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand/50'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-wide-xl ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-sans font-medium ${textColor}`}>
          <Link to="/shop" className="hover:text-brand-gold transition-colors duration-300">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="hover:text-brand-gold transition-colors duration-300">
            Collections
          </Link>
          <Link to="/about" className="hover:text-brand-gold transition-colors duration-300">
            About
          </Link>
          <Link to="/journal" className="hover:text-brand-gold transition-colors duration-300">
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button aria-label="Search" className="hover:text-brand-gold transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative hover:text-brand-gold transition-colors duration-300"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand">
          <div className="flex flex-col px-6 py-6 gap-4 text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal">
            <Link to="/shop" className="py-2 hover:text-brand-gold transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="py-2 hover:text-brand-gold transition-colors">Collections</Link>
            <Link to="/about" className="py-2 hover:text-brand-gold transition-colors">About</Link>
            <Link to="/journal" className="py-2 hover:text-brand-gold transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </header>
  )
}
