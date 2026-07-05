import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?focus=collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isHomeTop
          ? 'border-transparent bg-transparent text-white'
          : 'border-b border-velmora-champagne/25 bg-velmora-ivory/95 text-velmora-obsidian shadow-[0_10px_40px_rgba(32,25,19,0.07)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em] text-inherit">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-inherit opacity-90 transition hover:text-velmora-champagneDark hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-3 text-inherit transition hover:bg-velmora-champagne/15"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className="relative rounded-full p-3 text-inherit transition hover:bg-velmora-champagne/15"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-obsidian">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-3 text-inherit transition hover:bg-velmora-champagne/15 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-velmora-champagne/25 bg-velmora-ivory px-5 py-6 text-velmora-obsidian shadow-xl lg:hidden">
          <nav className="grid gap-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="text-sm font-semibold uppercase tracking-[0.24em]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
