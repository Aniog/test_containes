import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { IconButton } from '@/components/ui/IconButton'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const { count, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const dark = !isHome || scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          dark ? 'bg-velmora-charcoal text-velmora-text-light shadow-sm' : 'bg-transparent text-velmora-text-light'
        )}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.18em] font-semibold uppercase"
          >
            Velmora
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs uppercase tracking-[0.14em] font-medium hover:text-velmora-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <IconButton aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton
              aria-label={`Shopping bag with ${count} items`}
              badge={count > 0 ? count : undefined}
              onClick={toggleCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton
              className="md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </IconButton>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-charcoal text-velmora-text-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 md:h-20 items-center justify-between">
              <Link
                to="/"
                className="font-serif text-xl tracking-[0.18em] font-semibold uppercase"
              >
                Velmora
              </Link>
              <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X size={24} strokeWidth={1.5} />
              </IconButton>
            </div>
            <nav className="mt-12 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-serif text-3xl tracking-wide hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
