import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome || mobileOpen
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide font-light"
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className="text-xs tracking-super-wide uppercase font-sans font-medium hover:text-brand-gold transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/shop?collection=all"
                className="text-xs tracking-super-wide uppercase font-sans font-medium hover:text-brand-gold transition-colors"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-xs tracking-super-wide uppercase font-sans font-medium hover:text-brand-gold transition-colors"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="text-xs tracking-super-wide uppercase font-sans font-medium hover:text-brand-gold transition-colors"
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:text-brand-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className="p-2 hover:text-brand-gold transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-brand-pale-gray bg-brand-cream/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-brand-light-gray" />
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="flex-1 bg-transparent border-none outline-none text-sm font-sans placeholder:text-brand-light-gray"
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)} className="text-xs tracking-widest uppercase text-brand-warm-gray hover:text-brand-charcoal">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream pt-20 md:hidden">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link
              to="/shop"
              className="font-serif text-2xl tracking-ultra-wide uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?collection=all"
              className="font-serif text-2xl tracking-ultra-wide uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-serif text-2xl tracking-ultra-wide uppercase"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="font-serif text-2xl tracking-ultra-wide uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
            <div className="w-12 h-px bg-brand-pale-gray my-4" />
            <Link
              to="/shop"
              className="text-xs tracking-super-wide uppercase font-sans text-brand-warm-gray"
              onClick={() => setMobileOpen(false)}
            >
              Free Shipping on All Orders
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
