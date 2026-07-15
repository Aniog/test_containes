import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import SearchBar from '@/components/ui/SearchBar'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ]

  const isHome = location.pathname === '/'

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHome 
          ? 'bg-[#F8F5F0] border-b border-[#E5DFD3]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#0A0806]">
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1.5px]">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.href}
              className="text-[#0A0806] hover:text-[#C5A46E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#0A0806] hover:text-[#C5A46E] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-[#0A0806] hover:text-[#C5A46E] transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A46E] text-white text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0A0806]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F0] border-t border-[#E5DFD3] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm tracking-[1.5px]">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0A0806] py-1"
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
