import { useState, useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Plus, Minus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'
import { Accordion } from '@/components/product/Accordion'
import { ProductCard } from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const tones = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  const [tone, setTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(slug, 4)
  const gallery = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry editorial` },
    { imgId: product.imgId2, query: `[${product.descId}] [${product.titleId}] gold jewelry worn model` },
  ]

  const handleAdd = () => {
    addItem(product, { quantity, tone })
  }

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-28">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  'relative aspect-[4/5] w-20 overflow-hidden bg-sand transition-opacity md:w-24',
                  activeImage === i ? 'opacity-100 ring-1 ring-gold' : 'opacity-60 hover:opacity-100',
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  src={PLACEHOLDER}
                  alt=""
                  data-strk-img-id={`thumb-${img.imgId}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-sand">
            <img
              src={PLACEHOLDER}
              alt={product.name}
              data-strk-img-id={`main-${gallery[activeImage].imgId}`}
              data-strk-img={gallery[activeImage].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1 font-medium">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{product.category}</p>
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl uppercase tracking-widest3 text-ink leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm md:text-base text-stone leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
              Tone: <span className="text-stone">{tone === 'gold' ? 'Gold' : 'Silver'}</span>
            </p>
            <div className="flex gap-3">
              {tones.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={cn(
                    'rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest3 transition-all',
                    tone === t.id
                      ? 'border-gold bg-gold/10 text-ink'
                      : 'border-hairline text-stone hover:border-ink hover:text-ink',
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <div className="flex items-center justify-between border border-hairline sm:justify-start">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-4 text-ink hover:text-gold transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-4 text-ink hover:text-gold transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-gold text-cream hover:bg-gold-deep uppercase tracking-widest3 text-xs font-medium px-8 py-4 transition-colors"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free worldwide shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2">{product.materials}</p>
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">
                Free worldwide shipping on all orders. Orders are dispatched within 1–2
                business days and arrive in signature Velmora packaging.
              </p>
              <p>
                Enjoy 30 days to return unworn pieces in their original condition for a full
                refund. Final sale items are not eligible for return.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-ink">You May Also Like</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
