import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function SiteHeader() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        hasScrolled || mobileMenuOpen
          ? 'border-b border-white/10 bg-velmora-ink/95 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-velmora-ivory sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-heading text-2xl tracking-[0.35em] text-velmora-ivory sm:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.3em] text-velmora-ivory/90 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'transition hover:text-velmora-gold',
                  isActive && 'text-velmora-gold',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-velmora-ivory transition hover:bg-white/10"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-velmora-ivory transition hover:bg-white/10"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-white/10 bg-velmora-ink/95 px-4 py-5 text-velmora-ivory lg:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.24em]">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="rounded-full border border-white/10 px-4 py-3 text-velmora-ivory/90 transition hover:bg-white/5 hover:text-velmora-gold"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
