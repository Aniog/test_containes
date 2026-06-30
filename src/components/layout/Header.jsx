import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=gift' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.search])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'bg-velmora-ivory/95 text-velmora-espresso shadow-[0_1px_0_rgba(23,16,13,0.08)] backdrop-blur-xl' : 'bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Primary navigation">
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center border border-current/20 text-current transition hover:border-velmora-champagne hover:text-velmora-champagne md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.18em] text-current md:w-48">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-[0.22em] md:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.href} className="text-current/85 transition hover:text-velmora-champagne">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 md:w-48">
          <Link to="/shop" className="hidden h-10 w-10 items-center justify-center border border-current/20 text-current transition hover:border-velmora-champagne hover:text-velmora-champagne sm:inline-flex" aria-label="Search the store">
            <Search size={18} />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative inline-flex h-10 w-10 items-center justify-center border border-current/20 text-current transition hover:border-velmora-champagne hover:text-velmora-champagne"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-velmora-espresso/10 bg-velmora-ivory px-5 py-6 text-velmora-espresso md:hidden">
          <div className="grid gap-4 text-sm font-semibold uppercase tracking-[0.22em]">
            {links.map((link) => (
              <Link key={link.label} to={link.href} className="border-b border-velmora-espresso/10 pb-4 text-velmora-espresso">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
