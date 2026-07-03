import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Check, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const GALLERY_VIEWS = [
  { id: 'g1', ratio: '4x5', label: 'Front' },
  { id: 'g2', ratio: '4x5', label: 'Detail' },
  { id: 'g3', ratio: '4x5', label: 'Worn' },
  { id: 'g4', ratio: '4x5', label: 'Boxed' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeView, setActiveView] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(id, 4)

  const handleAdd = () => {
    addItem(product, { quantity, tone })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders, dispatched within 1–2 business days. Enjoy 30-day returns on unworn pieces in their original packaging. Need help? Contact concierge@velmora.com.',
    },
  ]

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-muted">
          <Link to="/" className="hover:text-gold-deep">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold-deep">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-2 md:gap-14 md:px-8 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {GALLERY_VIEWS.map((view, i) => (
              <button
                key={view.id}
                type="button"
                onClick={() => setActiveView(i)}
                className={cn(
                  'relative aspect-[4/5] w-16 shrink-0 overflow-hidden border bg-cream-deep transition-all md:w-20',
                  activeView === i ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'
                )}
                aria-label={view.label}
              >
                <img
                  src={PLACEHOLDER}
                  alt=""
                  data-strk-img-id={`${product.id}-thumb-${view.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] ${view.label} view`}
                  data-strk-img-ratio={view.ratio}
                  data-strk-img-width="200"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-cream-deep aspect-[4/5]">
            <img
              src={PLACEHOLDER}
              alt={product.name}
              data-strk-img-id={`${product.id}-main-${GALLERY_VIEWS[activeView].id}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${GALLERY_VIEWS[activeView].label} view warm gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              className="h-full w-full object-cover fade-in"
              key={activeView}
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-wide2 text-ink">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-2">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">{product.type}</p>
          <h1
            id={product.titleId}
            className="mt-2 font-serif text-3xl uppercase tracking-wide2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">{product.short}</p>

          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-muted">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-gold-deep">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-ink-soft">{product.short}</p>

          {/* Tone selector */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-wide2 text-muted">
              Finish: <span className="text-ink">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {['Gold', 'Silver'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    'min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-wide2 transition-all',
                    tone === t
                      ? 'border-ink bg-ink text-cream'
                      : 'border-sand text-ink-soft hover:border-ink'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-wide2 text-muted">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 text-ink-soft transition-colors hover:text-gold-deep"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 text-ink-soft transition-colors hover:text-gold-deep"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs uppercase tracking-wide2 text-cream transition-all duration-300 hover:bg-gold-deep"
          >
            {added ? (
              <>
                <Check size={15} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={15} /> Add to Cart · {formatPrice(product.price * quantity)}
              </>
            )}
          </button>

          <p className="mt-4 text-center text-[11px] text-muted">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream-deep/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
