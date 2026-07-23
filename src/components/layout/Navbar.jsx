import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-stone-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-stone-900">
              VELMORA
            </h1>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'font-sans text-xs tracking-ultra-wide uppercase transition-colors duration-300',
                  scrolled ? 'text-stone-700 hover:text-gold-500' : 'text-stone-800 hover:text-gold-500'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-stone-700 hover:text-gold-500 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-stone-700 hover:text-gold-500 transition-colors relative"
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-cream-50 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-cream-50/98 backdrop-blur-md',
          mobileOpen ? 'max-h-64 border-b border-stone-200/50' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="block font-sans text-sm tracking-wider uppercase text-stone-700 hover:text-gold-500 transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
