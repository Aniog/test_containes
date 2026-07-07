import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, count } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const textColor = isHome && !scrolled ? 'text-[#F9F7F2]' : 'text-[#1A1614]'
  const bg = isHome && !scrolled ? 'bg-transparent' : 'bg-[#F9F7F2]/95 backdrop-blur-md shadow-sm'

  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop?category=sets' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-30 transition-all duration-300',
          bg
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl font-medium uppercase tracking-[0.2em] transition-colors',
              textColor
            )}
          >
            Velmora
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={cn(
                    'font-sans text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-[#B9975B]',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className={cn('transition-colors hover:text-[#B9975B]', textColor)}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className={cn('relative transition-colors hover:text-[#B9975B]', textColor)}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B9975B] text-[10px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              className={cn('transition-colors hover:text-[#B9975B] md:hidden', textColor)}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-[#F9F7F2] px-6 pt-24 md:hidden">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="block font-serif text-2xl font-light uppercase tracking-[0.12em] text-[#1A1614]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
