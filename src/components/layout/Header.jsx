import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/cart/CartContext'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=best' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { itemCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || mobileOpen || pathname !== '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        solid
          ? 'border-velmora-line/80 bg-velmora-ivory/95 text-velmora-espresso shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-transparent text-velmora-porcelain'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-current/30 p-2 transition hover:bg-velmora-gold hover:text-velmora-espresso"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-2xl font-bold tracking-[0.2em] sm:text-3xl">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className="text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-full border border-current/30 p-2 transition hover:bg-velmora-gold hover:text-velmora-espresso sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full border border-current/30 p-2 transition hover:bg-velmora-gold hover:text-velmora-espresso"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-extrabold text-velmora-espresso">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-velmora-line/70 bg-velmora-ivory text-velmora-espresso transition-all duration-500 lg:hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-1 px-5 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-velmora-line/70 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
