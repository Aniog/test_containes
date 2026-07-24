import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function SiteHeader({ transparent = false }) {
  const { itemCount, toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    if (!isMenuOpen) return undefined

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isMenuOpen])

  const solidHeader = !transparent || isScrolled || isMenuOpen
  const headerClasses = solidHeader
    ? 'bg-noir/95 backdrop-blur-xl border-b border-white/10 shadow-[0_18px_50px_rgba(9,7,6,0.28)]'
    : 'bg-transparent'

  const linkClasses = ({ isActive }) =>
    `transition-colors duration-300 ${isActive ? 'text-gold' : 'text-cream/80 hover:text-cream'}`

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClasses}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition hover:border-gold hover:text-gold md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            to="/"
            className="font-display text-[1.9rem] tracking-[0.38em] text-cream transition hover:text-gold"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.24em] md:flex">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="text-cream/80 transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink key={link.label} to={link.href} className={linkClasses}>
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition hover:border-gold hover:text-gold"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition hover:border-gold hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-noir">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-noir/98 px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.24em] text-cream/85">
              {navLinks.map((link) =>
                link.href.startsWith('#') ? (
                  <Link
                    key={link.label}
                    to={`/${link.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="border-b border-white/10 pb-4 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `border-b border-white/10 pb-4 transition-colors ${isActive ? 'text-gold' : 'hover:text-gold'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ),
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
