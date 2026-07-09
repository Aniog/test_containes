import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsDrawerOpen } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome ? 'bg-velmora-base' : 'bg-transparent'
  const navText = scrolled || !isHome ? 'text-velmora-cream' : 'text-velmora-cream'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${
          scrolled || !isHome ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-velmora-cream p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest-xl text-velmora-cream">
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className="text-sm tracking-widest text-velmora-cream/90 hover:text-velmora-gold transition-colors duration-300">
                SHOP
              </Link>
              <Link to="/shop" className="text-sm tracking-widest text-velmora-cream/90 hover:text-velmora-gold transition-colors duration-300">
                COLLECTIONS
              </Link>
              <Link to="/about" className="text-sm tracking-widest text-velmora-cream/90 hover:text-velmora-gold transition-colors duration-300">
                ABOUT
              </Link>
              <Link to="/journal" className="text-sm tracking-widest text-velmora-cream/90 hover:text-velmora-gold transition-colors duration-300">
                JOURNAL
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="text-velmora-cream p-2 hover:text-velmora-gold transition-colors duration-300" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="text-velmora-cream p-2 hover:text-velmora-gold transition-colors duration-300 relative"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-velmora-base text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-base/95 md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/shop" className="font-serif text-3xl text-velmora-cream hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="font-serif text-3xl text-velmora-cream hover:text-velmora-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-3xl text-velmora-cream hover:text-velmora-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="font-serif text-3xl text-velmora-cream hover:text-velmora-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
