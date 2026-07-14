import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Necklaces' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export function SiteHeader() {
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isHomePage = location.pathname === '/'
  const useTransparentHeader = isHomePage && !isScrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          useTransparentHeader
            ? 'border-white/15 bg-transparent text-white'
            : 'border-stone-200/80 bg-stone-50/95 backdrop-blur text-stone-900 shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10 xl:px-16">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.35em] sm:text-[1.75rem]"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-xs uppercase tracking-[0.28em] transition-opacity hover:opacity-100 opacity-80"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
              aria-label="Search"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-[10px] font-medium text-white">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[60] bg-stone-950/65 backdrop-blur-sm md:hidden">
          <div className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-stone-50 px-6 py-6 text-stone-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <span className="font-serif text-xl tracking-[0.3em]">VELMORA</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between py-8">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="text-sm uppercase tracking-[0.26em] text-stone-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="space-y-3 border-t border-stone-200 pt-6 text-sm text-stone-600">
                <p>Free worldwide shipping on qualifying orders.</p>
                <p>Gift-ready packaging in every order.</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
