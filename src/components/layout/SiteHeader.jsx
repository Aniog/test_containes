import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Huggies' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = !isHome || scrolled || mobileOpen
    ? 'border-velmora-sand/80 bg-velmora-porcelain/95 text-velmora-ink backdrop-blur-xl'
    : 'border-transparent bg-transparent text-velmora-pearl'

  return (
    <header data-home={isHome ? 'true' : 'false'} className={`velmora-header fixed left-0 right-0 top-0 z-40 border-b transition duration-500 ${navClasses}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em]">VELMORA</Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="text-xs font-bold uppercase tracking-label opacity-90 transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-gold/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setIsCartOpen(true)} className="relative rounded-full p-2 transition hover:bg-velmora-gold/15" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ink">{itemCount}</span>}
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-velmora-gold/15 lg:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="border-t border-velmora-sand bg-velmora-porcelain px-5 py-5 text-velmora-ink lg:hidden">
          <div className="grid gap-3">
            {links.map((link) => (
              <NavLink key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="rounded-full border border-velmora-sand px-4 py-3 text-sm font-bold uppercase tracking-label">
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
