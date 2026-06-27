import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Nav({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        transparent
          ? 'border-porcelain/15 bg-transparent text-porcelain'
          : 'border-obsidian/10 bg-porcelain/95 text-obsidian shadow-soft backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-serif text-2xl tracking-[0.24em] text-current">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-[0.26em] text-current/85 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full p-2.5 text-current transition hover:bg-current/10 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2.5 text-current transition hover:bg-current/10"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[0.65rem] font-bold text-obsidian">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2.5 text-current transition hover:bg-current/10 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-obsidian/10 bg-porcelain px-4 py-5 text-obsidian shadow-soft md:hidden">
          <div className="grid gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="rounded-full border border-obsidian/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-obsidian"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
