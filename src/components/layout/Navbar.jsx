import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop', label: 'Collections' },
  { to: '/#story', label: 'About' },
  { to: '/#journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    cn(
      'text-[11px] font-medium uppercase tracking-widest2 transition-colors duration-300 hover:text-gold',
      isActive ? 'text-gold' : 'text-ivory/85',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        transparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-line/60 bg-ink/95 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-gold lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          to="/"
          className="font-serif text-2xl font-medium tracking-[0.28em] text-ivory transition-colors duration-300 hover:text-gold md:text-[26px]"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.to.startsWith('/#') ? (
              <a key={link.label} href={link.to} className={linkClass({ isActive: false })}>
                {link.label}
              </a>
            ) : (
              <NavLink key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-gold md:flex"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-gold md:flex"
            aria-label="Wishlist"
          >
            <Heart className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-gold"
            onClick={openCart}
            aria-label={`Open bag, ${count} items`}
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-inkonaccent">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="animate-fade-in border-t border-line/60 bg-ink px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.label}>
                {link.to.startsWith('/#') ? (
                  <a
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-xl uppercase tracking-[0.18em] text-ivory transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-xl uppercase tracking-[0.18em] text-ivory transition-colors hover:text-gold"
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
