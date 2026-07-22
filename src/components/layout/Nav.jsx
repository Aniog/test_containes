import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, toggleCart } = useCart()
  const location = useLocation()

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

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#f7f4ef]/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2 text-[#1a1814]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-semibold tracking-[0.2em] text-[#1a1814]">
              VELMORA
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === link.to || (link.to.startsWith('/shop?') && location.pathname === '/shop')
                    ? 'text-[#c9a96e] font-medium'
                    : 'text-[#57534e] hover:text-[#1a1814]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[#1a1814] hover:text-[#c9a96e] transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleCart}
              className="p-2 text-[#1a1814] hover:text-[#c9a96e] transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#c9a96e] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f7f4ef] border-t border-[#e7e5e4]">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 text-sm tracking-[0.1em] uppercase text-[#57534e] hover:text-[#1a1814] border-b border-[#e7e5e4] last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
