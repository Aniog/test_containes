import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

function StarRating({ rating, count }) {
  const filled = Math.round(rating)
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            style={i <= filled ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E0D4' }}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-muted">{rating} ({count} reviews)</span>
    </div>
  )
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone/40">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="text-sm font-sans text-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  )
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== currentId).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [currentId])

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink tracking-wide mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => {
            const img = product.images[0]
            return (
              <Link key={product.id} to={`/product/${product.slug}`} className="group flex flex-col">
                <div className="aspect-[3/4] overflow-hidden bg-stone/20 relative">
                  <img
                    data-strk-img-id={`related-${img.id}`}
                    data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-3">
                  <h3
                    id={`related-title-${product.id}`}
                    className="font-serif text-sm font-medium uppercase tracking-[0.12em] text-ink group-hover:text-gold transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p id={`related-desc-${product.id}`} className="text-xs font-sans text-muted mt-0.5">
                    {product.shortDescription}
                  </p>
                  <p className="text-sm font-sans font-medium text-ink mt-1">{formatPrice(product.price)}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const product = products.find(p => p.slug === slug)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant('gold')
    setQuantity(1)
    setAdded(false)
  }, [slug])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl font-light text-ink">Product not found</p>
        <Link to="/shop" className="text-xs font-sans uppercase tracking-[0.2em] text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const activeImg = product.images[selectedImage]

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.15em] text-whisper">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-muted">{product.name}</span>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}-${i}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream relative">
              <img
                data-strk-img-id={activeImg.id}
                data-strk-img={`[pdp-desc] [pdp-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-start pt-0 md:pt-4">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-ivory text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-obsidian text-ivory text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id="pdp-title"
              className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-[0.2em] text-ink leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-serif text-2xl font-light text-ink mt-4 mb-5">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p id="pdp-desc" className="text-sm font-sans text-muted leading-relaxed mb-6 border-b border-stone/40 pb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink mb-3">
                  Tone: <span className="text-muted capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs font-sans font-medium uppercase tracking-[0.15em] border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-ivory'
                          : 'border-stone/60 text-muted hover:border-ink hover:text-ink'
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
              <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-stone/60 w-fit h-11">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-full flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-sans font-medium text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-full flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs font-sans font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 mb-3 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust icons */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-stone/30 mb-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <Icon size={16} strokeWidth={1.5} className="text-gold" />
                  <span className="text-[9px] font-sans uppercase tracking-[0.12em] text-muted">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-ink font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-ink font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-2">We offer free returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  )
}
