import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  const isHome = location.pathname === '/'

  return (
    <>
      <nav 
        className={`nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-20 ${scrolled || !isHome ? 'scrolled bg-[#FAF7F2]' : 'bg-transparent'}`}
      >
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#1A1816]">
          VELMORA
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path} 
              className="nav-link text-xs text-[#1A1816] hover:text-[#C5A46E]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="p-2 text-[#1A1816] hover:text-[#C5A46E] transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button 
            onClick={openCart} 
            className="p-2 text-[#1A1816] hover:text-[#C5A46E] transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C5A46E] text-[#FAF7F2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Link to="/shop" className="md:hidden text-xs tracking-widest">SHOP</Link>
        </div>
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div className="search-modal">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-[0.2em] text-[#5C5349]">SEARCH OUR COLLECTION</span>
              <button onClick={() => { setSearchOpen(false); setSearchQuery('') }} className="text-sm">CLOSE</button>
            </div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewelry..."
                className="search-input"
                autoFocus
              />
            </form>
            <p className="text-xs text-[#8A7F70] mt-2">Press enter to search • Esc to close</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
