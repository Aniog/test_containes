import { useEffect, useMemo, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import {
  ChevronDown,
  Instagram,
  Mail,
  Menu,
  Minus,
  PinIcon,
  Plus,
  Search,
  ShoppingBag,
  Star,
  Trash2,
  X,
} from 'lucide-react'
import './App.css'
import {
  categories,
  filterOptions,
  getRelatedProducts,
  products,
  testimonials,
  trustItems,
  ugcMoments,
} from './data/products'

const STORAGE_KEY = 'velmora-cart'

const visualThemes = {
  'vivid-aura-jewels': {
    primary: 'from-stone-900 via-amber-800 to-stone-300',
    secondary: 'from-amber-100 via-stone-200 to-amber-400',
  },
  'majestic-flora-nectar': {
    primary: 'from-stone-800 via-rose-300 to-amber-200',
    secondary: 'from-rose-50 via-amber-100 to-orange-300',
  },
  'golden-sphere-huggies': {
    primary: 'from-stone-950 via-amber-700 to-stone-400',
    secondary: 'from-stone-100 via-amber-200 to-yellow-300',
  },
  'amber-lace-earrings': {
    primary: 'from-stone-800 via-orange-200 to-stone-300',
    secondary: 'from-amber-50 via-orange-100 to-stone-200',
  },
  'royal-heirloom-set': {
    primary: 'from-stone-900 via-amber-600 to-rose-200',
    secondary: 'from-stone-100 via-amber-200 to-rose-100',
  },
}

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function useStoredCart() {
  const [items, setItems] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  return [items, setItems]
}

function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useStoredCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  const addToCart = (product, quantity = 1, variant = 'Gold Tone') => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          variant,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      setCartItems((current) =>
        current.filter((item) => !(item.id === id && item.variant === variant)),
      )
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (id, variant) => {
    setCartItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )
  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )
  const isHome = location.pathname === '/'
  const transparentHeader = isHome && !hasScrolled && !menuOpen

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  return (
    <div className="min-h-screen bg-velmora-parchment text-velmora-ink">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparentHeader
            ? 'bg-transparent text-[#faf4ec]'
            : 'border-b border-velmora-linen/70 bg-velmora-parchment/95 text-velmora-ink shadow-soft backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 md:min-w-[170px]">
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <Link to="/" className="font-display text-3xl tracking-[0.28em] sm:text-[2.2rem]">
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ['Shop', '/shop'],
              ['Collections', '/#collections'],
              ['About', '/#about'],
              ['Journal', '/#journal'],
            ].map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className="text-xs uppercase tracking-nav transition-opacity duration-300 hover:opacity-70"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:min-w-[170px] md:justify-end">
            <button
              type="button"
              onClick={() => navigate('/shop')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition duration-300 hover:bg-current/10"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition duration-300 hover:bg-current/10"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span
                className={`absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold ${
                  transparentHeader
                    ? 'bg-velmora-champagne text-velmora-ink'
                    : 'bg-velmora-ink text-velmora-parchment'
                }`}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-current/10 bg-velmora-parchment px-4 py-4 text-velmora-ink md:hidden">
            <nav className="flex flex-col gap-4">
              {[
                ['Shop', '/shop'],
                ['Collections', '/#collections'],
                ['About', '/#about'],
                ['Journal', '/#journal'],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="text-sm uppercase tracking-nav"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/products/:productId" element={<ProductPage onAddToCart={addToCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#f9f3eb] shadow-soft transition-transform duration-500 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">Your Cart</p>
            <h2 className="font-display text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-linen"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-linen/70 text-velmora-ink">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl text-velmora-ink">Your bag is empty</h3>
              <p className="text-sm leading-7 text-velmora-mist">
                Add a few polished staples and your order will appear here.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="rounded-full bg-velmora-ink px-6 py-3 text-xs uppercase tracking-[0.28em] text-velmora-parchment"
            >
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {cartItems.map((item) => {
                const product = products.find((entry) => entry.id === item.id)
                return (
                  <article
                    key={`${item.id}-${item.variant}`}
                    className="grid grid-cols-[84px,1fr] gap-4 rounded-[1.5rem] border border-velmora-linen bg-white/50 p-4"
                  >
                    <div className="overflow-hidden rounded-[1.2rem]">
                      <VisualImage product={product} variant="secondary" className="aspect-[4/5]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl uppercase tracking-[0.16em] text-velmora-ink">
                            {item.name}
                          </h3>
                          <p className="text-xs uppercase tracking-[0.24em] text-velmora-mist">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-velmora-mist transition-colors hover:text-velmora-ink"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-velmora-linen bg-white">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="inline-flex h-9 w-9 items-center justify-center text-velmora-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="inline-flex h-9 w-9 items-center justify-center text-velmora-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-velmora-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="border-t border-velmora-linen bg-[#f4ebdf] px-5 py-5 sm:px-6">
              <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.22em] text-velmora-mist">
                <span>Subtotal</span>
                <span className="text-base font-medium text-velmora-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs uppercase tracking-[0.28em] text-velmora-ink transition duration-300 hover:bg-velmora-bronze hover:text-white"
              >
                Secure Checkout Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

function HomePage({ onAddToCart }) {
  useEffect(() => {
    document.title = 'Velmora Fine Jewelry'
  }, [])

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(214,180,138,0.35),_transparent_30%),linear-gradient(135deg,_#2a211d_0%,_#3b322d_45%,_#6a5137_100%)]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="absolute -right-24 top-28 hidden h-80 w-80 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm md:block" />
        <div className="absolute right-20 top-40 hidden h-36 w-36 rounded-full border border-white/15 bg-white/5 md:block" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-end gap-10 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[1.1fr,0.9fr] md:pb-20 lg:px-10">
          <div className="max-w-2xl space-y-6 text-[#faf4ec]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#dfc8ab]">Velmora Fine Jewelry</p>
            <h1 className="font-display text-6xl leading-[0.88] sm:text-7xl md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#f1e4d4] sm:text-lg">
              Quietly luxurious demi-fine gold jewelry for gifting, self-purchase,
              and everyday polish that never feels overdone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-velmora-champagne px-7 py-4 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink transition duration-300 hover:bg-velmora-bronze hover:text-white"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.28em] text-[#f8f2ea] transition duration-300 hover:bg-white/10"
              >
                Discover the Story
              </Link>
            </div>
          </div>
          <div className="relative hidden items-end justify-end md:flex">
            <div className="relative w-full max-w-[28rem] rounded-[2.6rem] border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur-sm">
              <div className="aspect-[4/5] rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,_rgba(255,248,235,0.95),_transparent_18%),radial-gradient(circle_at_70%_55%,_rgba(214,180,138,0.95),_transparent_22%),linear-gradient(160deg,_rgba(251,244,236,0.95),_rgba(155,118,78,0.85))]" />
              <div className="absolute -left-8 bottom-10 max-w-[13rem] rounded-[1.75rem] border border-white/15 bg-[#f6ede2]/90 p-5 shadow-card backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-mist">Editorial Note</p>
                <p className="mt-2 font-display text-3xl leading-none text-velmora-ink">
                  Warm gold finishes for the modern jewelry wardrobe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-linen bg-[#f2e8dc]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-velmora-ink sm:px-6 lg:px-10">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="hidden h-[1px] w-8 bg-velmora-linen sm:block" />
            </div>
          ))}
        </div>
      </section>

      <SectionBlock
        id="collections"
        eyebrow="Bestsellers"
        title="The pieces our customers return to"
        description="Polished staples and giftable favorites with refined finishes, soft sparkle, and an everyday-luxury feel."
      >
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </SectionBlock>

      <section className="border-y border-velmora-linen bg-[#efe4d7] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionIntro
            eyebrow="On Her"
            title="A reel of warm, wearable moments"
            description="An editorial strip inspired by the ease of seeing Velmora pieces styled in motion."
          />
          <div className="no-scrollbar mt-10 flex gap-5 overflow-x-auto pb-2">
            {ugcMoments.map((moment, index) => (
              <article
                key={moment.id}
                className="group relative min-w-[220px] overflow-hidden rounded-[2rem] border border-white/40 shadow-card sm:min-w-[250px]"
              >
                <div
                  className={`aspect-[9/16] bg-gradient-to-b ${
                    index % 2 === 0
                      ? 'from-stone-900 via-amber-700 to-stone-300'
                      : 'from-stone-800 via-rose-200 to-amber-100'
                  } transition-transform duration-500 group-hover:scale-[1.03]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16 text-[#f7f0e7]">
                  <h3 className="font-display text-3xl leading-none">{moment.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#eadbca]">{moment.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionBlock
        eyebrow="Shop by Category"
        title="Choose your signature silhouette"
        description="Explore sculptural earrings, luminous necklaces, and polished huggies with a warm editorial finish."
        centered
      >
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to="/shop"
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-linen shadow-card"
            >
              <div
                className={`aspect-[4/5] bg-gradient-to-br ${
                  index === 0
                    ? 'from-stone-900 via-amber-700 to-stone-300'
                    : index === 1
                      ? 'from-stone-700 via-rose-200 to-amber-100'
                      : 'from-stone-950 via-yellow-700 to-stone-300'
                } transition-transform duration-500 group-hover:scale-[1.03]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-[#f8f0e7]">
                <h3 className="font-display text-4xl transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-7 text-[#e9dbc9]">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-10 lg:py-24"
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-velmora-linen shadow-soft">
          <div className="aspect-[4/5] bg-[radial-gradient(circle_at_30%_20%,_rgba(255,244,229,0.95),_transparent_18%),radial-gradient(circle_at_70%_50%,_rgba(214,180,138,0.9),_transparent_22%),linear-gradient(160deg,_#f3e7d8,_#8f6e4c)]" />
        </div>
        <div className="flex items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-mist">Our Story</p>
            <h2 className="font-display text-5xl leading-none text-velmora-ink md:text-6xl">
              Jewelry that feels intimate, luminous, and easy to live in.
            </h2>
            <p className="max-w-xl text-base leading-8 text-velmora-mist">
              Velmora was created for women who want premium-looking gold pieces
              without the formality of traditional fine jewelry. Every design balances
              sculptural softness, durable finishes, and gift-ready presentation.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-velmora-ink transition-colors duration-300 hover:text-velmora-bronze"
            >
              Our Story
              <span className="text-base">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-velmora-linen bg-[#f2e7da] shadow-card lg:grid-cols-[1.05fr,0.95fr]">
          <div className="min-h-[320px] bg-[linear-gradient(140deg,_#3b322d,_#8b6a4b_45%,_#e7ddd1)]" />
          <div className="space-y-6 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-mist">Journal</p>
            <h2 className="font-display text-5xl leading-none text-velmora-ink">
              How to build an everyday jewelry wardrobe.
            </h2>
            <p className="max-w-lg text-base leading-8 text-velmora-mist">
              An editorial guide to layering huggies, styling a single statement
              necklace, and choosing pieces that feel polished from morning coffee to
              dinner reservations.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-velmora-ink transition-colors duration-300 hover:text-velmora-bronze"
            >
              Read the Edit
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      <SectionBlock
        eyebrow="Testimonials"
        title="Loved for the details that feel considered"
        description="From first impressions to daily wear, customers come back for the finish, comfort, and gift-ready presentation."
        centered
      >
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-velmora-linen bg-white/55 p-8 shadow-card"
            >
              <Stars rating={5} reviews={0} />
              <p className="mt-6 font-display text-3xl leading-tight text-velmora-ink">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.32em] text-velmora-mist">
                {testimonial.author} · Verified Buyer {index + 1}
              </p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <section id="newsletter" className="px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <NewsletterCard />
      </section>
    </>
  )
}

function ShopPage({ onAddToCart }) {
  const [filters, setFilters] = useState({
    category: 'All',
    price: 'All',
    material: 'All',
    sort: filterOptions.sort[0],
  })

  useEffect(() => {
    document.title = 'Shop | Velmora Fine Jewelry'
  }, [])

  const filteredProducts = useMemo(() => {
    const visible = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      const priceMatch =
        filters.price === 'All' ||
        (filters.price === 'Under $50' && product.price < 50) ||
        (filters.price === '$50-$80' && product.price >= 50 && product.price <= 80) ||
        (filters.price === '$80+' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    const sorted = [...visible]
    if (filters.sort === 'Price: Low to High') sorted.sort((a, b) => a.price - b.price)
    if (filters.sort === 'Price: High to Low') sorted.sort((a, b) => b.price - a.price)
    if (filters.sort === 'Top Rated') sorted.sort((a, b) => b.rating - a.rating)
    return sorted
  }, [filters])

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.5rem] border border-velmora-linen bg-[#efe4d8] px-6 py-12 shadow-card sm:px-10 lg:px-12 lg:py-14">
          <SectionIntro
            eyebrow="Collection"
            title="A considered edit of demi-fine favorites"
            description="From sculptural gold huggies to gift-ready sets, shop the Velmora collection with filters designed for quick, thoughtful browsing."
          />
        </section>

        <section className="grid gap-8 lg:grid-cols-[320px,1fr] lg:items-start">
          <aside className="space-y-8 rounded-[2rem] border border-velmora-linen bg-white/55 p-6 shadow-card lg:sticky lg:top-28">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-mist">Filters</p>
              <h2 className="mt-2 font-display text-4xl leading-none text-velmora-ink">
                Refine the edit
              </h2>
            </div>

            {[
              ['category', filterOptions.category],
              ['price', filterOptions.price],
              ['material', filterOptions.material],
            ].map(([group, options]) => (
              <div key={group} className="space-y-3 border-t border-velmora-linen pt-5">
                <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-ink">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFilters((current) => ({ ...current, [group]: option }))}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-300 ${
                        filters[group] === option
                          ? 'border-velmora-ink bg-velmora-ink text-velmora-parchment'
                          : 'border-velmora-linen bg-[#faf5ef] text-velmora-ink hover:border-velmora-bronze hover:text-velmora-bronze'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-linen bg-white/55 px-5 py-5 shadow-card sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">
                {filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}
              </p>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-velmora-mist">
                Sort
                <select
                  value={filters.sort}
                  onChange={(event) =>
                    setFilters((current) => ({ ...current, sort: event.target.value }))
                  }
                  className="rounded-full border border-velmora-linen bg-[#fbf7f2] px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink focus:outline-none"
                >
                  {filterOptions.sort.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === productId)
  const relatedProducts = useMemo(() => getRelatedProducts(productId), [productId])
  const [selectedVariant, setSelectedVariant] = useState(product?.colors[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('primary')
  const [openSection, setOpenSection] = useState('Description')

  useEffect(() => {
    document.title = product ? `${product.name} | Velmora` : 'Velmora Fine Jewelry'
  }, [product])

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.colors[0])
      setQuantity(1)
      setSelectedImage('primary')
      setOpenSection('Description')
    }
  }, [product])

  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 pt-28 text-center sm:px-6 lg:px-10">
        <div className="max-w-xl space-y-5 rounded-[2rem] border border-velmora-linen bg-white/55 p-10 shadow-card">
          <p className="text-xs uppercase tracking-[0.34em] text-velmora-mist">Not Found</p>
          <h1 className="font-display text-5xl text-velmora-ink">
            This piece is no longer in the current edit.
          </h1>
          <p className="text-base leading-8 text-velmora-mist">
            Explore the latest collection to find another polished favorite.
          </p>
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="rounded-full bg-velmora-ink px-6 py-3 text-xs uppercase tracking-[0.28em] text-velmora-parchment"
          >
            Return to Shop
          </button>
        </div>
      </div>
    )
  }

  const accordionItems = [
    ['Description', product.description],
    ['Materials & Care', product.materials],
    ['Shipping & Returns', product.shipping],
  ]

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-14">
        <div className="text-xs uppercase tracking-[0.3em] text-velmora-mist">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2.25rem] border border-velmora-linen bg-[#f5ecdf] shadow-soft">
              <VisualImage product={product} variant={selectedImage} className="aspect-[4/5]" detailed />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['primary', 'secondary', 'detail'].map((imageKey) => (
                <button
                  key={imageKey}
                  type="button"
                  onClick={() => setSelectedImage(imageKey)}
                  className={`overflow-hidden rounded-[1.4rem] border bg-white/50 p-1 transition duration-300 ${
                    selectedImage === imageKey
                      ? 'border-velmora-ink shadow-card'
                      : 'border-velmora-linen hover:border-velmora-bronze'
                  }`}
                >
                  <VisualImage product={product} variant={imageKey} className="aspect-square rounded-[1rem]" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-7">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-mist">
                {product.category} · {product.collection}
              </p>
              <h1 className="font-display text-5xl uppercase tracking-product text-velmora-ink md:text-6xl">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-medium text-velmora-ink">{formatPrice(product.price)}</p>
                <Stars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="max-w-xl text-base leading-8 text-velmora-mist">
                {product.shortDescription}
              </p>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-velmora-linen bg-white/55 p-6 shadow-card">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">Finish</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedVariant(color)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition duration-300 ${
                        selectedVariant === color
                          ? 'border-velmora-ink bg-velmora-ink text-velmora-parchment'
                          : 'border-velmora-linen bg-[#fbf7f2] text-velmora-ink hover:border-velmora-bronze hover:text-velmora-bronze'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-velmora-linen bg-[#fbf7f2]">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="inline-flex h-12 w-12 items-center justify-center text-velmora-ink"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-velmora-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="inline-flex h-12 w-12 items-center justify-center text-velmora-ink"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onAddToCart(product, quantity, selectedVariant)}
                className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink transition duration-300 hover:bg-velmora-bronze hover:text-white"
              >
                Add to Cart
              </button>
            </div>

            <div className="rounded-[2rem] border border-velmora-linen bg-white/50">
              {accordionItems.map(([title, content], index) => {
                const open = openSection === title
                return (
                  <div key={title} className={index === 0 ? '' : 'border-t border-velmora-linen'}>
                    <button
                      type="button"
                      onClick={() => setOpenSection(open ? '' : title)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="text-xs uppercase tracking-[0.3em] text-velmora-ink">
                        {title}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-velmora-mist transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {open ? (
                      <div className="px-6 pb-6 text-sm leading-7 text-velmora-mist">{content}</div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">You May Also Like</p>
              <h2 className="font-display text-5xl leading-none text-velmora-ink">More from the edit</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-[0.3em] text-velmora-ink">
              View All
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velmora-linen/80 bg-[#fbf7f2] shadow-card transition-transform duration-500 hover:-translate-y-1">
      <div className={`relative overflow-hidden ${compact ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}>
        <Link to={`/products/${product.id}`} aria-label={product.name}>
          <VisualImage product={product} variant="primary" className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" />
          <VisualImage product={product} variant="secondary" className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>
        <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full border border-white/40 bg-[#f6f0e8]/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-velmora-ink backdrop-blur-sm">
            {product.badge}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product, 1, product.colors[0])}
          className="absolute inset-x-4 bottom-4 rounded-full bg-velmora-ink px-4 py-3 text-xs font-medium uppercase tracking-[0.26em] text-velmora-parchment opacity-100 transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-5 md:px-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-velmora-mist">{product.category}</p>
        <div className="space-y-2">
          <Link to={`/products/${product.id}`}>
            <h3 className="font-display text-2xl uppercase tracking-product text-velmora-ink transition-colors duration-300 group-hover:text-velmora-bronze">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm leading-7 text-velmora-mist">{product.shortDescription}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-velmora-linen/80 pt-4">
          <div>
            <p className="text-lg font-medium text-velmora-ink">{formatPrice(product.price)}</p>
            <p className="text-xs uppercase tracking-[0.24em] text-velmora-mist">{product.material}</p>
          </div>
          <Stars rating={product.rating} reviews={product.reviews} vertical />
        </div>
      </div>
    </article>
  )
}

function VisualImage({ product, variant = 'primary', className = '', detailed = false }) {
  const theme = visualThemes[product.id] ?? {
    primary: 'from-stone-900 via-amber-700 to-stone-300',
    secondary: 'from-stone-100 via-amber-200 to-stone-300',
  }
  const gradient =
    variant === 'detail' ? 'from-[#f4eadf] via-[#d8b38b] to-[#7b5b41]' : theme[variant] ?? theme.primary
  const textTone = variant === 'secondary' || variant === 'detail' ? 'text-velmora-ink' : 'text-[#fbf5ee]'
  const borderTone = variant === 'secondary' || variant === 'detail' ? 'border-black/10' : 'border-white/15'

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      <div className="absolute left-[12%] top-[12%] h-[24%] w-[24%] rounded-full border border-white/20 bg-white/10 blur-[1px]" />
      <div className="absolute bottom-[12%] right-[10%] h-[32%] w-[32%] rounded-full border border-white/15 bg-black/10 blur-[1px]" />
      <div className={`absolute inset-5 rounded-[1.8rem] border ${borderTone}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.55),_transparent_14%),radial-gradient(circle_at_65%_62%,_rgba(0,0,0,0.18),_transparent_22%)]" />
      <div className="absolute inset-x-6 bottom-6">
        <p className={`text-[11px] uppercase tracking-[0.3em] ${textTone} opacity-80`}>
          {variant === 'detail' ? 'Craft Detail' : product.category}
        </p>
        <p className={`mt-2 font-display text-3xl leading-none ${textTone}`}>
          {detailed ? product.name : product.subcategory}
        </p>
      </div>
    </div>
  )
}

function Stars({ rating, reviews, vertical = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-velmora-ink ${vertical ? 'flex-col items-end gap-1' : ''}`}
    >
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.75} />
        ))}
      </div>
      <span className="text-xs tracking-[0.18em] text-velmora-mist">
        {rating.toFixed(1)} {reviews ? `(${reviews})` : ''}
      </span>
    </div>
  )
}

function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-2xl space-y-3 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-velmora-mist">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none text-velmora-ink md:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-velmora-mist md:text-base">{description}</p>
    </div>
  )
}

function SectionBlock({ id, eyebrow, title, description, centered = false, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        description={description}
        centered={centered}
      />
      {children}
    </section>
  )
}

function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-champagne px-6 py-12 shadow-soft sm:px-10 lg:px-14 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.34em] text-velmora-bronze">Velmora Notes</p>
          <h2 className="font-display text-5xl leading-none text-velmora-ink md:text-6xl">
            Join for 10% off your first order
          </h2>
          <p className="max-w-xl text-base leading-8 text-velmora-cocoa">
            Receive early access to limited drops, styling inspiration, and thoughtful gifting edits.
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
            setEmail('')
          }}
          className="space-y-4"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-velmora-ink/15 bg-[#fff8f0] px-5 text-sm text-velmora-ink placeholder:text-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-bronze/40"
              required
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-velmora-ink px-8 text-xs font-medium uppercase tracking-[0.28em] text-velmora-parchment transition duration-300 hover:bg-velmora-bronze"
            >
              Join Now
            </button>
          </div>
          <p className="text-sm text-velmora-cocoa" role="status">
            {submitted
              ? 'Thank you. Your welcome offer is on the way.'
              : 'By subscribing you agree to receive occasional emails from Velmora.'}
          </p>
        </form>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-velmora-linen bg-velmora-cocoa text-[#f6ede3]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr,2fr] lg:px-10">
        <div className="space-y-5">
          <Link to="/" className="font-display text-3xl tracking-[0.3em] text-[#f8f0e7]">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-[#dccfbe]">
            Demi-fine gold jewelry designed for daily elegance, thoughtful gifting,
            and the quiet confidence of pieces you keep close.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-[#e6d5bf]">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {[
            ['Shop', ['All Jewelry', 'Earrings', 'Necklaces', 'Gift Sets']],
            ['Help', ['Shipping', 'Returns', 'Gift Cards', 'Contact']],
            ['Company', ['About Velmora', 'Journal', 'Materials', 'Care Guide']],
          ].map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#f2e7d7]">{title}</h3>
              <div className="flex flex-col gap-3 text-sm text-[#dccfbe]">
                {links.map((label) => (
                  <Link key={label} to="/shop" className="transition-colors hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-6 text-xs uppercase tracking-[0.24em] text-[#cdbca7] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2"><Instagram className="h-3.5 w-3.5" /> Instagram</span>
          <span className="inline-flex items-center gap-2"><PinIcon className="h-3.5 w-3.5" /> Pinterest</span>
          <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> Hello@Velmora.com</span>
        </div>
      </div>
    </footer>
  )
}

export default App
