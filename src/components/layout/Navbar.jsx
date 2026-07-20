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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`serif-heading text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
              >
                Journal
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-4 md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              to="/shop"
              className="text-lg tracking-wider uppercase text-foreground hover:text-accent transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="text-lg tracking-wider uppercase text-foreground hover:text-accent transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-lg tracking-wider uppercase text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-lg tracking-wider uppercase text-foreground hover:text-accent transition-colors"
            >
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
