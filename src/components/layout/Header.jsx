import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#categories' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const solid = !isHome || scrolled || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${solid ? 'border-velmora-linen/80 bg-velmora-cream/95 text-velmora-ink shadow-soft backdrop-blur' : 'border-white/15 bg-transparent text-velmora-cream'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 py-5 md:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-current">VELMORA</Link>
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className="text-xs font-semibold uppercase tracking-[0.22em] text-current/85 transition hover:text-velmora-champagne">
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="rounded-full p-2 text-current transition hover:text-velmora-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setIsCartOpen(true)} className="relative rounded-full p-2 text-current transition hover:text-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">{itemCount}</span>}
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 text-current md:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-velmora-linen bg-velmora-cream px-5 py-5 text-velmora-ink md:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} onClick={() => setMobileOpen(false)} className="text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
