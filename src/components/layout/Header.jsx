import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { calculateCartCount } from '@/lib/cart'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=giftable' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartItems, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const cartCount = calculateCartCount(cartItems)
  const isHeroPage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solidClasses = !isHeroPage || scrolled || menuOpen
    ? 'border-velmora-linen bg-velmora-cream/95 text-velmora-ink shadow-sm backdrop-blur-xl'
    : 'border-transparent bg-transparent text-velmora-cream'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${solidClasses}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.2em]" onClick={() => setMenuOpen(false)}>
          VELMORA
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="hidden rounded-full p-2 transition hover:bg-velmora-linen/40 sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onOpenCart} className="relative rounded-full p-2 transition hover:bg-velmora-linen/40" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-velmora-linen/40 md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-velmora-linen bg-velmora-cream px-5 py-6 text-velmora-ink md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-[0.24em]">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
