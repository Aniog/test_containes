import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  Facebook,
  Globe,
  Instagram,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  X,
} from 'lucide-react'
import { useCart } from './cart.jsx'
import { products } from './products.js'
import { useImageLoader } from './use-image-loader.js'

function Header() {
  const location = useLocation()
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solidHeader = scrolled || location.pathname !== '/'
  const linkBase = solidHeader ? 'text-velmora-espresso' : 'text-velmora-pearl'
  const borderClass = solidHeader ? 'border-velmora-sand/80' : 'border-white/15'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        solidHeader
          ? 'bg-velmora-pearl/95 shadow-velmora-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className={`section-shell border-b ${borderClass}`}>
        <div className="flex h-20 items-center justify-between gap-4 lg:h-24">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full border p-3 lg:hidden ${
              solidHeader
                ? 'border-velmora-sand text-velmora-espresso'
                : 'border-white/20 text-velmora-pearl'
            }`}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className={`font-display text-3xl tracking-[0.35em] transition sm:text-4xl ${linkBase}`}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ['Shop', '/shop'],
              ['Collections', '/shop'],
              ['About', '/#our-story'],
              ['Journal', '/#journal'],
            ].map(([label, to]) => (
              <NavLink
                key={label}
                to={to}
                className={() =>
                  `text-xs font-semibold uppercase tracking-[0.24em] transition ${linkBase} opacity-75 hover:opacity-100`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                solidHeader
                  ? 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'
                  : 'border-white/20 text-velmora-pearl hover:border-white/40'
              }`}
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                solidHeader
                  ? 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'
                  : 'border-white/20 text-velmora-pearl hover:border-white/40'
              }`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-bronze px-1 text-[10px] font-bold text-velmora-pearl">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  const footerColumns = {
    Shop: ['New Arrivals', 'Bestsellers', 'Gift Sets', 'Necklaces'],
    Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
    Company: ['About Velmora', 'Journal', 'Stockists', 'Privacy'],
  }

  return (
    <footer className="border-t border-velmora-sand bg-velmora-espresso text-velmora-pearl">
      <div className="section-shell grid gap-12 py-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="font-display text-4xl tracking-[0.35em] text-velmora-pearl">VELMORA</p>
          <p className="max-w-md text-sm leading-7 text-[#d8cfc5]">
            Demi-fine gold jewelry designed for quiet rituals, meaningful gifts, and everyday polish.
          </p>
          <div className="flex items-center gap-3 text-[#f4ebe0]">
            {[Instagram, Facebook, Globe].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-velmora-bronze hover:text-velmora-bronze"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4ebe0]">
                {title}
              </p>
              <ul className="space-y-3 text-sm text-[#d8cfc5]">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-velmora-bronze">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell flex flex-col gap-4 border-t border-white/10 py-6 text-xs uppercase tracking-[0.2em] text-[#c6baae] sm:flex-row sm:items-center sm:justify-between">
        <p>Visa · Mastercard · Amex · PayPal</p>
        <p>© 2026 Velmora Fine Jewelry</p>
      </div>
    </footer>
  )
}

function SearchDrawer() {
  const { isSearchOpen, setIsSearchOpen } = useCart()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return products

    return products.filter((product) =>
      `${product.name} ${product.category} ${product.material}`
        .toLowerCase()
        .includes(normalized),
    )
  }, [query])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#1e1816]/35 transition ${
          isSearchOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsSearchOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-lg border-l border-velmora-sand bg-velmora-pearl text-velmora-espresso shadow-velmora transition-transform duration-500 ${
          isSearchOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="eyebrow">Search</p>
            <h2 className="mt-2 font-display text-3xl text-velmora-espresso">Find your piece</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="rounded-full border border-velmora-sand p-2 text-velmora-espresso transition hover:border-velmora-bronze hover:text-velmora-bronze"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <label className="relative block">
            <span className="sr-only">Search jewelry</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-umber" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search earrings, necklaces, huggies..."
              className="w-full rounded-full border border-velmora-sand bg-velmora-ivory py-4 pl-12 pr-5 text-sm text-velmora-espresso outline-none transition focus:border-velmora-bronze"
            />
          </label>
        </div>

        <div className="space-y-4 overflow-y-auto px-6 pb-8">
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              onClick={() => setIsSearchOpen(false)}
              className="flex items-center gap-4 rounded-[1.75rem] border border-velmora-sand bg-velmora-ivory p-4 transition hover:-translate-y-0.5 hover:shadow-velmora-soft"
            >
              <div className="h-24 w-20 overflow-hidden rounded-[1.25rem] bg-velmora-mist">
                <img
                  alt={product.name}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`${product.imageId}-search`}
                  data-strk-img={`[search-${product.id}-desc] [search-${product.id}-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="360"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="space-y-2">
                <p id={`search-${product.id}-desc`} className="eyebrow">
                  {product.category}
                </p>
                <h3
                  id={`search-${product.id}-title`}
                  className="font-display text-xl uppercase tracking-[0.18em] text-velmora-espresso"
                >
                  {product.name}
                </h3>
                <p className="text-sm text-velmora-umber">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}

function CartDrawer() {
  const {
    cartItems,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#1e1816]/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-sand bg-velmora-pearl text-velmora-espresso shadow-velmora transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="eyebrow">Your Cart</p>
            <h2 className="mt-2 font-display text-3xl text-velmora-espresso">Shopping Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-sand p-2 text-velmora-espresso transition hover:border-velmora-bronze hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-velmora-sand bg-velmora-ivory p-4 text-velmora-bronze">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl text-velmora-espresso">Your bag is empty</h3>
              <p className="text-sm leading-7 text-velmora-umber">
                Explore our best-selling demi-fine pieces and add something timeless.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="inline-flex rounded-full bg-velmora-bronze px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-espresso"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 rounded-[1.75rem] border border-velmora-sand bg-velmora-ivory p-4"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="h-28 w-24 shrink-0 overflow-hidden rounded-[1.25rem] bg-velmora-mist"
                  >
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`${item.imageId}-cart`}
                      data-strk-img={`[cart-${item.id}-material] [cart-${item.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p id={`cart-${item.id}-material`} className="eyebrow">
                            {item.category}
                          </p>
                          <Link
                            id={`cart-${item.id}-title`}
                            to={`/product/${item.slug}`}
                            onClick={() => setIsCartOpen(false)}
                            className="mt-2 block font-display text-xl uppercase tracking-[0.18em] text-velmora-espresso"
                          >
                            {item.name}
                          </Link>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs uppercase tracking-[0.2em] text-velmora-umber transition hover:text-velmora-bronze"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm text-velmora-umber">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-pearl p-1 text-velmora-espresso">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="rounded-full p-2 transition hover:bg-velmora-ivory"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="rounded-full p-2 transition hover:bg-velmora-ivory"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-velmora-espresso">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-sand bg-velmora-pearl px-6 py-6">
              <div className="mb-5 flex items-center justify-between text-sm text-velmora-umber">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-velmora-espresso">${subtotal}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-espresso"
              >
                Checkout Coming Soon
              </button>
              <p className="mt-4 text-center text-xs leading-6 text-velmora-umber">
                Shipping and taxes are calculated at checkout.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export function SiteLayout() {
  const location = useLocation()
  const containerRef = useRef(null)
  const { isCartOpen, isSearchOpen } = useCart()

  useImageLoader(containerRef, [location.pathname, location.search, isCartOpen, isSearchOpen])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDrawer />
    </div>
  )
}
