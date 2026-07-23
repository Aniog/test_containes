import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled
  const baseText = transparent ? 'text-stone-50' : 'text-stone-900'

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition duration-500',
          transparent ? 'bg-transparent' : 'border-b border-stone-300/70 bg-stone-50/95 backdrop-blur-md shadow-[0_8px_30px_rgba(28,25,23,0.08)]',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className={cn('rounded-full border p-2 md:hidden', transparent ? 'border-stone-50/40 text-stone-50' : 'border-stone-300 text-stone-900')}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className={cn('font-serif text-3xl tracking-[0.35em]', baseText)}>
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-xs uppercase tracking-[0.35em] transition hover:text-amber-700',
                    baseText,
                    isActive && 'text-amber-700',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className={cn('rounded-full border p-2 transition', transparent ? 'border-stone-50/40 text-stone-50 hover:bg-stone-50/10' : 'border-stone-300 text-stone-900 hover:bg-stone-100')}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className={cn('relative rounded-full border p-2 transition', transparent ? 'border-stone-50/40 text-stone-50 hover:bg-stone-50/10' : 'border-stone-300 text-stone-900 hover:bg-stone-100')}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-700 px-1 text-[10px] font-semibold text-stone-50">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-stone-300/70 bg-stone-50 px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-sm uppercase tracking-[0.28em] text-stone-900"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
      <div className="h-[76px] md:h-[88px]" />
    </>
  )
}

export default NavBar
