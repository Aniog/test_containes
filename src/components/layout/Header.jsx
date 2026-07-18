import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Huggies' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const Header = ({ cartCount, onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  const textColor = isHomeTop ? 'text-velmora-cream' : 'text-velmora-ink'
  const navSurface = isHomeTop ? 'bg-transparent' : 'border-b border-velmora-ink/10 bg-velmora-cream/95 shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navSurface}`}>
      <div className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${textColor}`}>
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] transition hover:text-velmora-champagne">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.href} className="text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-champagne/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-velmora-champagne/15 md:hidden" aria-label="Toggle navigation">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="border-t border-velmora-ink/10 bg-velmora-cream px-4 py-5 text-velmora-ink shadow-velvet">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.href} className="border-b border-velmora-ink/10 pb-4 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
