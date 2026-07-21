import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const textClass = transparent ? 'text-velmora-cream' : 'text-velmora-obsidian'
  const bgClass = transparent ? 'bg-transparent' : 'bg-velmora-cream/95 shadow-[0_1px_0_rgba(36,27,22,0.08)] backdrop-blur-xl'

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${bgClass}`}>
      <div className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10 ${textClass}`}>
        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.18em]" aria-label="Velmora homepage">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="font-sansBody text-xs font-bold uppercase tracking-nav transition-colors hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-gold/15" aria-label="Search">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button type="button" className="relative rounded-full p-2 transition hover:bg-velmora-gold/15" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 font-sansBody text-[10px] font-extrabold text-velmora-obsidian">
                {itemCount}
              </span>
            )}
          </button>
          <button type="button" className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-velmora-espresso/10 bg-velmora-cream px-5 py-6 text-velmora-obsidian md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="font-sansBody text-sm font-bold uppercase tracking-nav">
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
