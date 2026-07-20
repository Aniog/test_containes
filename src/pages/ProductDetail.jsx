import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProduct, getRelated, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ProductCard'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[12px] uppercase tracking-[0.2em] text-espresso">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            'text-espresso transition-transform duration-300',
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
          <p className="text-sm text-cocoa leading-relaxed max-w-prose">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()
  const [tone, setTone] = useState(product?.tone[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  useEffect(() => {
    setTone(product?.tone[0] || 'Gold')
    setQty(1)
    setActiveImg(0)
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-3xl text-espresso">Piece not found</p>
        <Link to="/shop" className="text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelated(product, 4)
  const galleryIds = product.gallery
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  const handleAdd = () => {
    addItem(product, tone, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="text-[11px] uppercase tracking-[0.18em] text-taupe">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
            {galleryIds.map((gid, i) => (
              <button
                key={gid}
                onClick={() => setActiveImg(i)}
                className={cn(
                  'shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors',
                  activeImg === i ? 'border-gold' : 'border-line'
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={gid}
                  data-strk-img={`[${descId}] [${titleId}] gold jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${product.id}-${activeImg}`}
              data-strk-img={`[${descId}] [${titleId}] gold jewelry product`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          {product.badge && (
            <span className="inline-block bg-sand text-espresso text-[10px] uppercase tracking-[0.18em] px-3 py-1 mb-4">
              {product.badge}
            </span>
          )}
          <h1
            id={titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.12em] text-espresso leading-tight"
          >
            {product.name}
          </h1>
          <p id={descId} className="sr-only">
            {product.short}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-taupe">
              {product.rating} · {product.reviewsCount} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-espresso">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm text-cocoa leading-relaxed max-w-md">
            {product.short}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-3">
              Tone — <span className="text-espresso">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tone.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn(
                    'px-6 py-3 text-[11px] uppercase tracking-[0.18em] border transition-colors',
                    tone === t
                      ? 'bg-espresso text-ivory border-espresso'
                      : 'bg-transparent text-espresso border-line hover:border-espresso'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-4 py-4 text-espresso hover:bg-sand"
              >
                <Minus size={15} />
              </button>
              <span className="px-4 text-sm text-espresso min-w-[3ch] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-4 py-4 text-espresso hover:bg-sand"
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={cn(
                'flex-1 text-[11px] uppercase tracking-[0.2em] py-4 transition-colors flex items-center justify-center gap-2',
                added ? 'bg-gold-deep text-ivory' : 'bg-gold text-ivory hover:bg-gold-deep'
              )}
            >
              {added ? (
                <>
                  <Check size={15} /> Added to Cart
                </>
              ) : (
                `Add to Cart — ${formatPrice(product.price * qty)}`
              )}
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-cream border-t border-line">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-espresso">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  titleId={`rel-${p.id}-title`}
                  descId={`rel-${p.id}-desc`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
