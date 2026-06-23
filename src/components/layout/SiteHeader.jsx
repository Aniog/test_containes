import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash, location.search])

  useEffect(() => {
    if (!mobileOpen) return undefined

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  const headerClasses = isHome && !scrolled ? 'bg-transparent border-transparent' : 'bg-nav-solid border-hairline-dark'
  const logoClasses = isHome && !scrolled ? 'text-foreground-strong' : 'text-foreground'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${headerClasses}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline-dark bg-panel-dark text-foreground transition hover:border-accent"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Link to="/" className={`font-display text-3xl tracking-[0.4em] ${logoClasses}`}>
            VELMORA
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-[0.24em] text-foreground transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => navigate('/shop')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline-dark bg-panel-dark text-foreground transition hover:border-accent"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-hairline-dark bg-panel-dark text-foreground transition hover:border-accent"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-overlay-scrim backdrop-blur-md lg:hidden">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-base px-6 pb-8 pt-6 text-foreground shadow-editorial sm:w-[84%]">
            <div className="flex items-center justify-between border-b border-hairline-dark pb-5">
              <span className="font-display text-2xl tracking-[0.32em]">VELMORA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark text-foreground"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-lg uppercase tracking-[0.24em] text-foreground transition hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto rounded-[1.5rem] border border-hairline-dark bg-base-muted p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Quiet Luxury</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Demi-fine gold jewelry designed to feel polished, personal, and gift-worthy.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default SiteHeader
