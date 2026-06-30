import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { cn } from '@/lib/utils.js'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function SiteHeader({ pathname }) {
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isTransparent = pathname === '/' && !isScrolled && !isMenuOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', isTransparent ? 'bg-transparent' : 'border-b border-white/10 bg-stone-950/90 backdrop-blur-xl')}>
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="font-display text-2xl tracking-[0.35em] text-stone-50">VELMORA</Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-sm uppercase tracking-[0.24em] text-stone-300 transition hover:text-amber-200">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/shop" aria-label="Search products" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-200 transition hover:border-amber-200/50 hover:text-amber-200">
              <Search className="h-4 w-4" />
            </Link>
            <button type="button" aria-label="Open cart" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-200 transition hover:border-amber-200/50 hover:text-amber-200" onClick={openCart}>
              <ShoppingBag className="h-4 w-4" />
              {itemCount ? <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">{itemCount}</span> : null}
            </button>
            <button type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-200 transition hover:border-amber-200/50 hover:text-amber-200 md:hidden" onClick={() => setIsMenuOpen((currentValue) => !currentValue)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className={cn('overflow-hidden transition-all duration-300 md:hidden', isMenuOpen ? 'max-h-80 pb-6' : 'max-h-0')}>
          <div className="surface-card flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.22em] text-stone-200 transition hover:bg-white/5 hover:text-amber-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
