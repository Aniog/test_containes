import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const { totalItems, setIsDrawerOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-velmora-base' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-wider uppercase transition-colors duration-300 hover:text-velmora-gold ${
                    isScrolled || !isHome
                      ? 'text-velmora-text'
                      : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  isScrolled || !isHome ? 'text-velmora-text' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className={`relative p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  isScrolled || !isHome ? 'text-velmora-text' : 'text-white'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-velmora-text' : 'text-white'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                className="font-serif text-2xl text-velmora-base tracking-wide hover:text-velmora-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
