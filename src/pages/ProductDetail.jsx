import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, generateStars } from '@/lib/utils'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-divider/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-sans tracking-wider uppercase text-brand-cream">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-muted" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-brand-cream/60 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [product, setProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const found = products.find((p) => p.id === id)
    setProduct(found)
    setActiveImage(0)
    setQuantity(1)
    setSelectedVariant('Gold')
  }, [id])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [product, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-charcoal">
        <p className="text-brand-cream/60">Product not found</p>
      </div>
    )
  }

  const stars = generateStars(product.rating)
  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-charcoal pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-brand-muted tracking-wider">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-cream/60">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-brand-graphite overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-detail-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] luxury gold jewelry product detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 bg-brand-graphite overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent hover:border-brand-divider/30'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail view ${idx}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-semibold tracking-wider uppercase mb-4">
                {product.badge}
              </span>
            )}

            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-brand-cream mb-4"
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-serif text-brand-gold">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: stars.full }).map((_, i) => (
                  <Star key={`full-${i}`} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
                {Array.from({ length: stars.empty }).map((_, i) => (
                  <Star key={`empty-${i}`} className="w-4 h-4 text-brand-muted" />
                ))}
              </div>
              <span className="text-sm text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p
              id={product.descId}
              className="text-brand-cream/70 leading-relaxed mb-8"
            >
              {product.description}
            </p>

            <div className="h-px bg-brand-divider/10 mb-8" />

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-xs font-sans tracking-wider uppercase text-brand-muted mb-3">
                Tone: <span className="text-brand-cream">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-wider border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                        : 'border-brand-divider/20 text-brand-cream/60 hover:border-brand-divider/40 hover:text-brand-cream'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans tracking-wider uppercase text-brand-muted mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-divider/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-cream/60 hover:text-brand-cream transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm text-brand-cream border-x border-brand-divider/20">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-cream/60 hover:text-brand-cream transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full py-4 bg-brand-gold text-brand-black font-sans text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Wishlist */}
            <button className="w-full py-3 border border-brand-divider/20 text-brand-cream/60 text-sm tracking-wider uppercase hover:border-brand-gold hover:text-brand-gold transition-all duration-300 flex items-center justify-center gap-2 mb-8">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center gap-2 py-3 border border-brand-divider/10">
                  <badge.icon className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] text-brand-muted tracking-wider uppercase text-center">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-brand-cream/80">Materials:</strong> {product.materials}</p>
                <p><strong className="text-brand-cream/80">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 pt-20 border-t border-brand-divider/10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">
              You May Also Like
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
              >
                <div className="aspect-square bg-brand-graphite overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`related-${item.id}`}
                    data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry product`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg tracking-wide text-brand-cream group-hover:text-brand-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-brand-gold mt-1">{formatPrice(item.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
