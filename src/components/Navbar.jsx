import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { count, setIsOpen } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  // Transparent over hero (home page only, top of page), solid otherwise
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

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
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm',
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 -ml-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={cn('w-5 h-5', transparent ? 'text-cream' : 'text-espresso')} />
          </button>

          {/* Left nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold',
                  transparent ? 'text-cream' : 'text-espresso',
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
              'font-serif text-2xl md:text-3xl tracking-[0.2em] transition-colors hover:text-gold',
              transparent ? 'text-cream' : 'text-espresso',
            )}
          >
            VELMORA
          </Link>

          {/* Right nav links + icons */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold',
                  transparent ? 'text-cream' : 'text-espresso',
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
              className={cn(transparent ? 'text-cream' : 'text-espresso', 'hover:text-gold transition-colors')}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
              className={cn(
                'relative hover:text-gold transition-colors',
                transparent ? 'text-cream' : 'text-espresso',
              )}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {count}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right icons */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
              className={transparent ? 'text-cream' : 'text-espresso'}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
              className={cn('relative', transparent ? 'text-cream' : 'text-espresso')}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-sand bg-ivory px-6 md:px-10 py-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-taupe" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search jewelry..."
                autoFocus
                className="flex-1 bg-transparent border-b border-sand text-espresso placeholder:text-taupe py-2 outline-none focus:border-gold text-sm"
              />
              <button type="submit" className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-deep">
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-espresso-bg/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 max-w-[80%] bg-ivory p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-[0.2em] text-espresso">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-espresso" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm tracking-[0.2em] uppercase text-espresso hover:text-gold transition-colors"
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
