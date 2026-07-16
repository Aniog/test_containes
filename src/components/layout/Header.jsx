import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  const textClass = isHomeTop ? 'text-velmora-ivory' : 'text-velmora-espresso'
  const surfaceClass = isHomeTop ? 'bg-transparent' : 'border-b border-velmora-line bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${surfaceClass}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className={`font-display text-3xl font-semibold tracking-refined ${textClass}`} aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className={`text-xs font-semibold uppercase tracking-refined transition hover:text-velmora-gold ${textClass}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-2 ${textClass}`}>
          <button className="rounded-full p-2 transition hover:bg-velmora-gold/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative rounded-full p-2 transition hover:bg-velmora-gold/15" onClick={onCartOpen} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-velmora-gold text-xs font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button className="rounded-full p-2 transition hover:bg-velmora-gold/15 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-velmora-espresso/50 transition lg:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <aside className={`ml-auto h-full w-80 max-w-full bg-velmora-ivory p-6 text-velmora-espresso shadow-drawer transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-10 flex items-center justify-between">
            <span className="font-display text-3xl font-semibold tracking-refined">VELMORA</span>
            <button className="rounded-full border border-velmora-line p-2" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="border-b border-velmora-line pb-4 font-display text-3xl text-velmora-espresso">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  )
}
