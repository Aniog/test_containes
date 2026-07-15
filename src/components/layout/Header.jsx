import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ cartCount, onCartOpen }) {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'
  const isSolid = !isHome || solid || menuOpen

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${isSolid ? 'bg-velmora-espresso/95 text-velmora-ivory shadow-soft backdrop-blur' : 'bg-transparent text-velmora-ivory'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="rounded-full p-2 text-current transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.22em] text-current md:text-4xl" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-bold uppercase tracking-[0.22em] text-current/90 transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 text-current transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 text-current transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-mist/20 transition-all duration-500 md:hidden ${menuOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-4 py-5" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className="border-b border-velmora-mist/20 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:text-velmora-champagne">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
