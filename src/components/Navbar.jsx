import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
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

  const isHomePage = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-[var(--color-cream)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <span className="serif-heading text-2xl md:text-3xl tracking-wider font-light">
                Velmora
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className="text-xs tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop" className="text-xs tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors duration-300">
                Collections
              </Link>
              <a href="#story" className="text-xs tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors duration-300">
                About
              </a>
              <a href="#journal" className="text-xs tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors duration-300">
                Journal
              </a>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 hover:text-[var(--color-gold)] transition-colors duration-300" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-[var(--color-gold)] transition-colors duration-300 relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-gold)] text-[var(--color-charcoal)] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-cream)] pt-20 animate-fade-in">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link to="/shop" className="serif-heading text-2xl tracking-wider">Shop</Link>
            <Link to="/shop" className="serif-heading text-2xl tracking-wider">Collections</Link>
            <a href="#story" className="serif-heading text-2xl tracking-wider">About</a>
            <a href="#journal" className="serif-heading text-2xl tracking-wider">Journal</a>
            <div className="hairline w-24 my-4" />
            <Link to="/shop" className="text-xs tracking-widest uppercase text-[var(--color-warm-gray)]">All Products</Link>
            <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase text-[var(--color-warm-gray)]">Earrings</Link>
            <Link to="/shop?category=necklaces" className="text-xs tracking-widest uppercase text-[var(--color-warm-gray)]">Necklaces</Link>
            <Link to="/shop?category=huggies" className="text-xs tracking-widest uppercase text-[var(--color-warm-gray)]">Huggies</Link>
          </div>
        </div>
      )}
    </>
  )
}
