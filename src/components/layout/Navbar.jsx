import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { itemCount, setIsDrawerOpen } = useCart()
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <h1
                className={`font-serif text-2xl md:text-3xl tracking-ultra-wide transition-colors duration-500 ${
                  isScrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/collection' : item === 'Collections' ? '/collection' : '/'}
                  className={`text-xs tracking-super-wide uppercase transition-colors duration-300 hover:text-velmora-gold ${
                    isScrolled || !isHome ? 'text-velmora-base' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  isScrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold relative ${
                  isScrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-velmora-base text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-velmora-cream transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={item === 'Shop' ? '/collection' : item === 'Collections' ? '/collection' : '/'}
              className="font-serif text-3xl text-velmora-base tracking-wide hover:text-velmora-gold transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
