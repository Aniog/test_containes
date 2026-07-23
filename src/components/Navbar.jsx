import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen
  const shellClassName = isTransparent
    ? 'border-transparent bg-transparent text-parchment'
    : 'border-line bg-mist/95 text-ink shadow-soft backdrop-blur'

  const iconClassName = isTransparent ? 'text-parchment' : 'text-ink'
  const badgeClassName = isTransparent
    ? 'bg-parchment text-obsidian'
    : 'bg-obsidian text-parchment'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-500 ease-luxe ${shellClassName}`}>
      <div className="section-frame">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className={`rounded-full border px-3 py-3 ${isTransparent ? 'border-parchment/30' : 'border-line'} bg-transparent`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className={iconClassName} /> : <Menu className={iconClassName} />}
            </button>
          </div>

          <Link to="/" className="font-display text-3xl tracking-brand sm:text-4xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm uppercase tracking-button transition duration-300 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/shop')}
              className={`rounded-full border px-3 py-3 ${isTransparent ? 'border-parchment/30' : 'border-line'} bg-transparent`}
              aria-label="Search products"
            >
              <Search className={iconClassName} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={`relative rounded-full border px-3 py-3 ${isTransparent ? 'border-parchment/30' : 'border-line'} bg-transparent`}
              aria-label="Open cart"
            >
              <ShoppingBag className={iconClassName} />
              <span className={`absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs font-semibold ${badgeClassName}`}>
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className={`grid gap-4 border-t pb-6 pt-5 md:hidden ${isTransparent ? 'border-parchment/20' : 'border-line'}`}>
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm uppercase tracking-button"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
