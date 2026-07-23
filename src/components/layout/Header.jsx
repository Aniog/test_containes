import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const headerClasses = isTransparent
    ? 'border-white/15 bg-transparent text-velmora-ivory'
    : 'border-velmora-line bg-velmora-ivory/95 text-velmora-espresso shadow-[0_12px_40px_rgba(33,24,21,0.06)] backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${headerClasses}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-luxe md:text-4xl">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-luxe transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/shop" className="hidden transition hover:text-velmora-gold sm:block" aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <button type="button" onClick={onCartOpen} className="relative transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory text-velmora-espresso transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0 border-t-0'}`}>
        <nav className="grid px-5 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="border-b border-velmora-line py-4 text-sm font-bold uppercase tracking-luxe text-velmora-espresso transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
