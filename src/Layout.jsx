import { useEffect, useRef, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice, footerLinks, paymentBadges, placeholderImage } from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

const navItems = [
  { label: 'Shop', href: '/shop', external: false },
  { label: 'Collections', href: '/#collections', external: true },
  { label: 'About', href: '/#story', external: true },
  { label: 'Journal', href: '/#journal', external: true },
]

function PreviewRouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: Boolean(options.replace) })
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [location.pathname, location.search])

  return null
}

function QuantitySelector({ value, onChange, compact = false }) {
  const sizeClasses = compact ? 'h-9 w-9' : 'h-11 w-11'

  return (
    <div className="inline-flex items-center rounded-full border border-mist bg-porcelain p-1 shadow-card">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className={`inline-flex ${sizeClasses} items-center justify-center rounded-full text-ink transition hover:bg-sand`}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-ink">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className={`inline-flex ${sizeClasses} items-center justify-center rounded-full text-ink transition hover:bg-sand`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

function CartDrawer() {
  const { closeCart, isOpen, items, removeItem, subtotal, updateQuantity } = useCart()
  const containerRef = useRef(null)

  useImageLoader(containerRef, [items.length, isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] bg-obsidian/35 transition ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-[100] flex h-full w-full max-w-md flex-col bg-ivory shadow-soft transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-mist/70 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-luxe text-champagne">Your bag</p>
            <h2 className="text-2xl">Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mist text-ink transition hover:border-champagne"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full bg-sand p-5">
              <ShoppingBag className="h-8 w-8 text-champagne" />
            </div>
            <h3 className="mt-6 text-3xl">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-ink/70">
              Add a few Velmora favorites to begin building your everyday jewelry wardrobe.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-obsidian"
            >
              Shop collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => {
                const baseId = `cart-${item.itemKey}`

                return (
                  <article
                    key={item.itemKey}
                    className="grid grid-cols-[96px_1fr] gap-4 rounded-[1.5rem] border border-mist/70 bg-porcelain p-3 shadow-card"
                  >
                    <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-sand via-porcelain to-mist p-3">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,154,105,0.22),_transparent_55%)]" />
                      <div className="relative z-10 space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">
                          {item.product.category}
                        </p>
                        <p className="font-serif text-lg leading-none text-ink">
                          {item.product.shortName}
                        </p>
                      </div>
                      <p id={`${baseId}-prompt`} className="sr-only">
                        {item.product.primaryPrompt}
                      </p>
                    </div>

                    <div className="flex min-w-0 flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-[0.22em] text-champagne">
                            {item.product.category}
                          </p>
                          <h3 id={`${baseId}-title`} className="text-lg uppercase tracking-[0.14em] text-ink">
                            {item.product.name}
                          </h3>
                          <p id={`${baseId}-desc`} className="text-sm text-ink/65">
                            {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.itemKey)}
                          className="text-xs uppercase tracking-[0.22em] text-ink/50 transition hover:text-champagne"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-3">
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(nextQuantity) => updateQuantity(item.itemKey, nextQuantity)}
                          compact
                        />
                        <p className="font-serif text-2xl text-ink">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="border-t border-mist/70 bg-ivory px-5 py-5 sm:px-6">
              <div className="mb-4 flex items-center justify-between text-sm text-ink/70">
                <span>Subtotal</span>
                <span className="font-serif text-3xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-obsidian"
              >
                Checkout coming soon
              </button>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-ink/55">
                Cart state is ready for a future checkout integration.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { cartCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const isTransparent = location.pathname === '/' && !scrolled
  const toneClasses = isTransparent
    ? 'border-white/10 bg-transparent text-ivory'
    : 'border-mist/70 bg-porcelain/95 text-ink shadow-soft backdrop-blur'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${toneClasses}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${isTransparent ? 'border-white/20 text-ivory hover:border-white/40' : 'border-mist text-ink hover:border-champagne'}`}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="font-serif text-2xl tracking-luxe text-current sm:text-3xl">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.22em] text-current/90 transition hover:text-champagne"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm uppercase tracking-[0.22em] text-current/90 transition hover:text-champagne"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${isTransparent ? 'border-white/20 text-ivory hover:border-white/40' : 'border-mist text-ink hover:border-champagne'}`}
            aria-label="Search collection"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${isTransparent ? 'border-white/20 text-ivory hover:border-white/40' : 'border-mist text-ink hover:border-champagne'}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-obsidian">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${menuOpen ? 'max-h-64 border-white/10 opacity-100' : 'max-h-0 border-transparent opacity-0'} ${isTransparent ? 'bg-obsidian/80 backdrop-blur' : 'bg-porcelain'}`}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm uppercase tracking-[0.22em] text-current/90 transition hover:bg-white/5 hover:text-champagne"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-2xl px-3 py-3 text-sm uppercase tracking-[0.22em] text-current/90 transition hover:bg-white/5 hover:text-champagne"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const socialLinks = ['Instagram', 'Pinterest', 'TikTok']

  return (
    <footer className="border-t border-mist/70 bg-obsidian text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="space-y-5">
            <p className="font-serif text-3xl tracking-luxe text-ivory">VELMORA</p>
            <p className="max-w-md text-sm leading-7 text-ivory/72">
              Demi-fine gold jewelry designed to feel quietly luxurious, giftable, and easy to wear every day.
            </p>
            <div className="flex flex-wrap gap-2">
              {paymentBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-ivory/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([column, links]) => (
              <div key={column} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.22em] text-champagne">{column}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="/shop" className="text-sm text-ivory/72 transition hover:text-ivory">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a key={link} href="/" className="transition hover:text-champagne">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function Layout() {
  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <PreviewRouteBridge />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
