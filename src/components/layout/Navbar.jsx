import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const { itemCount, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isDark
            ? 'bg-transparent text-ivory'
            : 'bg-ivory/95 backdrop-blur text-espresso shadow-sm',
        )}
      >
        <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            <Link
              to="/"
              className="font-serif text-lg md:text-xl uppercase tracking-logo"
            >
              Velmora
            </Link>

            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs uppercase tracking-[0.18em] font-medium hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 md:gap-6">
              <button
                aria-label="Search"
                className="hover:text-gold transition-colors"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className="relative hover:text-gold transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-ivory md:hidden">
          <div className="flex items-center justify-between px-5 h-16 border-b border-stone">
            <span className="font-serif text-lg uppercase tracking-logo">
              Velmora
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-8 py-10 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-espresso"
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
