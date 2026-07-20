import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigationLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#categories' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const isHeroMode = location.pathname === '/' && !isScrolled
  const shellClassName = isHeroMode
    ? 'border-transparent bg-transparent text-velmora-cream'
    : 'border-velmora-line bg-velmora-cream/92 text-velmora-ink shadow-soft backdrop-blur'
  const navLinkClassName = isHeroMode
    ? 'text-velmora-cream/80 hover:text-velmora-cream'
    : 'text-velmora-muted hover:text-velmora-ink'
  const iconButtonClassName = isHeroMode
    ? 'text-velmora-cream hover:text-velmora-gold'
    : 'text-velmora-ink hover:text-velmora-gold'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-7xl rounded-full border px-5 py-4 transition duration-500 ease-velvet ${shellClassName}`}>
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-display text-3xl tracking-[0.35em] transition duration-300 hover:text-velmora-gold"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs font-medium uppercase tracking-eyebrow transition duration-300 ${navLinkClassName}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className={`relative rounded-full p-2 transition duration-300 ${iconButtonClassName}`}
              aria-label="Search products"
              onClick={() => navigate('/shop')}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className={`relative rounded-full p-2 transition duration-300 ${iconButtonClassName}`}
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {cartCount}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className={`relative rounded-full p-2 transition duration-300 ${iconButtonClassName}`}
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              className={`rounded-full p-2 transition duration-300 ${iconButtonClassName}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs font-medium uppercase tracking-eyebrow transition duration-300 ${navLinkClassName}`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                className={`flex items-center gap-2 text-xs font-medium uppercase tracking-eyebrow transition duration-300 ${navLinkClassName}`}
                onClick={() => navigate('/shop')}
              >
                <Search className="h-4 w-4" /> Search
              </button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
