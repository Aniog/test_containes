import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../cart/CartContext'

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
    ? 'bg-cream/95 backdrop-blur-md border-b border-border-warm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl lg:text-3xl font-light tracking-wide ${textColor} hover:opacity-80 transition-opacity`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/shop" className={`font-sans text-sm font-medium uppercase tracking-button ${textColor} hover:text-gold transition-colors`}>
            Shop
          </Link>
          <Link to="/shop" className={`font-sans text-sm font-medium uppercase tracking-button ${textColor} hover:text-gold transition-colors`}>
            Collections
          </Link>
          <Link to="/" className={`font-sans text-sm font-medium uppercase tracking-button ${textColor} hover:text-gold transition-colors`}>
            About
          </Link>
          <Link to="/" className={`font-sans text-sm font-medium uppercase tracking-button ${textColor} hover:text-gold transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className={`p-2 hover:opacity-70 transition-opacity ${textColor}`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 hover:opacity-70 transition-opacity relative ${textColor}`}
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-cream text-[10px] font-medium flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className={`lg:hidden p-2 hover:opacity-70 transition-opacity ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border-warm">
          <div className="px-6 py-6 space-y-4">
            <Link to="/shop" className="block font-sans text-base font-medium uppercase tracking-button text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="block font-sans text-base font-medium uppercase tracking-button text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="block font-sans text-base font-medium uppercase tracking-button text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/" className="block font-sans text-base font-medium uppercase tracking-button text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
