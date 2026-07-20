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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm border-b border-border'

  const textColor = isHome && !scrolled ? 'text-white' : 'text-charcoal'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${textColor} bg-transparent border-none`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl lg:text-3xl font-semibold tracking-wide ${textColor}`}>
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden lg:flex items-center gap-8 ${textColor}`}>
            <Link to="/shop" className="text-sm tracking-wide uppercase hover:text-accent transition-colors duration-200">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-wide uppercase hover:text-accent transition-colors duration-200">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-wide uppercase hover:text-accent transition-colors duration-200">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-wide uppercase hover:text-accent transition-colors duration-200">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-3 ${textColor}`}>
            <button className="p-2 hover:text-accent transition-colors duration-200 bg-transparent border-none" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className="p-2 hover:text-accent transition-colors duration-200 relative bg-transparent border-none"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="font-serif text-2xl text-charcoal hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="font-serif text-2xl text-charcoal hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-2xl text-charcoal hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="font-serif text-2xl text-charcoal hover:text-accent transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
