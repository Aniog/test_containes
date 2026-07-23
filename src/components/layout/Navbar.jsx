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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textColor} bg-transparent border-none p-1`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm uppercase tracking-widest ${textColor} no-underline hover:text-accent transition-colors`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-sm uppercase tracking-widest ${textColor} no-underline hover:text-accent transition-colors`}>
            Collections
          </Link>
          <Link to="/" className={`text-sm uppercase tracking-widest ${textColor} no-underline hover:text-accent transition-colors`}>
            About
          </Link>
          <Link to="/" className={`text-sm uppercase tracking-widest ${textColor} no-underline hover:text-accent transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} bg-transparent border-none p-1 hidden md:block`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`${textColor} bg-transparent border-none p-1 relative`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-widest text-charcoal no-underline py-2 border-b border-border">
              Shop
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-widest text-charcoal no-underline py-2 border-b border-border">
              Collections
            </Link>
            <Link to="/" className="text-sm uppercase tracking-widest text-charcoal no-underline py-2 border-b border-border">
              About
            </Link>
            <Link to="/" className="text-sm uppercase tracking-widest text-charcoal no-underline py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
