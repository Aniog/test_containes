import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icons } from '../ui/Icon'
import { useCart } from '../../lib/cartContext'

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setShowSearch(false)
    }
  }

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  // Text color classes based on navbar state
  const textColorClass = isSolid 
    ? 'text-velmora-charcoal hover:text-velmora-gold' 
    : 'text-white hover:text-velmora-gold-light'
  const logoColorClass = isSolid ? 'text-velmora-charcoal' : 'text-white'
  const iconColorClass = isSolid 
    ? 'text-velmora-text hover:text-velmora-gold' 
    : 'text-white hover:text-velmora-gold-light'
  const mobileMenuBg = isSolid ? 'bg-velmora-cream' : 'bg-velmora-taupe/95'

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 ${isSolid ? 'solid' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`serif text-2xl tracking-[0.15em] ${logoColorClass}`}>
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`${textColorClass} transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input w-48 md:w-64 py-2 text-sm"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setShowSearch(false)
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowSearch(false)
                    setSearchQuery('')
                  }}
                  className={`ml-2 ${isSolid ? 'text-velmora-text-muted hover:text-velmora-charcoal' : 'text-white/70 hover:text-white'}`}
                >
                  <Icons.Close />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className={`${iconColorClass} transition-colors p-1`}
                aria-label="Search"
              >
                <Icons.Search />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative ${iconColorClass} transition-colors p-1`}
            aria-label="Open cart"
          >
            <Icons.Cart />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${iconColorClass} p-1`}
            aria-label="Toggle menu"
          >
            <Icons.Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${mobileMenuBg} border-t border-white/20 px-6 py-6`}>
          <div className="flex flex-col gap-4 text-sm tracking-[0.05em]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`${isSolid ? 'text-velmora-text' : 'text-white'} hover:text-velmora-gold py-1`}
                onClick={() => setIsMobileMenuOpen(false)}
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

export default Navbar
