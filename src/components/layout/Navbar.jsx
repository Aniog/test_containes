import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { cn } from '@/lib/utils.js'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const isOverlay = useMemo(() => location.pathname === '/' && !scrolled && !menuOpen, [location.pathname, menuOpen, scrolled])

  const shellClassName = isOverlay
    ? 'bg-transparent text-ivory'
    : 'border-b border-white/10 bg-velvet/95 text-ivory shadow-floating backdrop-blur-xl'

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-luxe', shellClassName)}>
      <div className="content-wrap">
        <div className="flex h-20 items-center justify-between gap-4 md:h-24">
          <Link to="/" className="font-display text-3xl tracking-[0.22em] text-current">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm tracking-[0.18em] text-current transition-opacity duration-300 hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search products"
              onClick={() => navigate('/shop')}
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-champagne hover:text-champagne"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative rounded-full border border-white/15 p-2.5 transition-colors hover:border-champagne hover:text-champagne"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-velvet">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-champagne hover:text-champagne md:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm tracking-[0.18em] text-ivory">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
