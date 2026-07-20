import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const textClass = transparent ? 'text-velmora-ivory' : 'text-velmora-espresso'
  const surfaceClass = transparent
    ? 'border-transparent bg-transparent'
    : 'border-velmora-taupe/30 bg-velmora-ivory/95 shadow-soft backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${surfaceClass}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link to="/" className={`font-serif text-3xl font-semibold tracking-velmora transition ${textClass}`}>
          VELMORA
        </Link>

        <div className={`hidden items-center gap-10 text-xs font-bold uppercase tracking-wideLuxury md:flex ${textClass}`}>
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={`flex items-center gap-2 ${textClass}`}>
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-gold/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full p-2 transition hover:bg-velmora-gold/15"
            aria-label={`Open cart with ${cartCount} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full p-2 transition hover:bg-velmora-gold/15 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden bg-velmora-ivory text-velmora-espresso transition-all duration-500 md:hidden ${isMenuOpen ? 'max-h-80 border-t border-velmora-taupe/30' : 'max-h-0'}`}>
        <div className="space-y-1 px-4 py-5">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="block border-b border-velmora-taupe/20 py-4 font-serif text-2xl text-velmora-espresso">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
