import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { getCartCount, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl uppercase tracking-wider font-light text-gray-900">
            Velmora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-amber-700 transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="text-sm uppercase tracking-wider hover:text-amber-700 transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-wider hover:text-amber-700 transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm uppercase tracking-wider hover:text-amber-700 transition-colors">
              Journal
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:text-amber-700 transition-colors">
              <span>🔍</span>
            </button>
            <button 
              onClick={toggleCart}
              className="hover:text-amber-700 transition-colors relative"
            >
              <span>🛒</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button className="md:hidden">
              <span>☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
