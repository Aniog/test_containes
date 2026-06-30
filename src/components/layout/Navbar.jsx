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
    ? 'bg-cream/95 backdrop-blur-md border-b border-border shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${textColor} bg-transparent border-none`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-section ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm font-sans font-medium tracking-wide ${textColor} hover:text-accent transition-colors no-underline`}>
            Shop
          </Link>
          <Link to="/shop?category=necklaces" className={`text-sm font-sans font-medium tracking-wide ${textColor} hover:text-accent transition-colors no-underline`}>
            Collections
          </Link>
          <Link to="/about" className={`text-sm font-sans font-medium tracking-wide ${textColor} hover:text-accent transition-colors no-underline`}>
            About
          </Link>
          <Link to="/journal" className={`text-sm font-sans font-medium tracking-wide ${textColor} hover:text-accent transition-colors no-underline`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className={`p-2 ${textColor} hover:text-accent transition-colors bg-transparent border-none`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`p-2 relative ${textColor} hover:text-accent transition-colors bg-transparent border-none`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-base font-sans text-charcoal hover:text-accent transition-colors no-underline">
              Shop
            </Link>
            <Link to="/shop?category=necklaces" className="text-base font-sans text-charcoal hover:text-accent transition-colors no-underline">
              Collections
            </Link>
            <Link to="/about" className="text-base font-sans text-charcoal hover:text-accent transition-colors no-underline">
              About
            </Link>
            <Link to="/journal" className="text-base font-sans text-charcoal hover:text-accent transition-colors no-underline">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
