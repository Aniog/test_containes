import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = !isHome || scrolled
    ? 'bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-cream-300/50'
    : 'bg-transparent'

  const textColor = !isHome || scrolled ? 'text-charcoal-700' : 'text-charcoal-800'

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
        navBg
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn('md:hidden p-2', textColor)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className={cn(
                'font-serif text-xl md:text-2xl font-semibold tracking-nav uppercase',
                textColor
              )}>
                Velmora
              </h1>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    'text-xs tracking-nav uppercase font-medium transition-colors duration-300 hover:text-gold-500',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className={cn('p-2 transition-colors hover:text-gold-500', textColor)} aria-label="Search">
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={cn('p-2 relative transition-colors hover:text-gold-500', textColor)}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={cn(
        'fixed inset-0 z-40 md:hidden transition-all duration-300',
        mobileOpen ? 'visible' : 'invisible'
      )}>
        <div
          className={cn(
            'absolute inset-0 bg-charcoal-900/40 transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div className={cn(
          'absolute top-16 left-0 right-0 bg-cream-50 shadow-elevated transition-transform duration-300 ease-luxury',
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        )}>
          <div className="px-6 py-8 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="block py-3 text-sm tracking-nav uppercase font-medium text-charcoal-700 hover:text-gold-500 transition-colors border-b border-cream-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
