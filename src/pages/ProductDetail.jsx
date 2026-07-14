import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ShoppingBag } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'
import { formatPrice, cn } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const TONES = ['gold', 'silver']

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const SHIPPING_TEXT =
  'Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered in 5–10 business days. Enjoy 30-day returns on unworn items in their original packaging — no questions asked.'

function Accordion({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-ink">
          {label}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-ink transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-6' : 'max-h-0'
        )}
      >
        <div className="text-sm text-stone leading-relaxed pr-6">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useStrkImages([id])

  const [tone, setTone] = useState(product?.tone || 'gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 pt-24">
        <h1 className="font-serif text-4xl text-ink mb-4">Piece not found</h1>
        <Link
          to="/shop"
          className="text-xs uppercase tracking-[0.2em] text-ink border border-ink px-8 py-3.5 hover:bg-ink hover:text-ivory transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, label: 'main' },
    { imgId: product.hoverImgId, label: 'worn' },
  ].filter((g) => g.imgId)

  const handleAdd = () => {
    addItem(product, { tone, qty })
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img.imgId}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors',
                    activeImg === i ? 'border-ink' : 'border-line'
                  )}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-sand">
              {gallery.map((img, i) => (
                <img
                  key={img.imgId}
                  data-strk-img-id={`${img.imgId}-main`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  alt={product.name}
                  className={cn(
                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-sand text-ink text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-[0.05em] mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3.5 h-3.5',
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-line'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mb-6">
              {formatPrice(product.price)}
            </p>

            <p id={product.descId} className="text-stone leading-relaxed mb-8">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-3">
                Tone: <span className="text-ink capitalize">{tone}</span>
              </p>
              <div className="flex gap-3">
                {TONES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium border transition-colors duration-300 capitalize',
                      tone === t
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-line text-ink hover:border-ink'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm text-ink min-w-[3rem] text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="w-full bg-gold text-ivory text-xs uppercase tracking-[0.2em] font-medium py-4 hover:bg-gold-soft transition-colors duration-300 flex items-center justify-center gap-2 mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — {formatPrice(product.price * qty)}
            </button>
            <p className="text-xs text-stone text-center mb-10">
              Free shipping · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="border-t border-line">
              <Accordion label="Description" defaultOpen>
                {product.longDesc}
              </Accordion>
              <Accordion label="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion label="Shipping & Returns">{SHIPPING_TEXT}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
