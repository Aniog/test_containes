import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const NavBar = ({ cartCount, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const linkColor = transparent ? 'text-velmora-ivory hover:text-velmora-champagne' : 'text-velmora-ink hover:text-velmora-gold-deep'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${transparent ? 'bg-transparent' : 'border-b border-velmora-line bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'}`}>
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-5 py-4 md:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3 md:hidden">
          <button className={`bg-transparent p-2 ${linkColor}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <Link to="/" className={`justify-self-start font-serif text-2xl font-bold tracking-[0.2em] transition ${linkColor}`}>
          VELMORA
        </Link>
        <div className="hidden items-center justify-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={`font-sans text-xs font-semibold uppercase tracking-[0.24em] transition ${linkColor}`}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className={`hidden bg-transparent p-2 transition sm:inline-flex ${linkColor}`} aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className={`relative bg-transparent p-2 transition ${linkColor}`} onClick={onCartOpen} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 ? <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-velmora-gold font-sans text-[10px] font-bold text-velmora-espresso">{cartCount}</span> : null}
          </button>
        </div>
      </nav>
      <div className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory text-velmora-ink transition-all duration-500 md:hidden ${menuOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <div className="space-y-1 px-6 py-5">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="block py-3 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink hover:text-velmora-gold-deep">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar
