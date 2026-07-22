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
  useSearchParams,
} from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CreditCard,
  Instagram,
  Menu,
  Minus,
  Music2,
  Plus,
  Search,
  ShoppingBag,
  Star,
  Trash2,
  X,
} from 'lucide-react'
import './App.css'

const trustPoints = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const products = [
  {
    slug: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    displayName: 'Vivid Aura Jewels',
    subtitle: 'Gold ear cuff with crystal accent',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      'A crystal-tipped ear cuff designed to catch candlelight, with an easy slip-on silhouette for elevated every day wear.',
    detail:
      'Sculpted to hug the ear with a polished, barely-there comfort fit, Vivid Aura layers beautifully with studs and huggies for a refined stack.',
    materialsCare:
      '18K gold plated brass with cubic zirconia accents. Nickel free and hypoallergenic. Keep dry, avoid lotions and perfumes, and store inside the Velmora pouch after wear.',
    shippingReturns:
      'Free worldwide shipping on orders over $75. Standard delivery in 4–8 business days. Easy 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: ['Editorial close-up', 'Ear styling', 'Gift presentation', 'Macro texture'],
    altGallery: ['After-dark sparkle', 'Soft profile angle'],
    accentLine: 'After-dark sparkle, made effortless.',
    tone: 'dark-gold',
  },
  {
    slug: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    displayName: 'Majestic Flora Nectar',
    subtitle: 'Multicolor floral crystal necklace',
    category: 'Necklaces',
    material: 'Gold Vermeil',
    price: 68,
    rating: 4.9,
    reviewCount: 208,
    description:
      'A fine floral crystal necklace with warm gold detailing and a light-catching palette designed for gifting and self-collecting alike.',
    detail:
      'The Majestic Flora Nectar necklace sits delicately at the collarbone, adding soft color and a feminine glow to knits, silk shirts, and occasion dressing.',
    materialsCare:
      'Gold vermeil over sterling silver with multicolor crystal accents. Wipe gently with a soft cloth and keep away from water, sprays, and humidity.',
    shippingReturns:
      'Complimentary gift-ready packaging, free worldwide shipping over $75, and 30-day returns for unworn items.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: ['Stone setting detail', 'Neck styling', 'Jewelry box reveal', 'Floral sparkle'],
    altGallery: ['Soft side profile', 'Color-rich shimmer'],
    accentLine: 'Soft color, polished restraint.',
    tone: 'blush-light',
  },
  {
    slug: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    displayName: 'Golden Sphere Huggies',
    subtitle: 'Chunky gold dome huggie earrings',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.7,
    reviewCount: 176,
    description:
      'A clean dome silhouette with a softly rounded profile, balancing statement shine with an everyday feel.',
    detail:
      'Golden Sphere Huggies are weighty in look yet comfortable on the ear, making them the pair you reach for from morning coffee through dinner plans.',
    materialsCare:
      '18K gold plated brass. Hypoallergenic post closure. Avoid abrasive surfaces and polish with a dry microfiber cloth.',
    shippingReturns:
      'Ships within 24 hours on weekdays. 30-day returns and exchanges available for unworn pieces.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: ['Rounded dome close-up', 'Stacked ear styling', 'Mirror tray scene', 'Polished curve'],
    altGallery: ['Profile styling shot', 'Everyday stack'],
    accentLine: 'Minimal, sculptural, endlessly wearable.',
    tone: 'soft-neutral',
  },
  {
    slug: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    displayName: 'Amber Lace Earrings',
    subtitle: 'Textured gold filigree drop earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.8,
    reviewCount: 89,
    description:
      'Delicate filigree detailing meets a softly elongated drop for a romantic finish that still feels modern.',
    detail:
      'Amber Lace is a refined occasion piece that stays versatile enough for dinners, celebrations, and elevated everyday styling.',
    materialsCare:
      'Gold vermeil over sterling silver with textured filigree work. Store flat and avoid direct contact with perfumes, water, and hair products.',
    shippingReturns:
      'Free gift packaging included. Returns accepted within 30 days for unworn items with all tags and packaging intact.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: ['Filigree detail', 'Movement on model', 'Boxed set styling', 'Texture macro'],
    altGallery: ['Warm portrait angle', 'Evening motion'],
    accentLine: 'Romantic texture with a polished finish.',
    tone: 'editorial-rose',
  },
  {
    slug: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    displayName: 'Royal Heirloom Set',
    subtitle: 'Gift-boxed earring + necklace set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviewCount: 63,
    description:
      'A coordinated gifting set with matching earrings and necklace, wrapped to feel thoughtful the moment it arrives.',
    detail:
      'Royal Heirloom brings together a balanced necklace and earring pairing that feels instantly polished, making it an effortless present or signature set.',
    materialsCare:
      '18K gold plated brass with crystal accents. Hypoallergenic finish. Store each piece in its pouch and avoid moisture to preserve shine.',
    shippingReturns:
      'Signature gift boxing included. Free worldwide shipping over $75 and 30-day returns on unworn pieces.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: ['Gift box reveal', 'Layered styling', 'Ribboned presentation', 'Crystal detail'],
    altGallery: ['Luxury unboxing angle', 'Wrapped in satin'],
    accentLine: 'Gift-ready glamour with Velmora ease.',
    tone: 'rich-stone',
  },
]

const ugcStories = [
  {
    id: 'ugc-everyday-polish',
    title: 'Everyday polish',
    description: 'Golden huggies layered with a soft knit and morning light.',
    tone: 'soft-neutral',
  },
  {
    id: 'ugc-gifted-glow',
    title: 'Gifted glow',
    description: 'Necklace sparkle framed by candlelit dinner styling.',
    tone: 'dark-gold',
  },
  {
    id: 'ugc-stack-the-shine',
    title: 'Stack the shine',
    description: 'Curated ear styling with cuffs, domes, and a clean side profile.',
    tone: 'editorial-rose',
  },
  {
    id: 'ugc-soft-celebration',
    title: 'Soft celebration',
    description: 'Warm gold drops styled with a silk collar and evening beauty look.',
    tone: 'rich-stone',
  },
]

const categoryTiles = [
  {
    label: 'Earrings',
    description: 'Sculptural shine for dinners, desk days, and every plan in between.',
    tone: 'dark-gold',
  },
  {
    label: 'Necklaces',
    description: 'Delicate layers and statement pendants with an effortless finish.',
    tone: 'blush-light',
  },
  {
    label: 'Huggies',
    description: 'The pair you keep on rotation for understated everyday luxury.',
    tone: 'soft-neutral',
  },
]

const testimonials = [
  {
    quote: 'Looks far more expensive than it is. The finish is beautiful and the packaging felt so considered.',
    name: 'Sofia R.',
  },
  {
    quote: 'I bought the huggies for myself and came back for gifts. Everything feels polished, lightweight, and easy to wear.',
    name: 'Maya L.',
  },
  {
    quote: 'My necklace arrived in the prettiest box and instantly became my everyday piece.',
    name: 'Elena K.',
  },
]

const footerLinks = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Stockists', 'Terms'],
}

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceRanges = ['All', 'Under $50', '$50 to $80', '$80+']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low']

const toneStyles = {
  'dark-gold': {
    frame: 'bg-gradient-to-br from-stone-950 via-stone-800 to-amber-200',
    chip: 'bg-stone-50/90 text-stone-800',
    copy: 'text-stone-50',
  },
  'blush-light': {
    frame: 'bg-gradient-to-br from-stone-100 via-rose-50 to-amber-100',
    chip: 'bg-white/90 text-stone-700',
    copy: 'text-stone-900',
  },
  'soft-neutral': {
    frame: 'bg-gradient-to-br from-stone-200 via-stone-50 to-amber-100',
    chip: 'bg-white/85 text-stone-700',
    copy: 'text-stone-900',
  },
  'editorial-rose': {
    frame: 'bg-gradient-to-br from-stone-950 via-rose-200 to-stone-50',
    chip: 'bg-stone-50/90 text-stone-700',
    copy: 'text-stone-900',
  },
  'rich-stone': {
    frame: 'bg-gradient-to-br from-stone-900 via-stone-700 to-stone-300',
    chip: 'bg-stone-50/90 text-stone-700',
    copy: 'text-stone-50',
  },
}

const formatMoney = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)

const getProductBySlug = (slug) => products.find((product) => product.slug === slug)

const matchesPrice = (product, range) => {
  if (range === 'Under $50') return product.price < 50
  if (range === '$50 to $80') return product.price >= 50 && product.price <= 80
  if (range === '$80+') return product.price > 80
  return true
}

function PreviewBridge() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document
          .getElementById(location.hash.replace('#', ''))
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  return null
}

function VisualPanel({ tone = 'soft-neutral', label, title, subtitle, ratio = 'aspect-[4/5]' }) {
  const style = toneStyles[tone]

  return (
    <div className={`relative overflow-hidden ${ratio} ${style.frame}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
      <div className="absolute -left-6 top-8 h-28 w-28 rounded-full border border-white/30 bg-amber-200/35 blur-sm" />
      <div className="absolute right-5 top-4 h-20 w-20 rounded-full border border-white/25 bg-stone-50/40 blur-md" />
      <div className="absolute bottom-8 left-7 h-32 w-24 rounded-t-full rounded-b-[3rem] border border-white/35 bg-white/10 backdrop-blur-sm" />
      <div className="absolute bottom-14 right-10 h-16 w-16 rounded-full border-4 border-amber-300/70" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        {label ? (
          <span className={`inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${style.chip}`}>
            {label}
          </span>
        ) : null}
        {title ? <p className={`mt-4 font-display text-3xl leading-none ${style.copy}`}>{title}</p> : null}
        {subtitle ? <p className={`mt-2 max-w-xs text-sm leading-6 ${style.copy} opacity-80`}>{subtitle}</p> : null}
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-medium uppercase tracking-[0.3em] ${light ? 'text-amber-500' : 'text-amber-700'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display mt-3 text-4xl leading-none sm:text-5xl ${light ? 'text-stone-50' : 'text-stone-950'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? 'text-stone-300' : 'text-stone-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

function RatingStars({ rating, reviewCount, light = false }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${light ? 'text-stone-200' : 'text-stone-600'}`}>
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
        ))}
      </div>
      <span>
        {rating.toFixed(1)}{reviewCount ? ` · ${reviewCount} reviews` : ''}
      </span>
    </div>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden bg-stone-100">
        <div className="transition duration-500 group-hover:opacity-0">
          <VisualPanel
            tone={product.tone}
            label={product.category}
            title={product.displayName}
            subtitle={product.gallery[0]}
          />
        </div>
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <VisualPanel
            tone={product.tone === 'soft-neutral' ? 'dark-gold' : product.tone}
            label={product.altGallery[0]}
            title={product.displayName}
            subtitle={product.altGallery[1]}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-[1.2rem] leading-none tracking-[0.2em] text-stone-950 sm:text-[1.4rem]">
              {product.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">{product.subtitle}</p>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-900">
            {formatMoney(product.price)}
          </p>
        </div>

        <div className="mt-4">
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <p className="mt-4 text-sm leading-6 text-stone-600">{product.accentLine}</p>

        <div className="mt-5 flex gap-3">
          <Link to={`/product/${product.slug}`} className="button-outline flex-1 text-center">
            View Details
          </Link>
          <button
            type="button"
            className="button-premium flex-1"
            onClick={() => onAddToCart(product, { variant: product.variants[0], quantity: 1 })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

function SiteNav({ cartCount, onCartOpen }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solid = !isHome || scrolled || menuOpen
  const navClass = solid
    ? 'border-b border-stone-200/80 bg-stone-50/95 text-stone-900 backdrop-blur'
    : 'bg-transparent text-stone-50'

  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/#collections' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
  ]

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${navClass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-full p-2 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="font-display text-3xl tracking-[0.24em]">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.22em] md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={solid ? 'text-stone-700 transition hover:text-stone-950' : 'text-stone-100 transition hover:text-white'}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" aria-label="Search" className="rounded-full p-2">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Open cart" className="relative rounded-full p-2" onClick={onCartOpen}>
              <ShoppingBag className="h-5 w-5" />
              {cartCount ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1 text-[10px] font-semibold text-stone-950">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] bg-stone-950/60 backdrop-blur-sm md:hidden">
          <div className="ml-auto flex h-full w-[84%] max-w-sm flex-col bg-stone-50 px-6 py-6 text-stone-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <span className="font-display text-2xl tracking-[0.24em]">VELMORA</span>
              <button type="button" className="rounded-full p-2" onClick={() => setMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-5 text-sm uppercase tracking-[0.22em] text-stone-700">
              {links.map((link) => (
                <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  )
}

function CartDrawer({ cartLines, isOpen, onClose, onQuantityChange, onRemove }) {
  const subtotal = cartLines.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  )

  return (
    <div className={`fixed inset-0 z-[70] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-stone-950/50 transition ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-700">Shopping Bag</p>
            <h2 className="font-display text-3xl text-stone-950">Your Cart</h2>
          </div>
          <button type="button" aria-label="Close cart" className="rounded-full p-2" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartLines.length ? (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {cartLines.map((line) => (
                <div key={`${line.slug}-${line.variant}`} className="rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="flex gap-4">
                    <div className="h-28 w-24 overflow-hidden rounded-[1.25rem]">
                      <VisualPanel tone={line.product.tone} label={line.product.category} title="" subtitle="" ratio="aspect-[3/4]" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-xl uppercase tracking-[0.18em] text-stone-950">
                            {line.product.name}
                          </p>
                          <p className="mt-1 text-sm text-stone-600">{line.product.subtitle}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-stone-500">
                            {line.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${line.product.displayName}`}
                          className="rounded-full p-2 text-stone-500 transition hover:text-stone-950"
                          onClick={() => onRemove(line.slug, line.variant)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 p-1">
                          <button
                            type="button"
                            className="rounded-full p-2 text-stone-700"
                            onClick={() => onQuantityChange(line.slug, line.variant, line.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-medium text-stone-900">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            className="rounded-full p-2 text-stone-700"
                            onClick={() => onQuantityChange(line.slug, line.variant, line.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-stone-900">
                          {formatMoney(line.product.price * line.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-200 bg-white px-5 py-5">
              <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em] text-stone-700">
                <span>Subtotal</span>
                <span className="text-stone-950">{formatMoney(subtotal)}</span>
              </div>
              <p className="mb-5 text-sm leading-6 text-stone-600">
                Shipping and taxes are calculated at checkout. Your pieces arrive gift-ready in signature Velmora packaging.
              </p>
              <Link to="/shop" className="button-premium w-full text-center" onClick={onClose}>
                Continue to Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 rounded-full border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-display text-3xl text-stone-950">Your cart is empty</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-stone-600">
              Discover warm gold essentials designed for gifting, layering, and everyday shine.
            </p>
            <Link to="/shop" className="button-outline mt-6" onClick={onClose}>
              Shop Bestsellers
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,2fr]">
          <div className="max-w-md">
            <Link to="/" className="font-display text-4xl tracking-[0.24em] text-stone-50">
              VELMORA
            </Link>
            <p className="mt-5 text-sm leading-7 text-stone-300">
              Demi-fine jewelry for everyday rituals, thoughtful gifting, and a quietly luminous wardrobe.
            </p>
            <div className="mt-8 flex items-center gap-3 text-stone-300">
              <span className="rounded-full border border-white/10 p-3"><Instagram className="h-4 w-4" /></span>
              <span className="rounded-full border border-white/10 p-3"><Music2 className="h-4 w-4" /></span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs uppercase tracking-[0.24em] text-stone-400">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-stone-200">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 p-2"><CreditCard className="h-4 w-4" /></span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage({ onAddToCart }) {
  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-stone-50">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-700" />
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <VisualPanel
            tone="dark-gold"
            label="Warm-lit close-up"
            title=""
            subtitle=""
            ratio="h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/20" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">Quiet luxury, every day</p>
            <h1 className="font-display mt-4 text-6xl leading-[0.92] text-stone-50 sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:text-lg">
              Warm gold essentials with an editorial finish — designed for self-purchase, thoughtful gifting, and the moments you wear on repeat.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="button-premium bg-amber-600 text-stone-950 hover:bg-amber-500">
                Shop the Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/#about" className="button-outline border-white/30 bg-white/5 text-stone-50 hover:border-amber-500 hover:text-amber-200">
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-center text-xs uppercase tracking-[0.24em] text-stone-700 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:px-6 lg:px-8">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center justify-center gap-3">
              {index ? <span className="hidden h-px w-8 bg-stone-300 sm:block" /> : null}
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Bestsellers"
            title="Modern heirlooms, chosen most"
            description="Five Velmora signatures designed to look elevated, wear effortlessly, and arrive gift-ready."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Seen on you"
            title="The Velmora reel"
            description="An editorial, scrollable strip inspired by the way our customers style their everyday gold."
          />
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2">
            {ugcStories.map((story) => (
              <article
                key={story.id}
                className="group relative min-w-[220px] max-w-[220px] snap-start overflow-hidden rounded-[2rem] bg-stone-950 text-stone-50 shadow-xl"
              >
                <VisualPanel
                  tone={story.tone}
                  label="Velmora worn"
                  title={story.title}
                  subtitle={story.description}
                  ratio="aspect-[9/16]"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="bg-stone-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Collections"
            title="Shop by category"
            description="Layering staples, sculptural statements, and giftable pieces made for daily rotation."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {categoryTiles.map((tile) => (
              <Link
                key={tile.label}
                to={`/shop?category=${encodeURIComponent(tile.label)}`}
                className="group relative overflow-hidden rounded-[2rem] bg-stone-950 text-stone-50 shadow-lg"
              >
                <VisualPanel tone={tile.tone} label={tile.label} title="" subtitle="" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-4xl text-stone-50">{tile.label}</p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                        {tile.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] shadow-xl">
            <VisualPanel
              tone="rich-stone"
              label="Editorial portrait"
              title=""
              subtitle=""
              ratio="aspect-[4/5]"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-700">Our world</p>
            <h2 className="font-display mt-3 text-5xl leading-none text-stone-950 sm:text-6xl">
              Jewelry that feels considered, not overdone
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
              Velmora was created for women who want the polish of fine jewelry with the ease of everyday dressing. We focus on warm gold finishes, balanced silhouettes, and pieces that feel personal from first wear to fiftieth.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
              From sculptural huggies to gift-ready sets, everything is designed to move between self-purchase and thoughtful gifting with a quietly luxurious sensibility.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center text-sm uppercase tracking-[0.22em] text-stone-900 transition hover:text-amber-700">
              Our Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 text-stone-50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Loved by customers"
            title="Quiet praise, worn on repeat"
            description="Thoughtful details, comfortable fit, and that just-right balance between premium and everyday."
            light
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <RatingStars rating={5} reviewCount={0} light />
                <p className="mt-5 text-base leading-8 text-stone-100">“{item.quote}”</p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-stone-300">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-amber-600 px-6 py-12 text-stone-950 shadow-xl sm:px-10 lg:px-14">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-900/80">Velmora insiders</p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-5xl leading-none text-stone-950 sm:text-6xl">
                  Join for 10% off your first order
                </h2>
                <p className="mt-4 text-base leading-7 text-stone-900/80">
                  Early access to launches, styling notes, and gifting moments worth knowing about.
                </p>
              </div>
              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-full border border-stone-900/15 bg-stone-50 px-5 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-950/20"
                />
                <button type="button" className="rounded-full bg-stone-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-stone-50 transition hover:bg-stone-800">
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ShopPage({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'All',
    material: 'All',
    priceRange: 'All',
    sort: 'Featured',
  })

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      category: searchParams.get('category') || current.category,
    }))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const next = products
      .filter((product) =>
        filters.category === 'All' ? true : product.category === filters.category,
      )
      .filter((product) =>
        filters.material === 'All' ? true : product.material === filters.material,
      )
      .filter((product) => matchesPrice(product, filters.priceRange))

    if (filters.sort === 'Price: Low to High') {
      return [...next].sort((a, b) => a.price - b.price)
    }

    if (filters.sort === 'Price: High to Low') {
      return [...next].sort((a, b) => b.price - a.price)
    }

    return next
  }, [filters])

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))

    if (key === 'category') {
      const params = new URLSearchParams(searchParams)
      if (value === 'All') {
        params.delete('category')
      } else {
        params.set('category', value)
      }
      setSearchParams(params)
    }
  }

  return (
    <div className="bg-stone-50 pb-20 pt-8 sm:pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-stone-950 px-6 py-12 text-stone-50 sm:px-10 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500">The collection</p>
          <h1 className="font-display mt-4 text-5xl leading-none text-stone-50 sm:text-6xl lg:text-7xl">
            Demi-fine jewelry for daily rituals
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-200 sm:text-lg">
            Discover warm gold essentials across earrings, necklaces, huggies, and giftable sets — all designed for a premium feel at an accessible price.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Browse"
            title="Shop Velmora"
            description="Refine by category, material, and price to find the pieces you will wear often."
          />
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-stone-500">
              Sort by
            </label>
            <select
              value={filters.sort}
              className="h-12 rounded-full border border-stone-200 bg-white px-5 text-sm text-stone-900 focus:outline-none"
              onChange={(event) => updateFilter('sort', event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
          <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Category</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${filters.category === value ? 'border-stone-950 bg-stone-950 text-stone-50' : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'}`}
                    onClick={() => updateFilter('category', value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-stone-200 pt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Price</p>
              <div className="mt-4 space-y-3 text-sm text-stone-700">
                {priceRanges.map((value) => (
                  <label key={value} className="flex items-center gap-3">
                    <input
                      checked={filters.priceRange === value}
                      className="h-4 w-4 accent-stone-950"
                      name="price"
                      type="radio"
                      onChange={() => updateFilter('priceRange', value)}
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-stone-200 pt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Material</p>
              <div className="mt-4 space-y-3 text-sm text-stone-700">
                {materials.map((value) => (
                  <label key={value} className="flex items-center gap-3">
                    <input
                      checked={filters.material === value}
                      className="h-4 w-4 accent-stone-950"
                      name="material"
                      type="radio"
                      onChange={() => updateFilter('material', value)}
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.24em] text-stone-500">
              {filteredProducts.length} styles found
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openItem, setOpenItem] = useState('Description')

  useEffect(() => {
    if (!product) return
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setSelectedImage(0)
    setOpenItem('Description')
  }, [product])

  if (!product) {
    return <Navigate to="/" replace />
  }

  const accordionItems = [
    { title: 'Description', content: product.detail },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 4)

  return (
    <div className="bg-stone-50">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[96px,1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {product.gallery.map((note, index) => (
                <button
                  key={note}
                  type="button"
                  className={`overflow-hidden rounded-[1.5rem] border bg-white ${selectedImage === index ? 'border-stone-950' : 'border-stone-200'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="h-24 w-20 overflow-hidden">
                    <VisualPanel tone={product.tone} label="" title="" subtitle="" ratio="aspect-[3/4]" />
                  </div>
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[2.5rem] bg-stone-100 lg:order-2">
              <VisualPanel
                tone={product.tone}
                label={product.category}
                title={product.displayName}
                subtitle={product.gallery[selectedImage]}
                ratio="aspect-[4/5]"
              />
            </div>
          </div>

          <div className="flex flex-col rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-700">Velmora Fine Jewelry</p>
            <h1 className="font-display mt-4 text-5xl leading-none text-stone-950 sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
              {product.description}
            </p>
            <div className="mt-5 flex flex-col gap-4 border-b border-stone-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-medium uppercase tracking-[0.18em] text-stone-950">
                {formatMoney(product.price)}
              </p>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Finish</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.2em] transition ${selectedVariant === variant ? 'border-stone-950 bg-stone-950 text-stone-50' : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-stone-200 bg-stone-50 p-1">
                <button
                  type="button"
                  className="rounded-full p-3 text-stone-700"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm font-medium text-stone-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="rounded-full p-3 text-stone-700"
                  onClick={() => setQuantity((current) => current + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="button-premium mt-8 w-full bg-amber-600 text-stone-950 hover:bg-amber-500"
              onClick={() => onAddToCart(product, { variant: selectedVariant, quantity })}
            >
              Add to Cart
            </button>

            <div className="mt-8">
              {accordionItems.map((item) => {
                const open = openItem === item.title
                return (
                  <div key={item.title} className="border-b border-stone-200 py-4">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpenItem(open ? '' : item.title)}
                    >
                      <span className="text-sm uppercase tracking-[0.22em] text-stone-900">{item.title}</span>
                      <ChevronDown className={`h-5 w-5 text-stone-500 transition ${open ? 'rotate-180' : ''}`} />
                    </button>
                    {open ? <p className="mt-4 text-sm leading-7 text-stone-600">{item.content}</p> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="You may also like"
            title="More pieces to layer in"
            description="Pair your selection with effortless favorites designed to stack, gift, and wear often."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Layout({ children, cartCount, cartLines, isCartOpen, onCartClose, onCartOpen, onQuantityChange, onRemoveFromCart }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <SiteNav cartCount={cartCount} onCartOpen={onCartOpen} />
      <CartDrawer
        cartLines={cartLines}
        isOpen={isCartOpen}
        onClose={onCartClose}
        onQuantityChange={onQuantityChange}
        onRemove={onRemoveFromCart}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartLines = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = getProductBySlug(item.slug)
          return product ? { ...item, product } : null
        })
        .filter(Boolean),
    [cartItems],
  )

  const addToCart = (product, selection = {}) => {
    const variant = selection.variant || product.variants[0]
    const quantity = selection.quantity || 1

    console.log('Velmora cart add', { product: product.slug, variant, quantity })

    setCartItems((current) => {
      const existing = current.find(
        (item) => item.slug === product.slug && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.slug === product.slug && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { slug: product.slug, variant, quantity }]
    })

    setCartOpen(true)
  }

  const onQuantityChange = (slug, variant, quantity) => {
    console.log('Velmora cart update', { slug, variant, quantity })

    setCartItems((current) =>
      current.flatMap((item) => {
        if (item.slug !== slug || item.variant !== variant) {
          return [item]
        }

        if (quantity <= 0) {
          return []
        }

        return [{ ...item, quantity }]
      }),
    )
  }

  const onRemoveFromCart = (slug, variant) => {
    console.log('Velmora cart remove', { slug, variant })
    setCartItems((current) =>
      current.filter(
        (item) => !(item.slug === slug && item.variant === variant),
      ),
    )
  }

  return (
    <Layout
      cartCount={cartCount}
      cartLines={cartLines}
      isCartOpen={cartOpen}
      onCartClose={() => setCartOpen(false)}
      onCartOpen={() => setCartOpen(true)}
      onQuantityChange={onQuantityChange}
      onRemoveFromCart={onRemoveFromCart}
    >
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

function App() {
  useEffect(() => {
    document.title = 'Velmora Fine Jewelry'
  }, [])

  return (
    <BrowserRouter>
      <PreviewBridge />
      <AppShell />
    </BrowserRouter>
  )
}

export default App
