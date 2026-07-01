import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleDrawer, totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-surface/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen ? 'text-base' : 'text-surface'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}>
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-1 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-product font-semibold transition-colors ${textColor}`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs uppercase tracking-nav font-sans transition-colors hover:text-gold ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop?collection=all" className={`text-xs uppercase tracking-nav font-sans transition-colors hover:text-gold ${textColor}`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs uppercase tracking-nav font-sans transition-colors hover:text-gold ${textColor}`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs uppercase tracking-nav font-sans transition-colors hover:text-gold ${textColor}`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-1 transition-colors hover:text-gold ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleDrawer} className={`p-1 relative transition-colors hover:text-gold ${textColor}`} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[10px] font-sans rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-divider">
          <div className="px-6 py-6 space-y-4">
            <Link to="/shop" className="block text-sm uppercase tracking-nav font-sans text-base hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?collection=all" className="block text-sm uppercase tracking-nav font-sans text-base hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block text-sm uppercase tracking-nav font-sans text-base hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block text-sm uppercase tracking-nav font-sans text-base hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
