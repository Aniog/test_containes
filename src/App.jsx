import { ImageHelper } from '@strikingly/sdk'
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Globe,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  X,
} from 'lucide-react'
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import strkImgConfig from './strk-img-config.json'
import './App.css'

const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.8,
    reviewCount: 128,
    description:
      'A softly sculpted ear cuff finished with a crystal glint for an effortless statement that still feels refined.',
    details:
      'Designed to hug the ear with a graceful profile, Vivid Aura Jewels balances everyday ease with evening polish.',
    care:
      '18K gold-plated brass, nickel-free posts, cubic zirconia accents. Keep dry between wears and store in the pouch provided.',
    shipping:
      'Free worldwide shipping on orders over $75. Dispatches in 1–2 business days with tracked delivery and 30-day returns.',
    imageId: 'velmora-vivid-primary-a18f3d',
    hoverImageId: 'velmora-vivid-hover-b27c4e',
    gallery: [
      {
        id: 'vivid-gallery-1',
        imgId: 'velmora-vivid-gallery-1-c39d5f',
        titleId: 'vivid-gallery-1-title',
        descId: 'vivid-gallery-1-desc',
        title: 'Vivid Aura Jewels',
        description: 'Warm-lit close-up of a crystal gold ear cuff on a model profile',
      },
      {
        id: 'vivid-gallery-2',
        imgId: 'velmora-vivid-gallery-2-d40e6a',
        titleId: 'vivid-gallery-2-title',
        descId: 'vivid-gallery-2-desc',
        title: 'Cuff Detail',
        description: 'Macro editorial jewelry detail showing polished gold with crystal accent',
      },
      {
        id: 'vivid-gallery-3',
        imgId: 'velmora-vivid-gallery-3-e51f7b',
        titleId: 'vivid-gallery-3-title',
        descId: 'vivid-gallery-3-desc',
        title: 'Styled Portrait',
        description: 'Minimal styling portrait with gold ear cuff and neutral knitwear',
      },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Gold Vermeil',
    price: 68,
    rating: 4.9,
    reviewCount: 94,
    description:
      'A luminous floral crystal necklace that catches the light with a painterly mix of warm jewel tones.',
    details:
      'This necklace layers beautifully over bare skin or silk, giving a subtle heirloom feel without ever feeling formal.',
    care:
      'Gold vermeil over sterling silver with multicolor crystals. Avoid perfume contact and wipe gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on orders over $75. Arrives gift-ready in a signature Velmora keepsake box.',
    imageId: 'velmora-flora-primary-f62a8c',
    hoverImageId: 'velmora-flora-hover-g73b9d',
    gallery: [
      {
        id: 'flora-gallery-1',
        imgId: 'velmora-flora-gallery-1-h84c0e',
        titleId: 'flora-gallery-1-title',
        descId: 'flora-gallery-1-desc',
        title: 'Majestic Flora Nectar',
        description: 'Warm editorial portrait featuring a floral crystal gold necklace',
      },
      {
        id: 'flora-gallery-2',
        imgId: 'velmora-flora-gallery-2-i95d1f',
        titleId: 'flora-gallery-2-title',
        descId: 'flora-gallery-2-desc',
        title: 'Pendant Close-Up',
        description: 'Detailed crystal cluster pendant resting on soft neutral fabric',
      },
      {
        id: 'flora-gallery-3',
        imgId: 'velmora-flora-gallery-3-j06e2a',
        titleId: 'flora-gallery-3-title',
        descId: 'flora-gallery-3-desc',
        title: 'Layered Styling',
        description: 'Necklace styled with open neckline and golden hour light',
      },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.7,
    reviewCount: 163,
    description:
      'Chunky dome huggies with a sculptural shine that elevate a simple look in seconds.',
    details:
      'A best-selling pair for gifting and daily wear, designed with a softly rounded silhouette and comfortable snap closure.',
    care:
      '18K gold-plated brass, hypoallergenic posts. Store away from moisture and polish lightly after wear.',
    shipping:
      'Free worldwide shipping on orders over $75. Easy 30-day returns and exchanges.',
    imageId: 'velmora-sphere-primary-k17f3b',
    hoverImageId: 'velmora-sphere-hover-l28g4c',
    gallery: [
      {
        id: 'sphere-gallery-1',
        imgId: 'velmora-sphere-gallery-1-m39h5d',
        titleId: 'sphere-gallery-1-title',
        descId: 'sphere-gallery-1-desc',
        title: 'Golden Sphere Huggies',
        description: 'Close-up of chunky gold dome huggie earrings on an ear stack',
      },
      {
        id: 'sphere-gallery-2',
        imgId: 'velmora-sphere-gallery-2-n40i6e',
        titleId: 'sphere-gallery-2-title',
        descId: 'sphere-gallery-2-desc',
        title: 'Polished Dome Detail',
        description: 'Reflective polished gold huggie earrings on a dark neutral surface',
      },
      {
        id: 'sphere-gallery-3',
        imgId: 'velmora-sphere-gallery-3-o51j7f',
        titleId: 'sphere-gallery-3-title',
        descId: 'sphere-gallery-3-desc',
        title: 'Everyday Styling',
        description: 'Editorial portrait with understated gold huggies and soft knitwear',
      },
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.8,
    reviewCount: 71,
    description:
      'Textured filigree drops with a delicate lace-like finish that feel romantic and modern at once.',
    details:
      'Lightweight yet striking, Amber Lace Earrings frame the face beautifully and pair effortlessly with both tailoring and occasionwear.',
    care:
      'Gold vermeil with secure butterfly backs. Remove before showering and store flat to preserve the finish.',
    shipping:
      'Ships in 1–2 business days with tracked delivery and signature gift packaging.',
    imageId: 'velmora-amber-primary-p62k8g',
    hoverImageId: 'velmora-amber-hover-q73l9h',
    gallery: [
      {
        id: 'amber-gallery-1',
        imgId: 'velmora-amber-gallery-1-r84m0i',
        titleId: 'amber-gallery-1-title',
        descId: 'amber-gallery-1-desc',
        title: 'Amber Lace Earrings',
        description: 'Warm portrait featuring textured gold filigree drop earrings',
      },
      {
        id: 'amber-gallery-2',
        imgId: 'velmora-amber-gallery-2-s95n1j',
        titleId: 'amber-gallery-2-title',
        descId: 'amber-gallery-2-desc',
        title: 'Filigree Texture',
        description: 'Macro jewelry shot highlighting intricate gold lace texture',
      },
      {
        id: 'amber-gallery-3',
        imgId: 'velmora-amber-gallery-3-t06o2k',
        titleId: 'amber-gallery-3-title',
        descId: 'amber-gallery-3-desc',
        title: 'Evening Styling',
        description: 'Refined evening look with gold drop earrings and dark satin',
      },
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviewCount: 56,
    description:
      'A gift-boxed earring and necklace pairing curated to feel thoughtful, polished, and ready to treasure.',
    details:
      'Designed as an effortless gifting solution, this set pairs a delicate necklace with matching earrings in signature Velmora packaging.',
    care:
      '18K gold-plated brass set with protective anti-tarnish coating. Keep in the gift box between wears.',
    shipping:
      'Complimentary gift packaging included. Free worldwide shipping and 30-day returns.',
    imageId: 'velmora-heirloom-primary-u17p3l',
    hoverImageId: 'velmora-heirloom-hover-v28q4m',
    gallery: [
      {
        id: 'heirloom-gallery-1',
        imgId: 'velmora-heirloom-gallery-1-w39r5n',
        titleId: 'heirloom-gallery-1-title',
        descId: 'heirloom-gallery-1-desc',
        title: 'Royal Heirloom Set',
        description: 'Gift-boxed gold jewelry set arranged in a premium keepsake box',
      },
      {
        id: 'heirloom-gallery-2',
        imgId: 'velmora-heirloom-gallery-2-x40s6o',
        titleId: 'heirloom-gallery-2-title',
        descId: 'heirloom-gallery-2-desc',
        title: 'Gift Presentation',
        description: 'Luxury flatlay of ribboned jewelry gift box with warm neutral styling',
      },
      {
        id: 'heirloom-gallery-3',
        imgId: 'velmora-heirloom-gallery-3-y51t7p',
        titleId: 'heirloom-gallery-3-title',
        descId: 'heirloom-gallery-3-desc',
        title: 'Set Styled On Model',
        description: 'Editorial portrait showing matching gold necklace and earrings together',
      },
    ],
  },
]

const ugcMoments = [
  {
    id: 'ugc-soft-stack',
    imgId: 'velmora-ugc-soft-stack-a12b3c',
    titleId: 'ugc-soft-stack-title',
    captionId: 'ugc-soft-stack-caption',
    title: 'Soft Stack',
    caption: 'Morning light, barely-there shimmer.',
  },
  {
    id: 'ugc-golden-hour',
    imgId: 'velmora-ugc-golden-hour-b23c4d',
    titleId: 'ugc-golden-hour-title',
    captionId: 'ugc-golden-hour-caption',
    title: 'Golden Hour',
    caption: 'The necklace you reach for without thinking.',
  },
  {
    id: 'ugc-ear-party',
    imgId: 'velmora-ugc-ear-party-c34d5e',
    titleId: 'ugc-ear-party-title',
    captionId: 'ugc-ear-party-caption',
    title: 'Ear Party',
    caption: 'Polished huggies styled with quiet confidence.',
  },
  {
    id: 'ugc-evening-gift',
    imgId: 'velmora-ugc-evening-gift-d45e6f',
    titleId: 'ugc-evening-gift-title',
    captionId: 'ugc-evening-gift-caption',
    title: 'Evening Gift',
    caption: 'Wrapped to delight, ready to keep.',
  },
]

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    blurb: 'Everyday studs, drops, and statement silhouettes.',
    imgId: 'velmora-category-earrings-e56f7g',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    blurb: 'Layering essentials and luminous focal pieces.',
    imgId: 'velmora-category-necklaces-f67g8h',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    blurb: 'Sculptural shapes for polished daily wear.',
    imgId: 'velmora-category-huggies-g78h9i',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
  },
]

const testimonials = [
  {
    id: 'review-1',
    quote: 'The finish looks far more expensive than the price. I wear my huggies almost every day.',
    author: 'Maya R.',
  },
  {
    id: 'review-2',
    quote: 'Beautifully packaged and genuinely gift-worthy. My sister thought it was designer.',
    author: 'Elena T.',
  },
  {
    id: 'review-3',
    quote: 'Quietly elegant pieces that make getting dressed feel complete.',
    author: 'Sofia L.',
  },
]

const trustPoints = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const categories = ['Earrings', 'Necklaces', 'Huggies']
const materials = ['18K Gold Plated', 'Gold Vermeil']
const variants = ['Gold Tone', 'Silver Tone']

const CartContext = createContext(null)

function useImageLoader(containerRef, dependencies = []) {
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [containerRef, ...dependencies])
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
          slug: product.slug,
          name: product.name,
          imageId: product.imageId,
          price: product.price,
          variant,
          category: product.category,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
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
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cartItems],
  )

  const value = {
    cartItems,
    cartCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    isSearchOpen,
    setIsSearchOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center'
          ? 'mx-auto max-w-2xl items-center text-center'
          : 'max-w-2xl items-start text-left'
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="space-y-3">
        <h2 className="serif-title text-4xl leading-none sm:text-5xl">{title}</h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-velmora-umber sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

function StarRating({ rating, reviewCount, dark = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        dark ? 'text-velmora-pearl' : 'text-velmora-umber'
      }`}
    >
      <div className="flex items-center gap-1 text-velmora-bronze">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="font-medium text-current">{rating.toFixed(1)}</span>
      {reviewCount ? <span>({reviewCount})</span> : null}
    </div>
  )
}

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold uppercase tracking-[0.22em] text-velmora-espresso"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-umber transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden text-sm leading-7 text-velmora-umber">{children}</div>
      </div>
    </div>
  )
}

function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart()
  const titleId = `${product.id}-card-title`
  const descId = `${product.id}-card-desc`
  const hoverId = `${product.id}-card-hover`

  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-velmora-sand bg-velmora-pearl text-velmora-espresso shadow-velmora-soft transition duration-500 hover:-translate-y-1 hover:shadow-velmora">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-t-[2rem] bg-velmora-mist">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={product.imageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            fetchpriority={priority ? 'high' : 'auto'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${hoverId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between gap-4 bg-gradient-to-t from-[#1e1816]/88 via-[#1e1816]/25 to-transparent px-5 pb-5 pt-12 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl">
              Quick add
            </span>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product, 1, 'Gold Tone')
              }}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-velmora-pearl/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-3">
          <p className="eyebrow">{product.category}</p>
          <div className="space-y-2">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="font-display text-2xl uppercase tracking-[0.2em] text-velmora-espresso transition group-hover:text-velmora-bronze"
              >
                {product.name}
              </h3>
            </Link>
            <p id={descId} className="text-sm leading-6 text-velmora-umber">
              {product.description}
            </p>
            <span id={hoverId} className="sr-only">
              Warm editorial alternate jewelry styling image on a model with refined gold tones
            </span>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-velmora-sand pt-4 text-sm text-velmora-umber">
          <span>{product.material}</span>
          <span className="font-semibold text-velmora-espresso">${product.price}</span>
        </div>
      </div>
    </article>
  )
}

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
            aria-label="Open search"
            onClick={() => setIsSearchOpen(true)}
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

function HomePage() {
  const containerRef = useRef(null)
  useImageLoader(containerRef)

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative isolate overflow-hidden bg-velmora-espresso text-velmora-pearl">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-a79c2d"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1816]/88 via-[#1e1816]/58 to-[#1e1816]/25" />
        <div className="section-shell relative flex min-h-[92vh] items-end py-28 pt-40 sm:pt-44 lg:min-h-screen lg:items-center">
          <div className="max-w-2xl space-y-8">
            <p className="eyebrow text-velmora-mist">Velmora Fine Jewelry</p>
            <div className="space-y-6">
              <h1
                id="hero-title"
                className="font-display text-6xl leading-[0.9] text-velmora-pearl sm:text-7xl lg:text-[6.75rem]"
              >
                Crafted to be Treasured
              </h1>
              <p
                id="hero-subtitle"
                className="max-w-xl text-base leading-8 text-[#f3e7dc] sm:text-lg"
              >
                Warm gold tones, luminous detailing, and gift-worthy finishing for the pieces you wear on repeat.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-velmora-bronze px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition duration-300 hover:bg-velmora-pearl hover:text-velmora-espresso"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <div className="border-y border-velmora-sand bg-velmora-pearl">
        <div className="section-shell grid gap-4 py-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <p
              key={point}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-umber"
            >
              {point}
            </p>
          ))}
        </div>
      </div>
      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our customers reach for first"
            description="A considered mix of polished huggies, luminous necklaces, and gift-ready sets designed to feel elevated every day."
          />
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze"
          >
            Shop all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </section>
      <section className="border-y border-velmora-sand bg-velmora-pearl py-20 sm:py-24">
        <div className="section-shell space-y-10">
          <SectionHeading
            eyebrow="Worn in real life"
            title="A polished reel of everyday sparkle"
            description="Inspired by the intimacy of an Instagram reels strip, these warm editorial moments show Velmora styled close and personal."
          />
          <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[250px] flex-1 overflow-hidden rounded-[2rem] bg-velmora-espresso sm:min-w-[280px]"
              >
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    alt={moment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    data-strk-img-id={moment.imgId}
                    data-strk-img={`[${moment.captionId}] [${moment.titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1e1816]/88 via-[#1e1816]/35 to-transparent px-5 pb-6 pt-16 text-velmora-pearl">
                  <h3 id={moment.titleId} className="font-display text-3xl">
                    {moment.title}
                  </h3>
                  <p id={moment.captionId} className="mt-2 text-sm leading-6 text-[#f3e7dc]">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Shop by category"
          title="Curate your own gold ritual"
          description="Browse Velmora by silhouette, whether you are layering necklaces, building an ear stack, or gifting a keepsake set."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.name}`}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt={tile.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={tile.imgId}
                  data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1816]/82 via-[#1e1816]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 px-6 pb-6 transition duration-500 group-hover:translate-y-0">
                <div>
                  <p id={tile.titleId} className="font-display text-4xl text-velmora-pearl">
                    {tile.name}
                  </p>
                  <p
                    id={tile.descId}
                    className="mt-2 max-w-xs text-sm leading-6 text-[#f3e7dc] opacity-0 transition duration-500 group-hover:opacity-100"
                  >
                    {tile.blurb}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-velmora-pearl transition group-hover:bg-velmora-pearl group-hover:text-velmora-espresso">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="our-story" className="bg-velmora-pearl py-20 sm:py-24 lg:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] bg-velmora-mist shadow-velmora">
            <div className="aspect-[4/5]">
              <img
                alt="Velmora brand story"
                className="h-full w-full object-cover"
                data-strk-img-id="velmora-story-image-c80d1e"
                data-strk-img="[story-body] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="eyebrow">About Velmora</p>
            <h2 id="story-title" className="font-display text-5xl leading-none text-velmora-espresso sm:text-6xl">
              Designed to feel intimate, polished, and enduring.
            </h2>
            <p id="story-body" className="max-w-xl text-base leading-8 text-velmora-umber">
              Velmora creates demi-fine gold jewelry for the quiet moments that still deserve beauty — the everyday uniform, the thoughtful gift, the finishing touch that turns routine into ritual.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="A few kind words from our community"
          description="Premium-but-accessible pieces that look elevated, wear comfortably, and arrive beautifully packaged."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="rounded-[2rem] border border-velmora-sand bg-velmora-pearl p-8 text-velmora-espresso shadow-velmora-soft"
            >
              <StarRating rating={5} />
              <p className="mt-6 font-display text-3xl leading-tight text-velmora-espresso">
                “{review.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-velmora-umber">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-shell pb-20 sm:pb-24 lg:pb-28">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-bronze px-6 py-10 text-velmora-pearl shadow-velmora sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow text-[#f6ede4]">Stay close</p>
              <h2 className="font-display text-5xl leading-none text-velmora-pearl sm:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-md text-sm leading-7 text-[#f7efe7]">
                Exclusive early access, gifting edits, and styling inspiration delivered with restraint.
              </p>
            </div>
            <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-umber" />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-white/25 bg-velmora-pearl px-12 py-4 text-sm text-velmora-espresso outline-none transition placeholder:text-velmora-umber focus:border-velmora-espresso"
                />
              </div>
              <button
                type="submit"
                className="rounded-full border border-white/25 bg-velmora-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-pearl hover:text-velmora-espresso"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef(null)
  useImageLoader(containerRef, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]
    if (selectedCategory !== 'All') {
      nextProducts = nextProducts.filter((product) => product.category === selectedCategory)
    }
    if (selectedMaterial !== 'All') {
      nextProducts = nextProducts.filter((product) => product.material === selectedMaterial)
    }
    if (selectedPrice === 'under-50') {
      nextProducts = nextProducts.filter((product) => product.price < 50)
    }
    if (selectedPrice === '50-80') {
      nextProducts = nextProducts.filter(
        (product) => product.price >= 50 && product.price <= 80,
      )
    }
    if (selectedPrice === '80-plus') {
      nextProducts = nextProducts.filter((product) => product.price > 80)
    }
    if (sortBy === 'price-low') nextProducts.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') nextProducts.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') nextProducts.sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-10 rounded-[2.5rem] border border-velmora-sand bg-velmora-pearl px-6 py-10 shadow-velmora lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
          <div className="space-y-5">
            <p className="eyebrow">Shop Velmora</p>
            <h1 className="font-display text-5xl leading-none text-velmora-espresso sm:text-6xl lg:text-7xl">
              A considered collection of demi-fine gold essentials.
            </h1>
            <p className="max-w-xl text-base leading-8 text-velmora-umber">
              Designed for daily wear, thoughtful gifting, and those polished finishing touches that feel quietly luxurious.
            </p>
          </div>
          <div className="rounded-[2rem] bg-velmora-mist p-6 text-velmora-espresso">
            <p className="eyebrow">Collection Notes</p>
            <p className="mt-4 text-sm leading-7 text-velmora-umber">
              Our jewelry is crafted to balance accessibility with elevated finish: warm gold plating, hypoallergenic details, and gift-ready packaging on every order.
            </p>
          </div>
        </div>
      </section>
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Collection"
            title="Find your signature pieces"
            description="Use the filters to narrow by silhouette, price point, or material."
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFilters((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-velmora-sand bg-velmora-pearl px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso shadow-velmora-soft transition hover:border-velmora-bronze hover:text-velmora-bronze lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <label className="relative inline-flex min-w-[220px] items-center rounded-full border border-velmora-sand bg-velmora-pearl shadow-velmora-soft">
              <span className="sr-only">Sort products</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full appearance-none rounded-full bg-transparent px-5 py-3 pr-10 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-velmora-umber" />
            </label>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="space-y-8 rounded-[2rem] border border-velmora-sand bg-velmora-pearl p-6 text-velmora-espresso shadow-velmora-soft">
              <div>
                <p className="eyebrow">Category</p>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                  {['All', ...categories].map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                        selectedCategory === category
                          ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl'
                          : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Price</p>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                  {[
                    ['All', 'All'],
                    ['under-50', 'Under $50'],
                    ['50-80', '$50–$80'],
                    ['80-plus', '$80+'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setSelectedPrice(value)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                        selectedPrice === value
                          ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl'
                          : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Material</p>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                  {['All', ...materials].map((material) => (
                    <button
                      key={material}
                      type="button"
                      onClick={() => setSelectedMaterial(material)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                        selectedMaterial === material
                          ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl'
                          : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-[1.75rem] border border-velmora-sand bg-velmora-pearl px-5 py-4 text-sm text-velmora-umber shadow-velmora-soft">
              <span>{filteredProducts.length} products</span>
              <span>Premium demi-fine pieces from $30–$120</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductPage() {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)
  const relatedProducts = products.filter((entry) => entry.slug !== slug).slice(0, 4)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  const { addToCart } = useCart()

  useImageLoader(containerRef, [selectedImage, selectedVariant])

  if (!product) {
    return (
      <div className="section-shell py-40 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-display text-5xl text-velmora-espresso">This piece is no longer available.</h1>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-velmora-bronze px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2.5rem] border border-velmora-sand bg-velmora-mist shadow-velmora">
              <div className="aspect-[4/5]">
                <img
                  alt={product.gallery[selectedImage].title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={product.gallery[selectedImage].imgId}
                  data-strk-img={`[${product.gallery[selectedImage].descId}] [${product.gallery[selectedImage].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[1.5rem] border bg-velmora-pearl transition ${
                    selectedImage === index
                      ? 'border-velmora-bronze shadow-velmora-soft'
                      : 'border-velmora-sand'
                  }`}
                >
                  <div className="aspect-[4/5]">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`${item.imgId}-thumb`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="sr-only">
              {product.gallery.map((item) => (
                <div key={item.id}>
                  <p id={item.titleId}>{item.title}</p>
                  <p id={item.descId}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-32">
            <div className="rounded-[2.5rem] border border-velmora-sand bg-velmora-pearl p-7 shadow-velmora sm:p-9">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.22em] text-velmora-espresso sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="mt-6 text-base leading-8 text-velmora-umber">{product.description}</p>
              <div className="mt-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso">
                  Variant
                </p>
                <div className="flex flex-wrap gap-3">
                  {variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                        selectedVariant === variant
                          ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl'
                          : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory p-1 text-velmora-espresso">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="rounded-full p-3 transition hover:bg-velmora-pearl"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="rounded-full p-3 transition hover:bg-velmora-pearl"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(product, quantity, selectedVariant)}
                  className="flex-1 rounded-full bg-velmora-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-espresso"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-10 border-t border-velmora-sand">
                <AccordionItem title="Description" defaultOpen>
                  <p>{product.details}</p>
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  <p>{product.care}</p>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <p>{product.shipping}</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <div>
          <p className="eyebrow">Related pieces</p>
          <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">
            You may also like
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

function AppShell() {
  const location = useLocation()
  const appRef = useRef(null)
  const { isCartOpen, isSearchOpen } = useCart()

  useEffect(() => {
    if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) return
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      const replace = Boolean(options.replace)
      if (replace) {
        window.history.replaceState({}, '', path)
      } else {
        window.history.pushState({}, '', path)
      }
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }
  }, [])

  useImageLoader(appRef, [location.pathname, location.search, location.hash, isCartOpen, isSearchOpen])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <SearchDrawer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
