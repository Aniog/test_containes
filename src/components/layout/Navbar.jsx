import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, toggleCart } = useCart()
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

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ]

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1C1917]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1C1917]" />
              )}
            </button>

            {/* Left nav links - desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'text-xs font-medium tracking-widest uppercase transition-colors duration-300',
                    isScrolled ? 'text-[#57534E] hover:text-[#C9A96E]' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-wider transition-colors duration-300',
                isScrolled ? 'text-[#1C1917]' : 'text-white'
              )}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-300',
                  isScrolled ? 'text-[#57534E] hover:text-[#C9A96E]' : 'text-white/90 hover:text-white'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={cn(
                  'p-2 transition-colors duration-300 relative',
                  isScrolled ? 'text-[#57534E] hover:text-[#C9A96E]' : 'text-white/90 hover:text-white'
                )}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className={cn(
                  'p-2 transition-colors duration-300 relative',
                  isScrolled ? 'text-[#57534E] hover:text-[#C9A96E]' : 'text-white/90 hover:text-white'
                )}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C9A96E] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E4DF]">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium tracking-widest uppercase text-[#57534E] hover:text-[#C9A96E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
