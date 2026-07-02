import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = scrolled || !isHome ? 'bg-cream-50/95 shadow-sm backdrop-blur' : 'bg-transparent'
  const text = scrolled || !isHome ? 'text-espresso-900' : 'text-cream-50'

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-30 transition-all duration-500 ${bg}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            className={`p-2 md:hidden ${text}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <nav className={`hidden items-center gap-8 md:flex ${text}`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-medium tracking-[0.18em] transition-colors ${text}`}
          >
            VELMORA
          </Link>

          <div className={`flex items-center gap-4 ${text}`}>
            <button
              className="p-2 transition-colors hover:text-gold"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={openCart}
              className="relative p-2 transition-colors hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-espresso-900/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-cream-50 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.18em]">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-espresso-900"
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
