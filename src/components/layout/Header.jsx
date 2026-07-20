import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Huggies' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const navColor = solid ? 'text-velmora-espresso' : 'text-velmora-pearl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${solid ? 'border-b border-velmora-stone/80 bg-velmora-ivory/95 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 ${navColor}`} aria-label="Main navigation">
        <button
          type="button"
          className="rounded-full p-2 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em] md:text-4xl">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.href} className="text-xs font-bold uppercase tracking-[0.22em] transition hover:text-velmora-gold">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/shop" className="rounded-full p-2 transition hover:text-velmora-gold" aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-stone bg-velmora-ivory px-5 pb-6 text-velmora-espresso md:hidden">
          <div className="grid gap-1 pt-3">
            {links.map((link) => (
              <Link key={link.label} to={link.href} className="border-b border-velmora-stone/70 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
