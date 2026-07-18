import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '@/components/layout/Logo'
import { navLinks } from '@/data/storefront'
import { useStorefront } from '@/context/StorefrontContext'

const baseLink =
  'text-xs uppercase tracking-[0.28em] transition-colors duration-300 hover:text-velmora-gold'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { itemCount, openCart } = useStorefront()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const isTransparent = !isScrolled && location.pathname === '/'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent text-velmora-cream'
            : 'border-b border-velmora-mist/40 bg-velmora-cream/90 text-velmora-ink backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-10">
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="rounded-full border border-current/20 p-2"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Logo className="text-lg sm:text-xl" />

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? 'text-velmora-gold' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full border border-current/20 p-2 transition-colors duration-300 hover:text-velmora-gold"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              onClick={openCart}
              className="relative rounded-full border border-current/20 p-2 transition-colors duration-300 hover:text-velmora-gold"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[86%] max-w-sm bg-velmora-panel px-5 py-6 text-velmora-ink shadow-soft transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Logo className="text-velmora-ink" />
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full border border-velmora-mist/70 p-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block border-b border-velmora-mist/60 pb-4 font-display text-3xl text-velmora-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}

export default NavBar
