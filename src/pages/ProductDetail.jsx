import { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react'
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/shop/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink font-medium">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-stone" /> : <ChevronDown size={16} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-6 text-sm text-stone leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { add } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  const [variant, setVariant] = useState(product?.variants[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setVariant(product?.variants[0] || 'Gold')
    setQty(1)
    setActiveImg(0)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 pt-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center justify-center bg-champagne text-ivory hover:bg-champagne-deep transition-colors px-8 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, label: 'Front' },
    { imgId: product.imgIdAlt, label: 'Worn' },
  ]

  const handleAdd = () => {
    add(product, variant, qty, `[${product.descId}] [${product.titleId}]`)
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-5">
        <nav className="text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-champagne">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-champagne">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-champagne">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'relative w-16 md:w-20 aspect-[3x4] overflow-hidden bg-ivory border transition-colors',
                    activeImg === i ? 'border-champagne' : 'border-sand hover:border-taupe'
                  )}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                    alt={`${product.name} ${g.label}`}
                    data-strk-img-id={`${g.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${g.label}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3x4] overflow-hidden bg-ivory border border-sand">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                alt={product.name}
                data-strk-img-id={gallery[activeImg].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${gallery[activeImg].label}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:pl-4">
            <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-widest3 leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDescription}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-sm text-stone leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-stone mb-3">
                Tone — <span className="text-ink">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-6 py-3 text-xs uppercase tracking-widest2 font-medium rounded-full border transition-all',
                      variant === v
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-sand text-stone hover:border-ink hover:text-ink'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-sand rounded-sm">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="px-4 py-4 text-stone hover:text-ink"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm text-ink min-w-[2ch] text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="px-4 py-4 text-stone hover:text-ink"
                  onClick={() => setQty((q) => q + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-champagne text-ivory hover:bg-champagne-deep transition-colors py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <p className="mt-4 text-xs text-taupe">
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
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
