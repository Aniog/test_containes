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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const bg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-velmora-ink' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs tracking-super uppercase font-medium hover:text-velmora-gold transition-colors ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop?category=Earrings" className={`text-xs tracking-super uppercase font-medium hover:text-velmora-gold transition-colors ${textColor}`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs tracking-super uppercase font-medium hover:text-velmora-gold transition-colors ${textColor}`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs tracking-super uppercase font-medium hover:text-velmora-gold transition-colors ${textColor}`}>
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-super transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className={`hover:text-velmora-gold transition-colors ${textColor}`} aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button onClick={openCart} className={`relative hover:text-velmora-gold transition-colors ${textColor}`} aria-label="Cart">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-sand py-6 animate-fade-in">
            <div className="flex flex-col items-center gap-5">
              <Link to="/shop" className="text-xs tracking-super uppercase text-velmora-ink font-medium">Shop</Link>
              <Link to="/shop?category=Earrings" className="text-xs tracking-super uppercase text-velmora-ink font-medium">Collections</Link>
              <Link to="/about" className="text-xs tracking-super uppercase text-velmora-ink font-medium">About</Link>
              <Link to="/journal" className="text-xs tracking-super uppercase text-velmora-ink font-medium">Journal</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}