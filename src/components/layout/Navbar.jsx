import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop', type: 'route' },
  { label: 'Collections', to: { pathname: '/', hash: '#collections' }, hash: '#collections', type: 'section' },
  { label: 'About', to: { pathname: '/', hash: '#story' }, hash: '#story', type: 'section' },
  { label: 'Journal', to: { pathname: '/', hash: '#journal' }, hash: '#journal', type: 'section' },
]

export default function Navbar() {
  const { itemCount, openCart } = useCart()
  const { pathname, hash } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
  }, [pathname, hash])

  const shellClassName = cn(
    'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
    isScrolled || pathname !== '/'
      ? 'border-velmora-line bg-velmora-ink/95 shadow-luxe backdrop-blur'
      : 'border-transparent bg-transparent',
  )

  return (
    <>
      <header className={shellClassName}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ivory transition hover:border-velmora-gold/60 hover:text-velmora-gold lg:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="font-display text-3xl tracking-[0.35em] text-velmora-ivory sm:text-4xl"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-xs uppercase tracking-[0.28em] text-velmora-ivory/80 transition hover:text-velmora-ivory',
                    item.type === 'section'
                      ? pathname === '/' && hash === item.hash && 'text-velmora-ivory'
                      : isActive && 'text-velmora-ivory',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-velmora-ivory transition hover:border-velmora-line hover:bg-velmora-ivory/5 hover:text-velmora-gold"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-velmora-ivory transition hover:border-velmora-line hover:bg-velmora-ivory/5 hover:text-velmora-gold"
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.625rem] font-semibold text-velmora-cocoa">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] bg-velmora-ink/70 transition lg:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div
          className={cn(
            'ml-auto flex h-full w-[82%] max-w-sm flex-col bg-velmora-panel px-6 py-6 text-velmora-cocoa shadow-2xl transition duration-300',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between border-b border-velmora-line pb-4">
            <span className="font-display text-2xl tracking-[0.28em] text-velmora-cocoa">
              VELMORA
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-cocoa transition hover:border-velmora-gold hover:text-velmora-gold"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 grid gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="border-b border-velmora-line/70 pb-4 text-sm uppercase tracking-[0.28em] text-velmora-cocoa transition hover:text-velmora-gold"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
