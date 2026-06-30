import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleCart, cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button className="md:hidden p-2 -ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex-shrink-0">
            <span className={`font-serif text-xl md:text-2xl tracking-widest ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
              VELMORA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className={`p-2 transition-colors ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleCart} className={`p-2 relative transition-colors ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a96e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="block py-2 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c9a96e]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
