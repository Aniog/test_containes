import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const shell = scrolled || mobileOpen || !isHome
    ? 'bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl border-velmora-champagne/20'
    : 'bg-transparent text-velmora-ivory border-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${shell}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <button type="button" className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="font-serif text-3xl tracking-[0.18em] md:text-4xl">VELMORA</Link>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className="transition hover:text-velmora-champagne">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} aria-label="Open cart" className="relative transition hover:text-velmora-champagne">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-50 bg-velmora-espresso/50 backdrop-blur-sm transition md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`h-full w-80 max-w-[86vw] bg-velmora-ivory p-6 text-velmora-espresso transition duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <span className="font-serif text-3xl tracking-[0.18em]">VELMORA</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X className="h-6 w-6" /></button>
          </div>
          <div className="mt-12 grid gap-6">
            {links.map((link) => (
              <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="border-b border-velmora-champagne/20 pb-4 font-serif text-3xl">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
