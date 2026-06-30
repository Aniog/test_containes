import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()
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
          scrolled || !isHome
            ? 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <span className="font-['Cormorant_Garamond'] text-2xl md:text-[28px] tracking-[0.15em] font-medium">
              VELMORA
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-xs uppercase tracking-wider hover:text-[#c9a96e] transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-xs uppercase tracking-wider hover:text-[#c9a96e] transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-xs uppercase tracking-wider hover:text-[#c9a96e] transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-xs uppercase tracking-wider hover:text-[#c9a96e] transition-colors">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 hover:text-[#c9a96e] transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-2 hover:text-[#c9a96e] transition-colors relative"
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#c9a96e] text-white text-[10px] rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#faf8f5] pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="text-lg font-['Cormorant_Garamond'] uppercase tracking-wider">
              Shop
            </Link>
            <Link to="/shop" className="text-lg font-['Cormorant_Garamond'] uppercase tracking-wider">
              Collections
            </Link>
            <Link to="/about" className="text-lg font-['Cormorant_Garamond'] uppercase tracking-wider">
              About
            </Link>
            <Link to="/journal" className="text-lg font-['Cormorant_Garamond'] uppercase tracking-wider">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
