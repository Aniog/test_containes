import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleCart, cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              VELMORA
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-stone-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              className={`p-2 transition-colors duration-300 relative ${
                isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
              onClick={toggleCart}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
