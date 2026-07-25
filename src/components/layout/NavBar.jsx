import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Gift%20Sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomeTop = location.pathname === '/' && !scrolled && !menuOpen
  const navText = isHomeTop ? 'text-velmora-ivory' : 'text-velmora-charcoal'
  const navBg = isHomeTop ? 'border-white/15 bg-transparent' : 'border-velmora-line bg-velmora-ivory/95 shadow-soft-jewel backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${navBg}`}>
      <nav className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 ${navText}`} aria-label="Primary navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-luxury transition hover:text-velmora-gold" onClick={() => setMenuOpen(false)}>
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-bold uppercase tracking-wide-luxury transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-2 transition hover:text-velmora-gold sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[10px] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 transition hover:text-velmora-gold md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden bg-velmora-ivory text-velmora-charcoal transition-all duration-500 md:hidden ${menuOpen ? 'max-h-80 border-t border-velmora-line' : 'max-h-0'}`}>
        <div className="grid gap-1 px-5 py-5">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className="border-b border-velmora-line py-4 text-sm font-bold uppercase tracking-wide-luxury text-velmora-charcoal">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
