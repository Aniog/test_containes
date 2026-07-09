import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  // Transparent over hero (home route only), solid elsewhere / on scroll
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchValue.trim()) return
    navigate(`/shop?q=${encodeURIComponent(searchValue.trim())}`)
    setSearchOpen(false)
    setSearchValue('')
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          solid
            ? 'bg-cream/95 backdrop-blur-md border-b border-line py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-velmora flex items-center justify-between gap-4">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                'md:hidden transition-colors',
                solid ? 'text-ink' : 'text-cream'
              )}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.3em] leading-none transition-colors',
                solid ? 'text-ink' : 'text-cream'
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'text-xs uppercase tracking-widest2 transition-colors hover:text-gold',
                  solid ? 'text-ink' : 'text-cream'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                'transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-cream'
              )}
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn(
                'relative transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-cream'
              )}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream border-b border-line">
            <form
              onSubmit={handleSearch}
              className="container-velmora py-5 flex items-center gap-3"
            >
              <Search size={18} className="text-stone" />
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search jewelry…"
                className="flex-1 bg-transparent border-none outline-none text-sm text-ink placeholder:text-stone"
              />
              <button type="submit" className="eyebrow hover:text-gold-deep">
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-cream md:hidden pt-24"
          onClick={() => setMobileOpen(false)}
        >
          <nav className="container-velmora flex flex-col gap-6 pt-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
