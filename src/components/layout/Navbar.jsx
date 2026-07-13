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

  const navBg = !isHome || scrolled
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent'

  const textColor = !isHome || scrolled ? 'text-charcoal' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-medium ${textColor} transition-colors`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
          <Link to="/shop" className="text-sm uppercase tracking-widest font-sans font-medium hover:text-gold transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=necklaces" className="text-sm uppercase tracking-widest font-sans font-medium hover:text-gold transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-sm uppercase tracking-widest font-sans font-medium hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/journal" className="text-sm uppercase tracking-widest font-sans font-medium hover:text-gold transition-colors">
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button className="hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative hover:text-gold transition-colors"
            onClick={openCart}
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
            className="md:hidden hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=necklaces" className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
