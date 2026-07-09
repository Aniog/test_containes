import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=all' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { openCart, count } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHero = location.pathname === '/' && location.search === ''
  const isTransparent = isHero && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out-expo ${
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-cream-100/95 text-charcoal-900 backdrop-blur-md border-b border-charcoal-900/5'
        }`}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 -ml-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.18em] font-medium absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            VELMORA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="label-uppercase link-underline text-[11px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen((o) => !o)}
              className="p-2 transition-opacity hover:opacity-70"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 transition-opacity hover:opacity-70"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-600 text-[10px] font-medium text-charcoal-900 px-1">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-charcoal-900/5 bg-cream-100 px-5 py-3 md:px-10">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const q = e.target.elements.q.value.trim()
                if (q) navigate(`/shop?q=${encodeURIComponent(q)}`)
                setSearchOpen(false)
              }}
              className="mx-auto flex max-w-xl items-center gap-3"
            >
              <Search size={18} className="text-charcoal-400" />
              <input
                name="q"
                type="text"
                placeholder="Search jewelry..."
                autoFocus
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-charcoal-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs uppercase tracking-wider text-charcoal-500 hover:text-charcoal-900"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-cream-100 pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
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
