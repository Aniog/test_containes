import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.search, location.hash])

  const handleNav = (to) => {
    navigate(to)
  }

  const headerTone = !isHome || isScrolled || menuOpen
    ? 'bg-velmora-ivory/95 text-velmora-ink shadow-card backdrop-blur-md'
    : 'bg-velmora-ink/15 text-velmora-ivory backdrop-blur-sm'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${!isHome || isScrolled || menuOpen ? 'border-velmora-line/70' : 'border-transparent'} ${headerTone}`}>
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="font-serif text-3xl tracking-[0.35em] md:text-4xl">VELMORA</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button key={item.label} className="text-sm uppercase tracking-[0.2em] transition hover:text-velmora-gold" onClick={() => handleNav(item.to)}>{item.label}</button>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-current/5" aria-label="Search"><Search className="h-4 w-4" /></button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-current/5" aria-label="Cart" onClick={openCart}>
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ivory">{itemCount}</span>
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-velmora-line bg-velmora-ivory text-velmora-ink md:hidden">
          <div className="container-shell flex flex-col py-4">
            {navItems.map((item) => (
              <button key={item.label} className="border-b border-velmora-line py-4 text-left text-sm uppercase tracking-[0.2em] text-velmora-ink last:border-b-0" onClick={() => handleNav(item.to)}>{item.label}</button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
