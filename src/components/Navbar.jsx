import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent over hero only on homepage top; solid elsewhere
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md border-b border-espresso-200/40'
      )}
    >
      <nav className="container-editorial flex items-center justify-between h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 flex-1">
          <button
            className="md:hidden text-espresso-800"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-widest2 transition-colors',
              transparent ? 'text-cream' : 'text-espresso-800'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                'text-xs uppercase tracking-widest2 transition-colors hover:text-gold',
                transparent ? 'text-cream' : 'text-espresso-800'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-5 flex-1 justify-end">
          <button
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', transparent ? 'text-cream' : 'text-espresso-800')}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', transparent ? 'text-cream' : 'text-espresso-800')}
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-espresso-200/40 animate-fade-in">
          <div className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 text-espresso-800"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
