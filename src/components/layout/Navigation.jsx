import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Gift%20Sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.search])

  const textClass = transparent ? 'text-white drop-shadow-[0_1px_10px_rgba(33,25,21,0.65)]' : 'text-velmora-espresso'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${transparent ? 'bg-transparent' : 'border-b border-velmora-sand/80 bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className={`font-serif text-3xl font-semibold tracking-[0.18em] ${textClass}`}>VELMORA</Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-champagne ${textClass} ${isActive ? 'text-velmora-champagne' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${textClass}`}>
          <button type="button" aria-label="Search" className="rounded-full p-2 transition hover:bg-velmora-champagne/20">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Open cart" onClick={() => setIsCartOpen(true)} className="relative rounded-full p-2 transition hover:bg-velmora-champagne/20">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">{itemCount}</span>}
          </button>
          <button type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-velmora-champagne/20 lg:hidden">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-velmora-sand bg-velmora-ivory px-4 py-6 text-velmora-espresso shadow-velvet lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="rounded-2xl border border-velmora-sand bg-velmora-porcelain px-5 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
