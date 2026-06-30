import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ]

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-400 ${
          scrolled
            ? 'bg-velmora-base/95 py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-xs uppercase tracking-widest text-velmora-ivory transition-colors hover:text-velmora-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.2em] text-velmora-ivory transition-colors hover:text-velmora-gold sm:text-3xl"
          >
            VELMORA
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 transition-colors hover:text-velmora-gold"
              aria-label="Search"
              onClick={() => navigate('/shop')}
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              className="relative p-2 transition-colors hover:text-velmora-gold"
              aria-label="Cart"
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-base">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-base md:hidden">
          <div className="flex items-center justify-between p-4">
            <span className="font-serif text-2xl tracking-[0.2em]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
