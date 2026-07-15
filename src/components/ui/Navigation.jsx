import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/cart'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount, setIsOpen } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-[#F7F4EF] border-b border-[#EDE8E0]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif-display text-2xl tracking-[0.15em] text-[#0D0D0D]">
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-[#B89778] transition-colors ${
                location.pathname === link.to ? 'text-[#B89778]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-b border-[#0D0D0D] py-1 pr-8 text-sm w-48 focus:outline-none"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setSearchOpen(false)
                  }}
                />
                <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery('') }} className="absolute right-0">
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="p-2 -mr-2">
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -mr-2 relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#B89778] text-[#0D0D0D] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F4EF] border-t border-[#EDE8E0] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[0.08em] uppercase">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="py-1">
                {link.label}
              </Link>
            ))}
            <Link to="/shop" className="py-1 flex items-center gap-2">
              <Search size={16} /> Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
