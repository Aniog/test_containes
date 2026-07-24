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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/shop?category=sets' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ]

  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isTransparent ? 'bg-transparent text-white' : 'bg-background/95 text-foreground backdrop-blur-md shadow-sm'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-xl tracking-[0.18em] sm:text-2xl"
        >
          VELMORA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative text-sm font-medium tracking-wide transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            aria-label="Search"
            className="rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={openCart}
            aria-label="Cart"
            className="relative rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-full p-2 transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/30 bg-background px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium tracking-wide text-foreground hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
