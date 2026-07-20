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
    ? 'bg-cream/95 backdrop-blur-md border-b border-border'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-primary' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 ${textColor} transition-colors`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl lg:text-3xl tracking-wide ${textColor} transition-colors`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/shop" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors`}>
            Shop
          </Link>
          <Link to="/shop?category=earrings" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors`}>
            Collections
          </Link>
          <Link to="/about" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors`}>
            About
          </Link>
          <Link to="/journal" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className={`p-2 ${textColor} hover:text-accent transition-colors`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative ${textColor} hover:text-accent transition-colors`}
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block text-sm uppercase tracking-widest font-medium text-primary hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="block text-sm uppercase tracking-widest font-medium text-primary hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block text-sm uppercase tracking-widest font-medium text-primary hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="block text-sm uppercase tracking-widest font-medium text-primary hover:text-accent transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
