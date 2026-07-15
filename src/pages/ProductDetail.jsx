import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, Check } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'
import { formatPrice, cn } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

const galleryImgIds = (product) => [
  `pdp-${product.id}-g1`,
  `pdp-${product.id}-g2`,
  `pdp-${product.id}-g3`,
  `pdp-${product.id}-g4`,
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-mocha transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-taupe leading-relaxed pr-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([])

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-2xl text-ink">Product not found</p>
        <Link
          to="/shop"
          className="text-xs uppercase tracking-widest2 text-champagne hover:text-champagne-dark"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = galleryImgIds(product)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="text-xs uppercase tracking-widest2 text-taupe flex items-center gap-2">
          <Link to="/" className="hover:text-champagne">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne">Shop</Link>
          <span>/</span>
          <span className="text-mocha">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {galleryIds.map((gid, i) => (
              <button
                key={gid}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative w-16 md:w-20 aspect-square bg-sand overflow-hidden border transition-colors',
                  activeImg === i ? 'border-champagne' : 'border-transparent'
                )}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={gid}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail view ${i + 1}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative aspect-[4/5] bg-sand overflow-hidden">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-${product.id}-main`}
              data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial large`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-sand text-ink text-[10px] uppercase tracking-widest2 px-3 py-1.5 mb-4">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-[0.1em]"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.subtitle}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < Math.round(product.rating)
                      ? 'fill-champagne text-champagne'
                      : 'text-sand'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-taupe">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm text-mocha leading-relaxed">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-taupe mb-3">
              Tone: <span className="text-ink">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    'px-6 py-3 text-xs uppercase tracking-widest2 border transition-all',
                    tone === t
                      ? 'border-ink bg-ink text-cream'
                      : 'border-sand text-mocha hover:border-ink'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="p-4 text-mocha hover:text-champagne transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="p-4 text-mocha hover:text-champagne transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-champagne text-ink text-xs uppercase tracking-widest2 py-4 hover:bg-champagne-dark transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> Add to Cart
            </button>
          </div>

          <p className="mt-4 text-xs text-taupe">
            Free worldwide shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">
                Each piece arrives in a signature Velmora pouch, ready to gift
                or to keep.
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>
                18K gold plated over a hypoallergenic stainless steel base.
                Nickel-free and lead-free.
              </p>
              <p className="mt-3">To keep your jewelry looking its best:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Avoid contact with water, perfumes, and lotions.</li>
                <li>Store in the provided pouch when not worn.</li>
                <li>Clean gently with a soft, dry cloth.</li>
              </ul>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                Free worldwide shipping on all orders. Orders ship within 1–2
                business days and arrive in 3–7 days depending on location.
              </p>
              <p className="mt-3">
                Enjoy 30-day returns on unworn pieces in original packaging.
                Refunds are processed within 5 business days of receipt.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
