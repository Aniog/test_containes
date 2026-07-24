import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar() {
  const { cartCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const solid = scrolled || location.pathname !== '/'

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-[#4b4042]/70 bg-[#221c1f]/95 shadow-[0_12px_40px_rgba(20,12,15,0.18)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-4 text-[#f6f0ea] md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-['Cormorant_Garamond'] text-3xl font-semibold tracking-[0.35em] text-[#f6f0ea]"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-xs uppercase tracking-[0.32em] text-[#efe3d6] transition hover:text-[#b78b54]"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7b7]/30 bg-white/5 text-[#f6f0ea] transition hover:border-[#b78b54] hover:text-[#b78b54] md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7b7]/30 bg-white/5 text-[#f6f0ea] transition hover:border-[#b78b54] hover:text-[#b78b54]"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7b7]/30 bg-white/5 text-[#f6f0ea] transition hover:border-[#b78b54] hover:text-[#b78b54]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b78b54] px-1 text-[10px] font-semibold text-[#221c1f]">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <nav className="mt-4 grid gap-2 rounded-[1.5rem] border border-[#4b4042]/70 bg-[#221c1f]/95 p-4 shadow-[0_12px_40px_rgba(20,12,15,0.18)] md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={`mobile-${link.label}`}
                to={link.to}
                className="rounded-full border border-transparent px-4 py-3 text-xs uppercase tracking-[0.32em] text-[#efe3d6] transition hover:border-[#b78b54]/40 hover:bg-white/5 hover:text-[#b78b54]"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
