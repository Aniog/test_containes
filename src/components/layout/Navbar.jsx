import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-border'
    : 'bg-transparent'

  const textClass = scrolled || !isHome ? 'text-base' : 'text-white'

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      bgClass
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left - Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className={cn(
              'font-serif text-xl md:text-2xl font-medium tracking-widest-2xl transition-colors duration-500',
              textClass
            )}>
              VELMORA
            </span>
          </Link>

          {/* Center - Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-xs font-sans font-medium tracking-widest-xl uppercase transition-colors duration-300 hover:opacity-70',
                  textClass,
                  location.pathname === link.to && 'underline underline-offset-4 decoration-1'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={cn(
                'p-2 transition-colors duration-300 hover:opacity-70',
                textClass
              )}
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              aria-label="Cart"
              onClick={openCart}
              className={cn(
                'relative p-2 transition-colors duration-300 hover:opacity-70',
                textClass
              )}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-2xs font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(prev => !prev)}
              className={cn(
                'md:hidden p-2 transition-colors duration-300',
                textClass
              )}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300 bg-cream/98 backdrop-blur-lg border-b border-border',
        mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-b-0'
      )}>
        <div className="px-6 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'block text-sm font-sans font-medium tracking-widest-xl uppercase text-base py-2',
                location.pathname === link.to && 'text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
