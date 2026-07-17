import React, { useState, useEffect } from 'react'
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md border-b border-divider'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-foreground' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`font-sans text-sm tracking-wide uppercase ${textColor} hover:opacity-70 transition-opacity no-underline`}>
            Shop
          </Link>
          <Link to="/shop" className={`font-sans text-sm tracking-wide uppercase ${textColor} hover:opacity-70 transition-opacity no-underline`}>
            Collections
          </Link>
          <Link to="/" className={`font-sans text-sm tracking-wide uppercase ${textColor} hover:opacity-70 transition-opacity no-underline`}>
            About
          </Link>
          <Link to="/" className={`font-sans text-sm tracking-wide uppercase ${textColor} hover:opacity-70 transition-opacity no-underline`}>
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:opacity-70 transition-opacity bg-transparent border-none p-1`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`${textColor} hover:opacity-70 transition-opacity bg-transparent border-none p-1 relative`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} hover:opacity-70 transition-opacity bg-transparent border-none p-1`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-divider">
          <div className="flex flex-col py-6 px-6 gap-4">
            <Link to="/shop" className="font-sans text-sm tracking-wide uppercase text-foreground hover:text-gold transition-colors no-underline">
              Shop
            </Link>
            <Link to="/shop" className="font-sans text-sm tracking-wide uppercase text-foreground hover:text-gold transition-colors no-underline">
              Collections
            </Link>
            <Link to="/" className="font-sans text-sm tracking-wide uppercase text-foreground hover:text-gold transition-colors no-underline">
              About
            </Link>
            <Link to="/" className="font-sans text-sm tracking-wide uppercase text-foreground hover:text-gold transition-colors no-underline">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
