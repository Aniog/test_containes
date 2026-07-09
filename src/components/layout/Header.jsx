import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { getCartCount } from '@/lib/cart'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartItems, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const count = getCartCount(cartItems)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const solid = isScrolled || !isHome || isMenuOpen
  const linkTone = solid ? 'text-velmora-ink' : 'text-velmora-pearl'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? 'border-b border-velmora-ink/10 bg-velmora-pearl/95 shadow-soft backdrop-blur-xl'
          : 'border-b border-velmora-pearl/15 bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          to="/"
          className={`font-serif text-2xl font-semibold tracking-[0.28em] transition-colors ${linkTone}`}
          aria-label="Velmora homepage"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs font-semibold uppercase tracking-[0.24em] transition-colors hover:text-velmora-gold ${linkTone}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`rounded-full p-3 transition-colors hover:bg-velmora-gold/15 ${linkTone}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className={`relative rounded-full p-3 transition-colors hover:bg-velmora-gold/15 ${linkTone}`}
            aria-label={`Open cart with ${count} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ink">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`rounded-full p-3 transition-colors hover:bg-velmora-gold/15 lg:hidden ${linkTone}`}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-velmora-ink/10 bg-velmora-pearl px-4 py-6 text-velmora-ink lg:hidden">
          <div className="grid gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
