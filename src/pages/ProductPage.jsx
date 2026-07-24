import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Heart, Leaf, Minus, Plus, RotateCcw, Ruler, ShoppingBag, Sparkles, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { useReveal } from '@/hooks/useReveal'
import { formatPrice, getProductById } from '@/data/products'
import Stars from '@/components/ui/Stars'
import RelatedProducts from '@/components/product/RelatedProducts'

const VIEWS = [
  { id: 'hero', query: '' },
  { id: 'side', query: 'side angle macro detail' },
  { id: 'model', query: 'worn by an elegant woman, warm light' },
  { id: 'flatlay', query: 'flat lay on warm linen fabric' },
]

const PERKS = [
  { icon: Truck, label: 'Free worldwide shipping' },
  { icon: RotateCcw, label: '30-day easy returns' },
  { icon: Leaf, label: 'Hypoallergenic & waterproof' },
  { icon: Sparkles, label: 'Signature gift box included' },
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg uppercase tracking-[0.12em] text-ink">{title}</span>
        {open ? (
          <Minus className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
        ) : (
          <Plus className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.5} />
        )}
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-ink-soft">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const containerRef = useRef(null)
  const { addItem, openCart } = useCart()

  const [activeView, setActiveView] = useState('hero')
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  useEffect(() => {
    setActiveView('hero')
    setVariant('gold')
    setQuantity(1)
    setWishlisted(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [productId])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [productId])

  useReveal(containerRef, [productId])

  const galleryView = useMemo(
    () => VIEWS.find((v) => v.id === activeView) ?? VIEWS[0],
    [activeView]
  )

  if (!product) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 pt-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-sm text-ink-muted">
          This piece may have sold out or been moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex h-12 items-center bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
        >
          Back to the collection
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product.id, variant, quantity)
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-ink-muted" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-gold-deep">Home</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link to="/shop" className="transition-colors hover:text-gold-deep">Shop</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link to={`/shop?category=${product.category}`} className="transition-colors hover:text-gold-deep">
            {product.categoryLabel}
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <span className="text-ink">{product.shortName}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <img
                key={activeView}
                data-strk-img-id={`pdp-${product.id}-${activeView}`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-cat-${product.id}] ${galleryView.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} — ${activeView} view`}
                className="h-full w-full animate-fade-in object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {VIEWS.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActiveView(view.id)}
                  className={`relative aspect-square overflow-hidden bg-sand transition-all duration-300 ${
                    activeView === view.id
                      ? 'ring-1 ring-gold-deep ring-offset-2 ring-offset-cream'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View ${view.id} image`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${view.id}`}
                    data-strk-img={`[pdp-name-${product.id}] [pdp-cat-${product.id}] ${view.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pt-2">
            <p id={`pdp-cat-${product.id}`} className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep">
              {product.categoryLabel}
            </p>
            <h1
              id={`pdp-name-${product.id}`}
              className="mt-2 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.1em] text-ink md:text-[42px]"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Stars value={product.rating} />
              <span className="text-sm text-ink-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              {product.blurb}
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
                Finish — <span className="text-ink-muted">{variant === 'gold' ? '18K Gold' : 'Silver'}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {[
                  { id: 'gold', label: '18K Gold', swatch: 'bg-gradient-to-br from-gold-soft to-gold-deep' },
                  { id: 'silver', label: 'Silver', swatch: 'bg-gradient-to-br from-[#e8e8ea] to-[#b8b8bd]' },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setVariant(option.id)}
                    className={`inline-flex h-11 items-center gap-2.5 border px-5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      variant === option.id
                        ? 'border-ink bg-ink text-cream'
                        : 'border-line bg-cream text-ink hover:border-ink'
                    }`}
                    aria-pressed={variant === option.id}
                  >
                    <span className={`h-3.5 w-3.5 rounded-full ${option.swatch}`} />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-stretch gap-3">
              <div className="inline-flex items-center border border-line">
                <button
                  type="button"
                  className="flex h-13 w-12 items-center justify-center text-ink transition-colors hover:bg-sand"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-base font-semibold text-ink">{quantity}</span>
                <button
                  type="button"
                  className="flex h-13 w-12 items-center justify-center text-ink transition-colors hover:bg-sand"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                >
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="inline-flex h-13 flex-1 items-center justify-center gap-2 bg-gold-deep px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                Add to cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                onClick={() => setWishlisted((v) => !v)}
                className={`inline-flex h-13 w-13 items-center justify-center border transition-all duration-300 ${
                  wishlisted ? 'border-gold-deep bg-gold-deep/10 text-gold-deep' : 'border-line text-ink hover:border-ink'
                }`}
                aria-label="Add to wishlist"
                aria-pressed={wishlisted}
              >
                <Heart className={`h-5 w-5 ${wishlisted ? 'fill-gold-deep' : ''}`} strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-line py-6">
              {PERKS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-xs text-ink-soft">
                  <Icon className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-gold-deep"
            >
              <Ruler className="h-4 w-4" strokeWidth={1.5} />
              Size guide
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-line md:mt-24">
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  )
}
