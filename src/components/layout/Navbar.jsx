import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-ultra-wide">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="font-sans text-xs tracking-wide-luxury uppercase hover:text-velmora-gold transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="font-sans text-xs tracking-wide-luxury uppercase hover:text-velmora-gold transition-colors">
                Collections
              </Link>
              <Link to="/about" className="font-sans text-xs tracking-wide-luxury uppercase hover:text-velmora-gold transition-colors">
                About
              </Link>
              <Link to="/journal" className="font-sans text-xs tracking-wide-luxury uppercase hover:text-velmora-gold transition-colors">
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-velmora-gold transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-velmora-gold transition-colors relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-velmora-base text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 hover:text-velmora-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-warm/50 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <Link to="/shop" className="block font-sans text-sm tracking-wide-luxury uppercase py-2 hover:text-velmora-gold transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="block font-sans text-sm tracking-wide-luxury uppercase py-2 hover:text-velmora-gold transition-colors">
                Collections
              </Link>
              <Link to="/about" className="block font-sans text-sm tracking-wide-luxury uppercase py-2 hover:text-velmora-gold transition-colors">
                About
              </Link>
              <Link to="/journal" className="block font-sans text-sm tracking-wide-luxury uppercase py-2 hover:text-velmora-gold transition-colors">
                Journal
              </Link>
            </div>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  )
}

export default Navbar
