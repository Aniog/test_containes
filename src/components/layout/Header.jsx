import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Gift%20Sets' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = !isHome || scrolled || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname, location.search])

  const linkClass = solid ? 'text-velmora-ink hover:text-velmora-clay' : 'text-velmora-cream hover:text-velmora-gold'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${solid ? 'border-velmora-ink/10 bg-velmora-cream/95 shadow-sm backdrop-blur-xl' : 'border-velmora-cream/25 bg-velmora-ink/18 backdrop-blur-[2px]'}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center gap-3 lg:hidden">
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className={`p-2 transition ${linkClass}`} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className={`font-serif text-3xl font-semibold tracking-[0.18em] transition ${solid ? 'text-velmora-ink' : 'text-velmora-cream'}`} aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className={`text-xs font-semibold uppercase tracking-[0.22em] transition ${linkClass}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button type="button" className={`p-2 transition ${linkClass}`} aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setIsCartOpen(true)} className={`relative p-2 transition ${linkClass}`} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-ink/10 bg-velmora-cream transition-all duration-500 lg:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="border-b border-velmora-ink/10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-clay">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
