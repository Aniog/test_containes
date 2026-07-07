import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm tracking-wider uppercase ${textColor} hover:text-accent transition-colors no-underline font-sans`}>
            Shop
          </Link>
          <Link to="/shop?category=earrings" className={`text-sm tracking-wider uppercase ${textColor} hover:text-accent transition-colors no-underline font-sans`}>
            Collections
          </Link>
          <Link to="/about" className={`text-sm tracking-wider uppercase ${textColor} hover:text-accent transition-colors no-underline font-sans`}>
            About
          </Link>
          <Link to="/journal" className={`text-sm tracking-wider uppercase ${textColor} hover:text-accent transition-colors no-underline font-sans`}>
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:text-accent transition-colors bg-transparent border-none p-1`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`${textColor} hover:text-accent transition-colors relative bg-transparent border-none p-1`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} bg-transparent border-none p-1`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm tracking-wider uppercase text-charcoal hover:text-accent transition-colors no-underline font-sans">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-wider uppercase text-charcoal hover:text-accent transition-colors no-underline font-sans">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-wider uppercase text-charcoal hover:text-accent transition-colors no-underline font-sans">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-wider uppercase text-charcoal hover:text-accent transition-colors no-underline font-sans">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
