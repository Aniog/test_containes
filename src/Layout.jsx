import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import { SVG_PLACEHOLDER } from '@/components/ui/StrkImage'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Layout() {
  const containerRef = useRef(null)
  const location = useLocation()
  const { count, openCart, toast } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div ref={containerRef} className="min-h-screen bg-cream text-ink">
      {/* sr-only brand mirrors for image queries */}
      <span id="brand-name" className="sr-only">
        Velmora Fine Jewelry
      </span>
      <span id="brand-tagline" className="sr-only">
        Demi-fine 18k gold plated jewelry, earrings necklaces and huggies, quiet luxury
      </span>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid ? 'border-b border-line bg-cream/95 shadow-[0_8px_30px_-18px_rgba(33,29,25,0.25)] backdrop-blur' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <div className="flex flex-1 items-center md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 items-center justify-center transition-colors ${solid ? 'text-ink hover:text-gold' : 'text-cream hover:text-gold-soft'}`}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <Link
            to="/"
            className={`font-serif text-xl tracking-[0.35em] transition-colors md:text-2xl ${
              solid ? 'text-ink' : 'text-cream'
            }`}
          >
            VELMORA
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-9 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[11px] font-medium uppercase tracking-[0.25em] transition-colors ${
                    solid
                      ? isActive
                        ? 'text-gold-deep'
                        : 'text-ink hover:text-gold-deep'
                      : isActive
                        ? 'text-gold-soft'
                        : 'text-cream hover:text-gold-soft'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-1">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center transition-colors ${
                solid ? 'text-ink hover:text-gold-deep' : 'text-cream hover:text-gold-soft'
              }`}
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${count} items`}
              onClick={openCart}
              className={`relative flex h-10 w-10 items-center justify-center transition-colors ${
                solid ? 'text-ink hover:text-gold-deep' : 'text-cream hover:text-gold-soft'
              }`}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-cream">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className={`border-t ${solid ? 'border-line bg-cream' : 'border-cream/15 bg-espresso/80 backdrop-blur'}`}>
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 md:px-8">
              <Search className={`h-4 w-4 ${solid ? 'text-taupe' : 'text-stone-warm'}`} strokeWidth={1.5} />
              <input
                autoFocus
                type="search"
                placeholder="Search earrings, necklaces, huggies…"
                aria-label="Search products"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSearchOpen(false)
                }}
                className={`w-full bg-transparent text-sm outline-none placeholder:text-taupe ${
                  solid ? 'text-ink' : 'text-cream placeholder:text-stone-warm/70'
                }`}
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className={`${solid ? 'text-taupe hover:text-ink' : 'text-stone-warm hover:text-cream'}`}
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-cream shadow-soft-lg transition-transform duration-400 ease-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <span className="font-serif text-lg tracking-[0.35em] text-ink">VELMORA</span>
            <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-taupe-dark hover:text-ink">
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={({ isActive }) =>
                  `border-b border-line py-4 font-serif text-2xl tracking-wide transition-colors ${
                    isActive ? 'text-gold-deep' : 'text-ink hover:text-gold-deep'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-10">
            <div
              className="h-40 w-full bg-stone-warm object-cover"
              data-strk-bg-id="mobile-menu-bg-4f1a9c"
              data-strk-bg="[brand-tagline] [brand-name] gold earrings on silk warm light"
              data-strk-bg-ratio="3x2"
              data-strk-bg-width="600"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-taupe">Crafted to be treasured</p>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
      <CartDrawer />

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-400 ${
          toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3 bg-espresso px-5 py-3 shadow-soft-lg">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold">
            <Check className="h-3.5 w-3.5 text-cream" strokeWidth={2.5} />
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream">{toast}</p>
        </div>
      </div>

      {/* Decorative placeholder referenced by nav search etc. keeps config warm */}
      <img src={SVG_PLACEHOLDER} alt="" aria-hidden="true" className="hidden" />
    </div>
  )
}
