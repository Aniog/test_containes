import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isTransparent = !scrolled && !mobileOpen
  const headerClasses = isTransparent
    ? 'border-transparent bg-velmora-ink/12 text-velmora-porcelain backdrop-blur-[2px]'
    : 'border-velmora-hairline bg-velmora-porcelain/95 text-velmora-ink shadow-sm backdrop-blur-xl'
  const transparentTextShadow = isTransparent ? 'drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)]' : ''

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${headerClasses}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`font-serif text-3xl font-semibold tracking-[0.18em] text-current ${transparentTextShadow}`}
          aria-label="Velmora homepage"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`text-xs font-semibold uppercase tracking-[0.24em] text-current transition hover:text-velmora-champagne ${transparentTextShadow}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-2 text-current ${transparentTextShadow}`}>
          <button
            type="button"
            className="hidden rounded-full p-2 transition hover:bg-velmora-blush/20 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full p-2 transition hover:bg-velmora-blush/20"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[11px] font-bold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2 transition hover:bg-velmora-blush/20 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-velmora-hairline bg-velmora-porcelain px-4 py-5 text-velmora-ink md:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
