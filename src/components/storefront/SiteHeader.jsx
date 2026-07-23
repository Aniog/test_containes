import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../contexts/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function SiteHeader() {
  const location = useLocation()
  const navigate = useNavigate()
  const { openCart, itemCount } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash, location.search])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled
  const headerClass = useMemo(
    () =>
      transparent
        ? 'bg-transparent text-white'
        : 'border-b border-stone-200/80 bg-[rgba(248,243,236,0.92)] text-[var(--velmora-ink)] surface-blur shadow-sm',
    [transparent],
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${headerClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="font-serif text-2xl tracking-[0.36em] md:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="transition hover:text-[var(--velmora-gold)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-full p-2 transition hover:bg-white/10 md:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button
            type="button"
            aria-label="Search the collection"
            className="rounded-full p-2 transition hover:bg-white/10"
            onClick={() => navigate('/shop#filters')}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="relative rounded-full p-2 transition hover:bg-white/10"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className={`absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold ${transparent ? 'bg-white text-[var(--velmora-ink)]' : 'bg-[var(--velmora-ink)] text-white'}`}>
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div className={`border-t border-white/10 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${transparent ? 'bg-[rgba(47,36,29,0.88)]' : 'bg-[var(--velmora-cream)]'}`}>
        <nav className={`mx-auto flex max-w-7xl flex-col px-5 py-4 text-xs uppercase tracking-[0.22em] ${transparent ? 'text-white' : 'text-[var(--velmora-ink)]'}`}>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="border-b border-white/10 py-3 last:border-b-0">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
