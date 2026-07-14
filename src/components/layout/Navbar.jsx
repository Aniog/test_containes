import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
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
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ]

  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome
    ? 'text-velmora-black'
    : 'text-white'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navBg
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn('md:hidden p-2 -ml-2', textColor)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Left nav links - desktop */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    'text-xs font-sans font-medium tracking-widest-xl uppercase transition-colors duration-300 hover:text-velmora-gold',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl font-medium tracking-widest-xl transition-colors duration-300',
                textColor
              )}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className={cn('flex items-center gap-4 md:gap-6 flex-1 justify-end', textColor)}>
              <button className="p-2 transition-colors hover:text-velmora-gold" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 transition-colors hover:text-velmora-gold"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-velmora-gold text-white text-[10px] font-sans font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile slide-out menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 w-72 h-full bg-velmora-cream shadow-2xl animate-slide-in-right">
            <div className="p-6 pt-20 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-sans font-medium tracking-widest-xl uppercase text-velmora-black hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
