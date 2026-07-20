import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-40 ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-velmora-text">
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em]">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.to}
              className="hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-white border border-velmora-border px-4 py-1.5 text-sm w-48 focus:outline-none focus:border-velmora-gold"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false)
                  }}
                />
                <button type="submit" className="p-2">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-velmora-gold transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-velmora-bg border-t border-velmora-border px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[0.08em]">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.to}
                className="py-1 hover:text-velmora-gold transition-colors"
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
