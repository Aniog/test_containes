import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { cn } from '@/lib/utils'

const LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Collections' },
  { to: '/#story', label: 'About', hash: 'story' },
  { to: '/#journal', label: 'Journal', hash: 'journal' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleHashLink = (e, link) => {
    if (!link.hash) return
    e.preventDefault()
    if (location.pathname !== '/') {
      window.location.href = `/#${link.hash}`
      return
    }
    document.getElementById(link.hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'border-b border-line bg-cream/95 backdrop-blur-md'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Mobile menu button */}
        <button
          className={cn('md:hidden', transparent ? 'text-cream' : 'text-ink')}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'font-serif text-xl font-semibold tracking-[0.35em] transition-colors md:text-2xl',
            transparent ? 'text-cream' : 'text-ink'
          )}
        >
          VELMORA
        </Link>

        {/* Center links */}
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) =>
            link.hash ? (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleHashLink(e, link)}
                className={cn(
                  'text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-gold',
                  transparent ? 'text-cream/90' : 'text-ink'
                )}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-gold',
                    transparent ? 'text-cream/90' : 'text-ink',
                    isActive && link.to === '/shop' && 'text-gold'
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <Link
            to="/shop"
            aria-label="Search"
            className={cn(
              'p-2 transition-colors hover:text-gold',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              'relative p-2 transition-colors hover:text-gold',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-line bg-cream md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.hash ? '/' : link.to}
                onClick={(e) => link.hash && handleHashLink(e, link)}
                className="py-3 text-xs font-medium uppercase tracking-[0.25em] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
