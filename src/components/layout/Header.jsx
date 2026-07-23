import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!location.hash) return
    const element = document.querySelector(location.hash)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  const solid = isScrolled || isMenuOpen || location.pathname !== '/'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${solid ? 'border-velmora-mist bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl' : 'border-white/15 bg-transparent text-velmora-ivory'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <button
          type="button"
          className="velmora-focus -ml-2 rounded-full p-2 text-current md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="velmora-focus font-serif text-3xl font-semibold tracking-[0.18em] md:text-4xl">VELMORA</Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className="velmora-focus text-xs font-semibold uppercase tracking-[0.22em] transition hover:text-velmora-gold">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <button type="button" className="velmora-focus rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onOpenCart} className="velmora-focus relative rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-velmora-mist bg-velmora-ivory px-5 pb-6 text-velmora-espresso md:hidden">
          <nav className="grid gap-1 pt-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} onClick={() => setIsMenuOpen(false)} className="rounded-full px-3 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition hover:bg-velmora-parchment">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
