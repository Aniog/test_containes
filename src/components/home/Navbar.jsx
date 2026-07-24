import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
      scrolled || !isHome
        ? 'bg-velmora-base/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl uppercase tracking-[0.3em] font-medium ${
            scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
          }">
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`font-sans text-sm uppercase tracking-[0.1em] transition-colors hover:text-velmora-gold ${
              scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
            }`}>
              Shop
            </Link>
            <Link to="/shop?view=collections" className={`font-sans text-sm uppercase tracking-[0.1em] transition-colors hover:text-velmora-gold ${
              scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
            }`}>
              Collections
            </Link>
            <Link to="/about" className={`font-sans text-sm uppercase tracking-[0.1em] transition-colors hover:text-velmora-gold ${
              scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
            }`}>
              About
            </Link>
            <Link to="/journal" className={`font-sans text-sm uppercase tracking-[0.1em] transition-colors hover:text-velmora-gold ${
              scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
            }`}>
              Journal
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className={`transition-colors hover:text-velmora-gold ${
              scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            <button onClick={openCart} className={`transition-colors hover:text-velmora-gold relative ${
              scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
            }`}>
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-velmora-base text-xs flex items-center justify-center rounded-full font-sans">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden transition-colors hover:text-velmora-gold ${
                scrolled || !isHome ? 'text-velmora-textOnDark' : 'text-velmora-textOnDark'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-base border-t border-velmora-dividerDark">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block font-sans text-sm uppercase tracking-[0.1em] text-velmora-textOnDark hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?view=collections" className="block font-sans text-sm uppercase tracking-[0.1em] text-velmora-textOnDark hover:text-velmora-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block font-sans text-sm uppercase tracking-[0.1em] text-velmora-textOnDark hover:text-velmora-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block font-sans text-sm uppercase tracking-[0.1em] text-velmora-textOnDark hover:text-velmora-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
