import { useState, useEffect } from 'react'
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

  const solid = scrolled || !isHome

  const onSearchSubmit = (e) => {
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
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft border-b border-sand'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 md:px-10 h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className={cn('md:hidden', solid ? 'text-ink' : 'text-ivory')}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium transition-colors',
                solid ? 'text-ink' : 'text-ivory'
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center: links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold',
                  solid ? 'text-charcoal' : 'text-ivory/90'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
            <button
              type="button"
              className={cn('transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-ivory')}
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className={cn('relative transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-ivory')}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-sand bg-ivory animate-fade-in">
            <form onSubmit={onSearchSubmit} className="mx-auto flex max-w-8xl items-center gap-3 px-6 md:px-10 py-4">
              <Search size={18} className="text-stone" strokeWidth={1.5} />
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search jewelry, collections…"
                className="flex-1 bg-transparent text-sm text-charcoal placeholder:text-stone-light focus:outline-none"
              />
              <button type="submit" className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep">
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/40 animate-overlay-in" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-ivory shadow-card animate-slide-in-right p-8 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif text-2xl tracking-[0.25em] text-ink">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-serif text-2xl text-charcoal hover:text-gold transition-colors"
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
