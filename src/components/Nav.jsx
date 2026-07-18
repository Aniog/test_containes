import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount, openCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="nav-logo text-vel-deep">
            VELMORA
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/shop" className="nav-link text-vel-charcoal">Shop</Link>
            <Link to="/shop?category=Collections" className="nav-link text-vel-charcoal">Collections</Link>
            <Link to="/about" className="nav-link text-vel-charcoal">About</Link>
            <Link to="/journal" className="nav-link text-vel-charcoal">Journal</Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-vel-charcoal hover:text-vel-gold-dark transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={openCart}
              className="p-2 text-vel-charcoal hover:text-vel-gold-dark transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-vel-gold text-vel-deep text-[10px] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <div className={`search-modal ${isSearchOpen ? 'open' : ''}`}>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our collection..."
              className="input flex-1 text-lg"
              autoFocus
            />
            <button type="submit" className="btn btn-primary">Search</button>
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen(false)
                setSearchQuery('')
              }}
              className="btn btn-outline"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Nav