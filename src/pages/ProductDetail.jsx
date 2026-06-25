import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { PRODUCTS, getRelated } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import ProductCard from '@/components/ProductCard'

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const SHIPPING_TEXT =
  'Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered in 5–10 business days. Enjoy 30-day hassle-free returns on unworn items in original packaging.'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCTS.find((p) => p.id === id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [openAcc, setOpenAcc] = useState('description')

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-3xl text-ink">Piece not found</p>
        <Link to="/shop" className="mt-6 inline-block text-gold hover:text-gold-deep text-sm uppercase tracking-[0.2em]">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelated(product.id, 4)
  const titleId = `pd-${product.id}-title`
  const descId = `pd-${product.id}-desc`

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accBody = (key) => {
    if (key === 'description') return product.description
    if (key === 'materials') return `${product.materials}\n\nCare: ${product.care}`
    return SHIPPING_TEXT
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-5">
        <nav className="text-[11px] uppercase tracking-[0.18em] text-taupe flex items-center gap-2">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-14 pb-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative w-16 md:w-full aspect-[3x4] overflow-hidden border transition-colors',
                  activeImg === i ? 'border-gold' : 'border-sand/60 hover:border-taupe'
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  data-strk-img-id={`pd-${product.id}-thumb-${i}`}
                  data-strk-img={`[${descId}] [${titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="160"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 relative aspect-[3x4] overflow-hidden bg-sand/30 border border-sand/40">
            <img
              alt={product.name}
              data-strk-img-id={`pd-${product.id}-main-${activeImg}`}
              data-strk-img={`[${descId}] [${titleId}] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">{product.category}</p>
          <h1
            id={titleId}
            className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-[0.06em] leading-tight"
          >
            {product.name}
          </h1>
          <p id={descId} className="sr-only">{product.short}</p>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-sand'
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-taupe">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
          </div>

          <p className="font-serif text-3xl text-ink mt-6">{formatPrice(product.price)}</p>

          <p className="text-taupe mt-5 leading-relaxed">{product.short}</p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">
              Tone: <span className="text-taupe">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-colors',
                    variant === v
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand/70 text-ink hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center border border-sand/70">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-12 h-12 flex items-center justify-center text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-12 h-12 flex items-center justify-center text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 bg-gold text-ivory py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
            >
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>
          </div>

          {/* Mini trust */}
          <div className="mt-8 grid grid-cols-3 gap-3 pt-6 border-t border-sand/60">
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: ShieldCheck, label: 'Hypoallergenic' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center text-center gap-2">
                <t.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.15em] text-taupe">{t.label}</span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-10 border-t border-sand/60">
            {ACCORDIONS.map((a) => {
              const open = openAcc === a.key
              return (
                <div key={a.key} className="border-b border-sand/60">
                  <button
                    onClick={() => setOpenAcc(open ? null : a.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[12px] uppercase tracking-[0.2em] text-ink font-medium">{a.label}</span>
                    <ChevronDown
                      className={cn('w-4 h-4 text-taupe transition-transform duration-300', open && 'rotate-180')}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      open ? 'max-h-96 pb-5' : 'max-h-0'
                    )}
                  >
                    <p className="text-sm text-taupe leading-relaxed whitespace-pre-line">{accBody(a.key)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
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
