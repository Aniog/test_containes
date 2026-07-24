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

  // Transparent over hero only on homepage top; solid elsewhere or after scroll.
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
    if (searchValue.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchValue.trim())}`)
      setSearchOpen(false)
      setSearchValue('')
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          solid
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className={cn(
                'md:hidden transition-colors',
                solid ? 'text-ink' : 'text-ivory'
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors',
                solid ? 'text-ink' : 'text-ivory'
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
                  solid ? 'text-ink' : 'text-ivory'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center gap-5 flex-1 justify-end">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                'transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-ivory'
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                'relative transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-ivory'
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-ivory border-b border-sand">
            <form
              onSubmit={handleSearch}
              className="max-w-8xl mx-auto px-6 md:px-10 py-5 flex items-center gap-3"
            >
              <Search className="w-5 h-5 text-muted" />
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search for earrings, necklaces, huggies…"
                className="flex-1 bg-transparent text-ink placeholder:text-muted outline-none text-sm"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest2 text-gold hover:text-gold-deep"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ivory md:hidden pt-24 px-6">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-ink"
                onClick={() => setMobileOpen(false)}
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
