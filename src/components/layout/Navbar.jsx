import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrolledOrNotHome = scrolled || !isHome

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolledOrNotHome
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              'p-2 -ml-2 lg:hidden',
              scrolledOrNotHome ? 'text-espresso-900' : 'text-white'
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.18em] uppercase transition-colors',
              scrolledOrNotHome ? 'text-espresso-900' : 'text-white'
            )}
          >
            Velmora
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-400',
                  scrolledOrNotHome ? 'text-espresso-900' : 'text-white/90'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label="Search"
              className={cn(
                'p-2 transition-colors',
                scrolledOrNotHome ? 'text-espresso-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
              )}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              aria-label="Open cart"
              className={cn(
                'relative p-2 transition-colors',
                scrolledOrNotHome ? 'text-espresso-900 hover:text-gold-600' : 'text-white hover:text-gold-300'
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-600 text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-cream-50 transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <span className="font-serif text-2xl tracking-[0.18em] uppercase text-espresso-900">Velmora</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 text-espresso-900">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col px-8 pt-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-serif text-espresso-900"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              openCart()
            }}
            className="text-left text-2xl font-serif text-espresso-900"
          >
            Cart ({count})
          </button>
        </nav>
      </div>
    </>
  )
}
