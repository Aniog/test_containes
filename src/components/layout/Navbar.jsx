import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/data/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = scrolled || !isHome || mobileMenuOpen
    ? 'bg-velmora-cream shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileMenuOpen
    ? 'text-velmora-charcoal'
    : 'text-white'

  const logoColor = scrolled || !isHome || mobileMenuOpen
    ? 'text-velmora-charcoal'
    : 'text-velmora-gold'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider transition-colors duration-500 ${logoColor}`}>
            VELMORA
          </Link>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`font-sans text-sm tracking-wide uppercase font-medium transition-colors duration-300 hover:text-velmora-gold ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop?view=collections" className={`font-sans text-sm tracking-wide uppercase font-medium transition-colors duration-300 hover:text-velmora-gold ${textColor}`}>
              Collections
            </Link>
            <Link to="/about" className={`font-sans text-sm tracking-wide uppercase font-medium transition-colors duration-300 hover:text-velmora-gold ${textColor}`}>
              About
            </Link>
            <Link to="/journal" className={`font-sans text-sm tracking-wide uppercase font-medium transition-colors duration-300 hover:text-velmora-gold ${textColor}`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`transition-colors duration-300 hover:text-velmora-gold ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={openDrawer} className={`transition-colors duration-300 hover:text-velmora-gold ${textColor}`} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-espresso text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className={`md:hidden transition-colors duration-300 ${textColor}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-warm/30 animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-charcoal hover:text-velmora-gold" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/shop?view=collections" className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-charcoal hover:text-velmora-gold" onClick={() => setMobileMenuOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-charcoal hover:text-velmora-gold" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/journal" className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-charcoal hover:text-velmora-gold" onClick={() => setMobileMenuOpen(false)}>
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
