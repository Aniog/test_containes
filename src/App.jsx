import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import './App.css'
import PreviewRouteBridge from '@/components/layout/PreviewRouteBridge'
import ProductCard from '@/components/shop/ProductCard'
import AccordionItem from '@/components/ui/AccordionItem'
import QuantitySelector from '@/components/ui/QuantitySelector'
import SectionIntro from '@/components/ui/SectionIntro'
import Stars from '@/components/ui/Stars'
import { CartContext } from '@/context/CartContext'
import {
  brandStory,
  categories,
  getProductById,
  getRelatedProducts,
  heroContent,
  materialOptions,
  priceRanges,
  products,
  sortOptions,
  testimonials,
  trustPoints,
  ugcReels,
} from '@/data/store'
import {
  formatPrice,
  getCartCount,
  getCartSubtotal,
  toSlug,
} from '@/lib/format'
import { PLACEHOLDER_IMAGE } from '@/lib/image'
import { useStrkImages } from '@/lib/useStrkImages'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const iconButtonClass =
  'relative flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-ivory transition-all duration-300 ease-luxe hover:border-line-dark hover:bg-velvet-soft/70 hover:text-gold-soft'

const navLinkClass = ({ isActive }) =>
  [
    'text-xs uppercase tracking-widest transition-colors duration-300',
    isActive ? 'text-gold-soft' : 'text-ivory hover:text-gold-soft',
  ].join(' ')

const SiteHeader = ({ cartCount, onOpenCart }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
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

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe',
        isTransparent
          ? 'bg-transparent'
          : 'border-b border-line-dark bg-velvet/95 shadow-card backdrop-blur-xl',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className={iconButtonClass}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl tracking-[0.35em] text-ivory sm:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className={iconButtonClass}
            onClick={() => navigate('/shop')}
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className={iconButtonClass}
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-velvet">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-line-dark bg-velvet/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

const SiteFooter = () => {
  const footerGroups = [
    {
      title: 'Shop',
      links: [
        { label: 'All Jewelry', to: '/shop' },
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & Returns', to: '/about' },
        { label: 'Product Care', to: '/about' },
        { label: 'Cart', to: '/shop' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', to: '/about' },
        { label: 'Journal', to: '/journal' },
        { label: 'Contact', to: '/about' },
      ],
    },
  ]

  const paymentMethods = ['Visa', 'Mastercard', 'AmEx', 'PayPal']
  const socials = ['Instagram', 'Pinterest', 'TikTok']

  return (
    <footer className="border-t border-line-dark bg-velvet-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-md">
            <Link to="/" className="font-serif text-3xl tracking-[0.35em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-7 text-mist sm:text-base">
              Premium demi-fine jewelry designed to move beautifully between gifting moments and your everyday uniform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-full border border-line-dark px-4 py-2 text-xs uppercase tracking-widest text-gold-soft"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs uppercase tracking-widest text-gold-soft">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-sm text-mist transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line-dark pt-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {socials.map((social) => (
              <a key={social} href="#" className="transition-colors duration-300 hover:text-gold-soft">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const CartDrawer = ({ isOpen, items, onClose, onUpdateQuantity, onRemoveItem }) => {
  const containerRef = useRef(null)
  const fingerprint = items
    .map((item) => `${item.id}-${item.variant}-${item.quantity}`)
    .join('|')

  useStrkImages(containerRef, [isOpen, fingerprint])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const subtotal = getCartSubtotal(items)

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-[60] bg-[#120d0f]/60 transition-opacity duration-300',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={containerRef}
        className={[
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-line-dark bg-velvet-soft shadow-editorial transition-transform duration-500 ease-luxe',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line-dark px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-soft">Shopping cart</p>
            <h2 className="mt-2 font-serif text-3xl text-ivory">Your Edit</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 rounded-3xl border border-line-dark bg-velvet/60 p-4"
                >
                  <img
                    src={PLACEHOLDER_IMAGE}
                    alt={item.name}
                    data-strk-img-id={`cart-${item.id}-${toSlug(item.variant)}`}
                    data-strk-img={`[cart-${item.id}-desc] [cart-${item.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="h-28 w-24 rounded-2xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3
                          id={`cart-${item.id}-title`}
                          className="font-serif text-xl uppercase tracking-luxe text-ivory"
                        >
                          {item.name}
                        </h3>
                        <p id={`cart-${item.id}-desc`} className="mt-2 text-sm text-mist">
                          {item.variant}
                        </p>
                      </div>
                      <p className="text-sm text-ivory">{formatPrice(item.price)}</p>
                    </div>
                    <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(quantity) =>
                          onUpdateQuantity(item.id, item.variant, quantity)
                        }
                      />
                      <button
                        type="button"
                        className="text-xs uppercase tracking-widest text-mist transition-colors duration-300 hover:text-gold-soft"
                        onClick={() => onRemoveItem(item.id, item.variant)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-line-dark px-6 py-6">
              <div className="flex items-center justify-between text-sm text-mist">
                <span>Subtotal</span>
                <span className="text-xl text-ivory">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-mist">
                Complimentary shipping appears at checkout for qualifying orders.
              </p>
              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-sm uppercase tracking-widest text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
              >
                <ShoppingBag className="h-4 w-4" />
                Checkout coming soon
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 w-full rounded-full border border-line-dark px-5 py-4 text-sm uppercase tracking-widest text-ivory transition-all duration-300 ease-luxe hover:border-gold hover:text-gold-soft"
              >
                Continue shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line-dark text-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-8 font-serif text-4xl text-ivory">Your cart is empty</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-mist">
              Start with a warm gold favorite and build your own quiet-luxury jewelry edit.
            </p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-widest text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
            >
              Explore the shop
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

const HomePage = ({ onAddToCart }) => {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [])

  return (
    <main ref={containerRef} className="bg-velvet">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id={heroContent.bgId}
          data-strk-bg={`[${heroContent.subtitleId}] [${heroContent.titleId}]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120d0f]/90 via-[#120d0f]/45 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-gold-soft">
              {heroContent.eyebrow}
            </p>
            <h1
              id={heroContent.titleId}
              className="mt-6 max-w-xl font-serif text-5xl leading-tight text-ivory sm:text-6xl lg:text-7xl"
            >
              {heroContent.title}
            </h1>
            <p
              id={heroContent.subtitleId}
              className="mt-6 max-w-lg text-base leading-8 text-mist sm:text-lg"
            >
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm uppercase tracking-widest text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-line-dark px-7 py-4 text-sm uppercase tracking-widest text-ivory transition-all duration-300 ease-luxe hover:border-gold hover:text-gold-soft"
              >
                Discover our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line-dark bg-velvet-soft/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 py-4 text-center sm:px-6 lg:px-8">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-5">
              <p className="text-xs uppercase tracking-widest text-gold-soft sm:text-sm">
                {point}
              </p>
              {index < trustPoints.length - 1 ? (
                <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Bestsellers"
          title="The pieces our community returns to most"
          description="Five signature styles with a refined finish, designed for everyday polish and the kind of gifting that feels considered from the first glance."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Styled in real life"
          title="A polished reel of everyday wear"
          description="An elevated, social-first look at how Velmora pieces layer into mornings, evenings, gifts, and small rituals."
        />
        <div className="mt-10 flex gap-4 overflow-x-auto pb-3">
          {ugcReels.map((reel) => (
            <article
              key={reel.id}
              className="relative w-56 shrink-0 overflow-hidden rounded-3xl border border-line-dark bg-velvet-soft shadow-card"
            >
              <img
                src={PLACEHOLDER_IMAGE}
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] [${reel.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                className="h-96 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0f]/90 via-[#120d0f]/20 to-transparent" />
              <p id={reel.titleId} className="sr-only">
                Velmora styling reel
              </p>
              <div className="absolute inset-x-4 bottom-5">
                <p className="mb-3 text-xs uppercase tracking-widest text-gold-soft">
                  Reel edit
                </p>
                <p id={reel.captionId} className="font-serif text-2xl leading-tight text-ivory">
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Shop by category"
          title="Designed for gifting, layering, and every day"
          description="Explore the silhouettes our customers reach for most often, from sculptural earrings to softly shining necklace layers."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded-3xl border border-line-dark bg-velvet-soft shadow-card"
            >
              <img
                src={PLACEHOLDER_IMAGE}
                alt={category.name}
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                className="h-80 w-full object-cover transition-all duration-700 ease-luxe group-hover:scale-105 md:h-96"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0f]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p id={category.titleId} className="font-serif text-3xl text-ivory">
                  {category.name}
                </p>
                <p
                  id={category.descId}
                  className="mt-2 text-sm text-mist opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-line-dark shadow-card">
            <img
              src={PLACEHOLDER_IMAGE}
              alt="Velmora brand story"
              data-strk-img-id={brandStory.imageId}
              data-strk-img={`[${brandStory.descriptionId}] [${brandStory.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              className="h-full min-h-[20rem] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-gold-soft">Brand story</p>
            <h2 id={brandStory.titleId} className="mt-5 font-serif text-5xl text-ivory">
              {brandStory.title}
            </h2>
            <p id={brandStory.descriptionId} className="mt-5 text-base leading-8 text-mist sm:text-lg">
              {brandStory.description}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center rounded-full border border-line-dark px-6 py-3 text-sm uppercase tracking-widest text-ivory transition-all duration-300 ease-luxe hover:border-gold hover:text-gold-soft"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="What customers are saying"
          title="Loved for the way it wears and the way it feels"
          description="A few notes from customers who come to Velmora for everyday polish, giftable sets, and a premium finish without the intimidating price point."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-3xl border border-line-dark bg-velvet-soft/60 p-8 shadow-card"
            >
              <Stars rating={5} />
              <p className="mt-6 font-serif text-2xl leading-9 text-ivory">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-gold-soft">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <NewsletterSection />
      </section>
    </main>
  )
}

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setSubmitted(false)
      setError('Please enter a valid email address.')
      return
    }

    setSubmitted(true)
    setError('')
    setEmail('')
  }

  return (
    <div className="rounded-[2rem] bg-gold px-6 py-10 text-velvet shadow-card sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-widest text-velvet/70">Newsletter</p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mt-4 text-base leading-7 text-velvet/80">
          Be first to know about new drops, gift edits, and softly limited seasonal pieces.
        </p>
      </div>
      <form className="mt-8 max-w-xl lg:mt-0 lg:w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="h-14 flex-1 rounded-full border border-velvet/15 bg-ivory px-6 text-ink outline-none transition-all duration-300 focus:border-velvet"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-velvet px-6 text-sm uppercase tracking-widest text-ivory transition-all duration-300 ease-luxe hover:bg-ink"
          >
            Join now
          </button>
        </div>
        {submitted ? (
          <p className="mt-4 text-sm text-velvet/80">
            You’re in. Your welcome offer will arrive in your inbox shortly.
          </p>
        ) : null}
        {error ? <p className="mt-4 text-sm text-velvet/80">{error}</p> : null}
      </form>
    </div>
  )
}

const ShopFilters = ({
  selectedCategory,
  selectedPriceRange,
  selectedMaterial,
  onCategoryChange,
  onPriceChange,
  onMaterialChange,
  onClear,
}) => {
  const filterButtonClass = (isActive) =>
    [
      'w-full rounded-full border px-4 py-3 text-left text-sm uppercase tracking-widest transition-all duration-300 ease-luxe',
      isActive
        ? 'border-gold bg-gold/10 text-gold-soft'
        : 'border-line-dark text-mist hover:border-gold/40 hover:text-ivory',
    ].join(' ')

  return (
    <aside className="rounded-3xl border border-line-dark bg-velvet-soft/50 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-widest text-gold-soft">Filter</h2>
        <button
          type="button"
          className="text-xs uppercase tracking-widest text-mist transition-colors duration-300 hover:text-gold-soft"
          onClick={onClear}
        >
          Clear
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-sm uppercase tracking-widest text-ivory">Category</h3>
        <div className="mt-4 space-y-3">
          <button
            type="button"
            className={filterButtonClass(selectedCategory === 'all')}
            onClick={() => onCategoryChange('all')}
          >
            All Jewelry
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={filterButtonClass(selectedCategory === category.id)}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm uppercase tracking-widest text-ivory">Price</h3>
        <div className="mt-4 space-y-3">
          <button
            type="button"
            className={filterButtonClass(selectedPriceRange === 'all')}
            onClick={() => onPriceChange('all')}
          >
            All prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              type="button"
              className={filterButtonClass(selectedPriceRange === range.id)}
              onClick={() => onPriceChange(range.id)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm uppercase tracking-widest text-ivory">Material</h3>
        <div className="mt-4 space-y-3">
          <button
            type="button"
            className={filterButtonClass(selectedMaterial === 'all')}
            onClick={() => onMaterialChange('all')}
          >
            All materials
          </button>
          {materialOptions.map((material) => (
            <button
              key={material}
              type="button"
              className={filterButtonClass(selectedMaterial === material)}
              onClick={() => onMaterialChange(material)}
            >
              {material}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all',
  )
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const priceRange = priceRanges.find((range) => range.id === selectedPriceRange)
    const nextItems = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.categoryId === selectedCategory
      const matchesMaterial =
        selectedMaterial === 'all' || product.material === selectedMaterial
      const matchesPrice =
        !priceRange ||
        (product.price >= priceRange.min && product.price <= priceRange.max)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sortBy === 'price-low') {
      return [...nextItems].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-high') {
      return [...nextItems].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      return [...nextItems].sort((a, b) => b.rating - a.rating)
    }

    return nextItems
  }, [selectedCategory, selectedMaterial, selectedPriceRange, sortBy])

  useStrkImages(containerRef, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPriceRange('all')
    setSelectedMaterial('all')
    setSortBy('featured')
  }

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-gold-soft">Collection</p>
        <h1 className="mt-5 font-serif text-5xl text-ivory sm:text-6xl">
          Quiet luxury, made for every day
        </h1>
        <p className="mt-5 text-base leading-8 text-mist sm:text-lg">
          A refined edit of demi-fine earrings, necklaces, and huggies, designed to feel polished, giftable, and beautifully accessible.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-line-dark bg-velvet-soft/50 p-5 lg:flex-row lg:items-center lg:justify-between">
        <button
          type="button"
          className="rounded-full border border-line-dark px-5 py-3 text-sm uppercase tracking-widest text-ivory transition-all duration-300 ease-luxe hover:border-gold hover:text-gold-soft lg:hidden"
          onClick={() => setShowFilters((current) => !current)}
        >
          {showFilters ? 'Hide filters' : 'Show filters'}
        </button>
        <p className="text-sm text-mist">
          Showing <span className="text-ivory">{filteredProducts.length}</span> styles
        </p>
        <label className="flex items-center gap-3 text-sm text-mist">
          <span className="uppercase tracking-widest">Sort</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-full border border-line-dark bg-velvet px-4 py-3 text-sm text-ivory outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_1fr]">
        <div className={showFilters ? 'block' : 'hidden lg:block'}>
          <ShopFilters
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            selectedMaterial={selectedMaterial}
            onCategoryChange={setSelectedCategory}
            onPriceChange={setSelectedPriceRange}
            onMaterialChange={setSelectedMaterial}
            onClear={clearFilters}
          />
        </div>

        {filteredProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-line-dark bg-velvet-soft/50 p-10 text-center">
            <h2 className="font-serif text-4xl text-ivory">No pieces match those filters</h2>
            <p className="mt-4 text-base leading-7 text-mist">
              Clear the current filters to browse the full Velmora collection again.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-widest text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

const ProductGallery = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = product.gallery[selectedIndex] ?? product.gallery[0]

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-line-dark bg-velvet-soft shadow-card">
        <img
          src={PLACEHOLDER_IMAGE}
          alt={selectedImage.title}
          data-strk-img-id={selectedImage.imgId}
          data-strk-img={`[${selectedImage.descId}] [${selectedImage.titleId}]`}
          data-strk-img-ratio={selectedImage.ratio}
          data-strk-img-width={selectedImage.width}
          className="h-[28rem] w-full object-cover md:h-[38rem]"
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {product.gallery.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={[
              'overflow-hidden rounded-2xl border bg-velvet-soft transition-all duration-300 ease-luxe',
              selectedIndex === index ? 'border-gold' : 'border-line-dark hover:border-gold/50',
            ].join(' ')}
          >
            <img
              src={PLACEHOLDER_IMAGE}
              alt={image.title}
              data-strk-img-id={`${image.imgId}-thumb`}
              data-strk-img={`[${image.descId}] [${image.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="400"
              className="h-28 w-full object-cover"
            />
            <span id={image.titleId} className="sr-only">
              {image.title}
            </span>
            <span id={image.descId} className="sr-only">
              {image.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

const ProductPage = ({ onAddToCart }) => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const relatedProducts = getRelatedProducts(productId)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedVariant(product.variants[0])
    setQuantity(1)
  }, [product])

  useStrkImages(containerRef, [productId])

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-ivory">Product not found</h1>
        <p className="mt-5 text-base leading-7 text-mist">
          This piece is no longer available in the current edit.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-widest text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
        >
          Back to shop
        </Link>
      </main>
    )
  }

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
        <ProductGallery product={product} />

        <section>
          <p className="text-xs uppercase tracking-widest text-gold-soft">
            {product.category}
          </p>
          <h1 className="mt-4 font-serif text-5xl uppercase tracking-luxe text-ivory sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl text-ivory">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-mist">{product.reviews} reviews</span>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-mist sm:text-lg">
            {product.longDescription}
          </p>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-ivory">Choose finish</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className={[
                    'rounded-full border px-5 py-3 text-sm uppercase tracking-widest transition-all duration-300 ease-luxe',
                    selectedVariant === variant
                      ? 'border-gold bg-gold/10 text-gold-soft'
                      : 'border-line-dark text-mist hover:border-gold/50 hover:text-ivory',
                  ].join(' ')}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-ivory">Quantity</p>
            <div className="mt-4">
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onAddToCart(product, {
                quantity,
                variant: selectedVariant,
              })
            }
            className="mt-10 flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm uppercase tracking-widest text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
          >
            Add to Cart
          </button>

          <div className="mt-10 border-t border-line-dark">
            <AccordionItem title="Description" content={product.description} defaultOpen />
            <AccordionItem title="Materials & Care" content={product.materials} />
            <AccordionItem title="Shipping & Returns" content={product.shipping} />
          </div>
        </section>
      </div>

      <section className="mt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-soft">Related pieces</p>
            <h2 className="mt-3 font-serif text-4xl text-ivory">You may also like</h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-xs uppercase tracking-widest text-mist transition-colors duration-300 hover:text-gold-soft md:block"
          >
            View all jewelry
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

const AboutPage = () => {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [])

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-gold-soft">About Velmora</p>
        <h1 className="mt-5 font-serif text-5xl text-ivory sm:text-6xl">
          A softer approach to fine-looking jewelry
        </h1>
        <p className="mt-6 text-base leading-8 text-mist sm:text-lg">
          Velmora creates demi-fine pieces that feel polished enough for gifting, yet effortless enough to wear every day. We focus on warm finishes, wearable silhouettes, and a premium presentation without the distance of traditional luxury retail.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-line-dark shadow-card">
          <img
            src={PLACEHOLDER_IMAGE}
            alt="Velmora studio"
            data-strk-img-id="about-page-image-1"
            data-strk-img="[about-page-desc] [about-page-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            className="h-full min-h-80 w-full object-cover"
          />
        </div>
        <div className="rounded-3xl border border-line-dark bg-velvet-soft/60 p-8 shadow-card sm:p-10">
          <h2 id="about-page-title" className="font-serif text-4xl text-ivory">
            Designed to live in your routine
          </h2>
          <p id="about-page-desc" className="mt-5 text-base leading-8 text-mist">
            Our collections begin with a simple question: what will still feel beautiful after the trend cycle passes? The answer shapes everything from our rounded huggies to our gift-ready sets and softly sparkling necklaces.
          </p>
          <div className="mt-8 space-y-5 text-sm leading-7 text-mist">
            <p>18K gold plated and vermeil finishes selected for a rich, warm tone.</p>
            <p>Hypoallergenic materials that feel comfortable in daily wear.</p>
            <p>Editorial presentation and approachable prices from $30 to $120.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

const JournalPage = () => {
  const containerRef = useRef(null)
  const entries = [
    {
      id: 'journal-1',
      title: 'How to Layer Gold Jewelry for Day to Evening',
      description:
        'A calm, polished guide to balancing necklaces, cuffs, and huggies with soft proportion.',
    },
    {
      id: 'journal-2',
      title: 'Gift-Worthy Jewelry for Birthdays, Bridesmaids, and More',
      description:
        'Our edit of pieces that feel personal, elevated, and ready to give beautifully.',
    },
    {
      id: 'journal-3',
      title: 'The Everyday Case for Demi-Fine Jewelry',
      description:
        'Why premium-looking finishes and accessible pricing make the best modern staple pieces.',
    },
  ]

  useStrkImages(containerRef, [])

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-gold-soft">Journal</p>
        <h1 className="mt-5 font-serif text-5xl text-ivory sm:text-6xl">
          Notes on gifting, styling, and modern jewelry wardrobes
        </h1>
        <p className="mt-6 text-base leading-8 text-mist sm:text-lg">
          A simple editorial space for thoughtful styling guidance, gift inspiration, and a closer look at the pieces that make everyday dressing feel more intentional.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className="overflow-hidden rounded-3xl border border-line-dark bg-velvet-soft/60 shadow-card"
          >
            <img
              src={PLACEHOLDER_IMAGE}
              alt={entry.title}
              data-strk-img-id={`${entry.id}-image`}
              data-strk-img={`[${entry.id}-desc] [${entry.id}-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-gold-soft">5 min read</p>
              <h2 id={`${entry.id}-title`} className="mt-4 font-serif text-3xl text-ivory">
                {entry.title}
              </h2>
              <p id={`${entry.id}-desc`} className="mt-4 text-sm leading-7 text-mist">
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const addToCart = (product, options = {}) => {
    const variant = options.variant || product.variants?.[0] || 'Gold Tone'
    const quantity = options.quantity || 1

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          variant,
        },
      ]
    })

    openCart()
  }

  const updateQuantity = (productId, variant, quantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.id === productId && item.variant === variant),
      ),
    )
  }

  const cartCount = useMemo(() => getCartCount(cartItems), [cartItems])
  const cartContextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      isCartOpen,
      openCart,
      closeCart,
    }),
    [cartItems, isCartOpen],
  )

  return (
    <CartContext.Provider value={cartContextValue}>
      <BrowserRouter>
        <PreviewRouteBridge />
        <div className="min-h-screen bg-velvet text-ivory">
          <SiteHeader cartCount={cartCount} onOpenCart={openCart} />
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
            <Route path="/collections" element={<ShopPage onAddToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ProductPage onAddToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <SiteFooter />
          <CartDrawer
            isOpen={isCartOpen}
            items={cartItems}
            onClose={closeCart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
          />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
