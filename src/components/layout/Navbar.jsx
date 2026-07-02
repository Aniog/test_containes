import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  const overHero = isHome && !scrolled

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        overHero ? 'bg-transparent py-5' : 'bg-[#F6F3EF]/95 py-3 shadow-sm backdrop-blur-sm'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="p-2 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu
            size={22}
            className={overHero ? 'text-[#F6F3EF]' : 'text-[#1A1512]'}
          />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-[#C49A6C]',
                overHero ? 'text-[#F6F3EF]' : 'text-[#1A1512]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className={cn(
            'font-serif text-xl font-semibold uppercase tracking-[0.25em] transition-colors lg:text-2xl',
            overHero ? 'text-[#F6F3EF]' : 'text-[#1A1512]'
          )}
        >
          Velmora
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              'p-1 transition-colors hover:text-[#C49A6C]',
              overHero ? 'text-[#F6F3EF]' : 'text-[#1A1512]'
            )}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart with ${totalItems} items`}
            className={cn(
              'relative p-1 transition-colors hover:text-[#C49A6C]',
              overHero ? 'text-[#F6F3EF]' : 'text-[#1A1512]'
            )}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C49A6C] text-[10px] font-medium text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-[#F6F3EF] transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-[#E4DDD4] px-4 py-4">
          <span className="font-serif text-lg uppercase tracking-[0.25em] text-[#1A1512]">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} className="text-[#1A1512]" />
          </button>
        </div>
        <nav className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="border-b border-[#E4DDD4] py-4 font-serif text-xl uppercase tracking-[0.15em] text-[#1A1512]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
