import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl lg:text-3xl font-light tracking-wide ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden lg:flex items-center gap-8 ${textColor}`}>
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/journal" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button className="hidden lg:block hover:text-accent transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className="relative hover:text-accent transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm tracking-widest uppercase text-charcoal hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase text-charcoal hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-widest uppercase text-charcoal hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-widest uppercase text-charcoal hover:text-accent transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
