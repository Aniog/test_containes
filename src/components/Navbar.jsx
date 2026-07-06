import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'About', href: null },
    { label: 'Journal', href: null },
  ]

  const isDark = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-velmora-surface/95 backdrop-blur shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={22} className={isDark ? 'text-white' : 'text-velmora-charcoal'} />
              ) : (
                <Menu size={22} className={isDark ? 'text-white' : 'text-velmora-charcoal'} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-widest-xl uppercase',
                isDark ? 'text-white' : 'text-velmora-charcoal'
              )}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'text-xs uppercase tracking-widest font-medium transition-colors hover:text-velmora-gold',
                      isDark ? 'text-white/90' : 'text-velmora-charcoal'
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => {
                      toast('Coming soon', { description: 'This section is under development.' })
                      setMobileOpen(false)
                    }}
                    className={cn(
                      'text-xs uppercase tracking-widest font-medium transition-colors hover:text-velmora-gold',
                      isDark ? 'text-white/90' : 'text-velmora-charcoal'
                    )}
                  >
                    {link.label}
                  </button>
                )
              )}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors hover:text-velmora-gold',
                  isDark ? 'text-white' : 'text-velmora-charcoal'
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={cn(
                  'relative p-2 transition-colors hover:text-velmora-gold',
                  isDark ? 'text-white' : 'text-velmora-charcoal'
                )}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-velmora-gold rounded-full">
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
            'md:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-4 pb-6 pt-2 space-y-4 bg-velmora-surface/95 backdrop-blur">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => {
                    toast('Coming soon', { description: 'This section is under development.' })
                    setMobileOpen(false)
                  }}
                  className="block text-sm uppercase tracking-widest font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors text-left"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      </header>
    </>
  )
}
