import React, { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'About', href: '/#brand-story' },
  { name: 'Journal', href: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleAnchorClick = useCallback((e, href) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname === '/') {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ivory-light/95 backdrop-blur-md shadow-sm border-b border-surface-100'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className={cn(
                'font-serif text-xl sm:text-2xl tracking-wider transition-colors duration-300',
                scrolled ? 'text-surface-900' : 'text-surface-900'
              )}>
                VELMORA
              </h1>
            </Link>

            {/* Center nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={cn(
                    'text-caption tracking-wider uppercase transition-colors duration-300',
                    scrolled ? 'text-surface-700 hover:text-surface-900' : 'text-surface-700 hover:text-surface-900'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="p-2" aria-label="Search">
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button 
                className="p-2 relative" 
                aria-label="Cart"
                onClick={openDrawer}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-surface-950/60 transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory-light z-50 transform transition-transform duration-400 ease-out lg:hidden shadow-xl',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-surface-100">
          <h2 className="font-serif text-lg tracking-wider">VELMORA</h2>
          <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="font-serif text-2xl tracking-wide text-surface-800 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
