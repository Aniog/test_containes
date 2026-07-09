import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? 'border-b border-velmora-espresso/10 bg-velmora-ivory/95 text-velmora-espresso shadow-soft backdrop-blur-xl' : 'text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" className="inline-flex items-center justify-center rounded-full border border-current/20 p-2 text-current transition hover:border-velmora-gold hover:text-velmora-gold md:hidden" aria-label="Open navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.2em] text-current">VELMORA</Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={({ isActive }) => `text-xs font-semibold uppercase tracking-[0.28em] transition hover:text-velmora-gold ${isActive ? 'text-velmora-gold' : 'text-current'}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" className="rounded-full border border-current/20 p-2 text-current transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative rounded-full border border-current/20 p-2 text-current transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Open cart" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">{cartCount}</span>}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-velmora-espresso/10 bg-velmora-ivory px-4 pb-6 text-velmora-espresso md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="border-b border-velmora-espresso/10 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-espresso">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
