import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink">
          {title}
        </span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} className="text-muted" /> : <ChevronDown size={16} strokeWidth={1.5} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm font-light text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const product = products.find(p => p.slug === slug) || products[0]
  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || null)
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ]

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-widest text-muted hover:text-gold transition-colors duration-300"
        >
          <ArrowLeft size={13} strokeWidth={2} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative aspect-square bg-linen overflow-hidden">
              {/* Hidden text for image queries */}
              <span id={product.titleId} className="sr-only">{product.name}</span>
              <span id={product.descId} className="sr-only">{product.description}</span>

              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 bg-linen overflow-hidden border-2 transition-colors duration-200 ${activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-t9k2m`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="bg-obsidian text-parchment font-sans text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-gold text-obsidian font-sans text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl font-medium uppercase tracking-product text-ink leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} style={{ color: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF', fill: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF' }} />
                ))}
              </div>
              <span className="font-sans text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-ink mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm font-light text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-3">
                  Finish: <span className="text-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-[11px] font-medium px-4 py-2 rounded-full border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'bg-obsidian text-parchment border-obsidian'
                          : 'bg-transparent text-ink border-linen hover:border-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors duration-200"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors duration-200"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-sans text-[11px] font-semibold uppercase tracking-widest py-4 transition-colors duration-300 mb-3 ${
                added
                  ? 'bg-obsidian text-parchment'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-linen">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] font-medium text-muted uppercase tracking-wide">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and chemicals. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Delivered in 3–7 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-linen bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={addItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
