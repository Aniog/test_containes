import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const { pathname } = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isTransparent = pathname === '/' && !isScrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${
        isTransparent
          ? 'bg-transparent text-velmora-ivory'
          : 'border-b border-velmora-line bg-velmora-bg/95 text-velmora-ivory backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex rounded-full border border-white/20 p-2 text-current lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          to="/"
          className="font-display text-3xl tracking-[0.45em] text-current sm:text-4xl"
        >
          VELMORA
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs uppercase tracking-[0.35em] text-current/80 transition hover:text-velmora-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full border border-white/20 p-2 text-current transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-white/20 p-2 text-current transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.6rem] font-semibold text-velmora-ink">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-velmora-line bg-velmora-panel px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-xs uppercase tracking-[0.35em] text-velmora-ivory transition hover:text-velmora-gold"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
