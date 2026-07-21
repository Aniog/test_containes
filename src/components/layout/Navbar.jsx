import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isHomePage = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl lg:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/shop" className="text-sm tracking-wider uppercase hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-sm tracking-wider uppercase hover:text-primary transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-wider uppercase hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-wider uppercase hover:text-primary transition-colors">
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="p-2 hover:text-primary transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 lg:hidden">
          <div className="flex flex-col items-center gap-8 pt-12">
            <Link to="/shop" className="text-lg tracking-wider uppercase hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-lg tracking-wider uppercase hover:text-primary transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-lg tracking-wider uppercase hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-lg tracking-wider uppercase hover:text-primary transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
