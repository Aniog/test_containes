import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?view=collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const linkColor = solid ? 'text-[#17110D]' : 'text-[#FBF8F2]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        solid
          ? 'border-[#17110D]/10 bg-[#F7F1E8]/95 shadow-[0_10px_40px_rgba(23,17,13,0.08)] backdrop-blur-xl'
          : 'border-[#FBF8F2]/20 bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className={`font-serif text-2xl tracking-[0.24em] ${linkColor}`}>
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.22em] transition hover:text-[#B9853B] ${linkColor}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-3 ${linkColor}`}>
          <button
            type="button"
            aria-label="Search"
            className="hidden p-2 transition hover:text-[#B9853B] sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className="relative p-2 transition hover:text-[#B9853B]"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#B9853B] px-1 text-[0.65rem] font-bold text-[#17110D]">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 transition hover:text-[#B9853B] lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#17110D]/10 bg-[#F7F1E8] px-5 py-6 text-[#17110D] lg:hidden">
          <nav className="grid gap-5" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-semibold uppercase tracking-[0.22em] text-[#17110D]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
