import { useState, useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Plus, Minus, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProduct, getRelated, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Stars from '@/components/ui/Stars'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

// Gallery thumbnails: reuse primary + hover slots plus a couple of derived ones.
function buildGallery(product) {
  return [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry on neutral background`, ratio: '4x5' },
    { id: product.hoverImgId, query: `[${product.descId}] [${product.titleId}] gold jewelry worn model detail`, ratio: '4x5' },
    { id: `${product.imgId}-det`, query: `[${product.descId}] [${product.titleId}] gold jewelry macro detail close up`, ratio: '4x5' },
    { id: `${product.imgId}-box`, query: `[${product.descId}] [${product.titleId}] gold jewelry gift box packaging`, ratio: '4x5' },
  ]
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { addItem, openCart } = useCart()
  const [variant, setVariant] = useState('Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeImg, slug])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = buildGallery(product)
  const related = getRelated(product, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity: qty })
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Orders ship within 1–2 business days with tracking. Enjoy 30-day hassle-free returns on unworn items in original packaging.',
    },
  ]

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight width={12} height={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight width={12} height={12} strokeWidth={1.5} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 md:max-h-[600px] overflow-x-auto md:overflow-y-auto no-scrollbar">
            {gallery.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-cream border transition-colors',
                  activeImg === i ? 'border-gold' : 'border-transparent hover:border-sand'
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt=""
                  data-strk-img-id={`${g.id}-thumb`}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-cream">
            {gallery.map((g, i) => (
              <img
                key={g.id}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`${g.id}-main`}
                data-strk-img={g.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                  activeImg === i ? 'opacity-100' : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            {product.subcategory}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.08em] text-ink leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-base text-charcoal font-light leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
              Tone
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-sans border transition-all',
                    variant === v
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand text-charcoal hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-sand">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus width={14} height={14} strokeWidth={1.5} />
              </button>
              <span className="px-5 text-sm text-ink min-w-[3ch] text-center">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                aria-label="Increase quantity"
              >
                <Plus width={14} height={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAdd} className="flex-1" size="lg">
              Add to Bag — {formatPrice(product.price * qty)}
            </Button>
            <Button onClick={openCart} variant="outline" size="lg">
              View Bag
            </Button>
          </div>

          <p className="mt-5 text-xs text-muted font-light">
            Free worldwide shipping over $75 · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-24 bg-cream border-t border-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
