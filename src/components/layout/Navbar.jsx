import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const Navbar = () => {
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

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-[var(--velmora-surface)] shadow-sm'
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
            <Link to="/" className="flex-shrink-0">
              <h1
                className={`font-serif text-xl md:text-2xl tracking-wider-luxury transition-colors duration-300 ${
                  isScrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                  className={`text-xs tracking-wider-luxury uppercase transition-colors duration-300 hover:opacity-70 ${
                    isScrolled || !isHome
                      ? 'text-[var(--velmora-text)]'
                      : 'text-white'
                  }`}
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--velmora-accent)] text-[var(--velmora-dark)] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-bg)] pt-20 md:hidden slide-in-right">
          <div className="flex flex-col items-center gap-8 py-12">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                className="text-lg font-serif tracking-wide-luxury uppercase"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
