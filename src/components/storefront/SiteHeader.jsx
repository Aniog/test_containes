import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function SiteHeader({
  isMobileMenuOpen,
  onSearchOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
}) {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isSolid, setIsSolid] = useState(location.pathname !== '/')

  useEffect(() => {
    const updateSurface = () => {
      setIsSolid(location.pathname !== '/' || window.scrollY > 30 || isMobileMenuOpen)
    }

    updateSurface()
    window.addEventListener('scroll', updateSurface)

    return () => {
      window.removeEventListener('scroll', updateSurface)
    }
  }, [location.pathname, isMobileMenuOpen])

  const shellClasses = isSolid
    ? 'border-mist bg-ivory/95 shadow-whisper backdrop-blur'
    : 'border-shell/50 bg-ink/20 shadow-whisper backdrop-blur-md'
  const iconClasses = isSolid
    ? 'border-mist bg-ivory/90 text-ink shadow-whisper hover:bg-shell'
    : 'border-shell/40 bg-ivory/10 text-shell backdrop-blur hover:bg-ivory/20'
  const linkClasses = isSolid
    ? 'text-ink hover:text-champagne'
    : 'text-shell hover:text-ivory'

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-10">
      <div
        className={`mx-auto max-w-7xl rounded-full border px-4 py-3 transition-all duration-300 ease-editorial sm:px-6 ${shellClasses}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={onMobileMenuToggle}
              className={`rounded-full border p-3 transition-colors duration-300 ease-editorial ${iconClasses}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <Link
            to="/"
            className={`font-display text-3xl tracking-editorial transition-colors duration-300 ease-editorial sm:text-4xl ${linkClasses}`}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs uppercase tracking-editorial transition-colors duration-300 ease-editorial ${linkClasses}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onSearchOpen}
              className={`rounded-full border p-3 transition-colors duration-300 ease-editorial ${iconClasses}`}
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={`relative rounded-full border p-3 transition-colors duration-300 ease-editorial ${iconClasses}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount ? (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-champagne text-[10px] font-medium text-ink">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <nav className="mt-4 space-y-2 border-t border-mist pt-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={onMobileMenuClose}
                className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-shell"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default SiteHeader
