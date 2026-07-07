import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=all' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        solid
          ? 'border-velmora-linen/70 bg-velmora-ivory/95 text-velmora-ink shadow-[0_10px_30px_rgba(23,19,15,0.06)] backdrop-blur-xl'
          : 'border-white/10 bg-transparent text-velmora-ivory'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.22em] md:text-3xl">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="text-xs font-semibold uppercase tracking-[0.22em] opacity-90 transition hover:text-velmora-gold hover:opacity-100"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-gold hover:text-velmora-gold sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Open cart"
            onClick={onCartOpen}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-linen/70 bg-velmora-ivory px-5 py-5 text-velmora-ink md:hidden">
          <div className="grid gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="border-b border-velmora-linen/60 pb-4 text-sm font-semibold uppercase tracking-[0.22em]"
                onClick={() => setMobileOpen(false)}
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
