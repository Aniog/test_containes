import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { cartCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const baseLink =
    'text-[0.72rem] uppercase tracking-[0.32em] transition duration-300 hover:text-amber-700'
  const forceSolid = useMemo(() => location.pathname !== '/', [location.pathname])
  const isSolid = isScrolled || forceSolid

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${isSolid ? 'border-b border-stone-200/90 bg-stone-50/95 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-3 md:hidden">
            <button
              aria-label="Open menu"
              className="rounded-full border border-white/30 bg-white/10 p-2 text-stone-50 backdrop-blur-sm transition hover:bg-white/20"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <Menu className={`h-5 w-5 ${isSolid ? 'text-neutral-950' : 'text-stone-50'}`} />
            </button>
          </div>

          <div className="flex flex-1 items-center md:justify-start">
            <Link
              className={`font-display text-3xl tracking-[0.34em] transition ${isSolid ? 'text-neutral-950' : 'text-stone-50'}`}
              to="/"
            >
              VELMORA
            </Link>
          </div>

          <nav className={`hidden flex-1 items-center justify-center gap-8 md:flex ${isSolid ? 'text-neutral-950' : 'text-stone-50'}`}>
            {navItems.map((item) => (
              <NavLink className={baseLink} key={item.label} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
            <button
              aria-label="Search"
              className={`rounded-full border p-2.5 transition ${isSolid ? 'border-stone-300 bg-white text-neutral-950 hover:border-stone-400' : 'border-white/30 bg-white/10 text-stone-50 hover:bg-white/20'}`}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Open cart"
              className={`relative rounded-full border p-2.5 transition ${isSolid ? 'border-stone-300 bg-white text-neutral-950 hover:border-stone-400' : 'border-white/30 bg-white/10 text-stone-50 hover:bg-white/20'}`}
              onClick={() => setIsCartOpen(true)}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className={`absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[0.65rem] font-medium ${isSolid ? 'bg-amber-600 text-stone-50' : 'bg-stone-50 text-neutral-950'}`}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-neutral-950/40 transition md:hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-stone-50 px-6 py-6 text-neutral-950 shadow-2xl transition duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <Link className="font-display text-3xl tracking-[0.26em] text-neutral-950" to="/">
            VELMORA
          </Link>
          <button
            aria-label="Close menu"
            className="rounded-full border border-stone-300 p-2 text-neutral-950"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              className="text-sm uppercase tracking-[0.32em] text-neutral-950"
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Header
