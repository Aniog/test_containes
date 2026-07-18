import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const { getCartCount, openCart, closeCart, isCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  const cartCount = getCartCount()

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-[60] ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`hover:text-[#A68B5B] transition-colors ${location.pathname === link.path ? 'text-[#A68B5B]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            {showSearch ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 h-9 border border-[#D4C9B9] px-3 text-sm focus:border-[#A68B5B] outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery) {
                      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
                      setShowSearch(false)
                      setSearchQuery('')
                    }
                    if (e.key === 'Escape') {
                      setShowSearch(false)
                      setSearchQuery('')
                    }
                  }}
                  autoFocus
                />
                <button onClick={() => { setShowSearch(false); setSearchQuery('') }} className="ml-2">
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button onClick={() => setShowSearch(true)} className="p-2 hover:text-[#A68B5B] transition-colors">
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={() => isCartOpen ? closeCart() : openCart()} 
            className="p-2 hover:text-[#A68B5B] transition-colors relative"
            aria-label={isCartOpen ? "Close cart" : "Open cart"}
            data-cart-trigger="true"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#A68B5B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D4C9B9] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[0.05em]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#A68B5B]"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="py-1 hover:text-[#A68B5B]">
              Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
