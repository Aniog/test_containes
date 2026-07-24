import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronLeft, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'
import ProductCard from '../components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-charcoal">
          {title}
        </span>
        <span
          className={cn(
            'w-5 h-5 flex items-center justify-center text-warm-gray transition-transform duration-300',
            open ? 'rotate-180' : ''
          )}
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-[500px] pb-4' : 'max-h-0'
        )}
      >
        <div className="text-sm text-warm-gray leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useRef(null)

  const product = products.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    setActiveImage(0)
    setSelectedVariant('Gold')
    setQuantity(1)
  }, [slug])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [slug, activeImage])

  if (!product) {
    return (
      <div className="pt-32 text-center section-padding">
        <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-accent-outline inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-warm-gray-light">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden mb-4">
              {product.images.map((img, i) => (
                <img
                  key={product.imgIds[i]}
                  data-strk-img-id={product.imgIds[i]}
                  data-strk-img={`[${product.subtitle.replace(/\s+/g, '-').toLowerCase()}] [${product.name.replace(/\s+/g, '-').toLowerCase()}] gold jewelry product detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={cn(
                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 bg-cream rounded-sm overflow-hidden border-2 transition-colors',
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-divider'
                  )}
                >
                  <img
                    data-strk-img-id={`${product.imgIds[i]}-thumb`}
                    data-strk-img={`[${product.name.replace(/\s+/g, '-').toLowerCase()}] jewelry thumbnail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="lg:pt-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-xs text-warm-gray hover:text-charcoal transition-colors mb-6 lg:hidden"
            >
              <ChevronLeft size={14} />
              Back
            </button>

            {product.badge && (
              <span className="inline-block font-sans text-[9px] uppercase tracking-[0.15em] text-gold bg-gold/10 px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-product-name text-2xl md:text-3xl text-charcoal mb-2">
              {product.name}
            </h1>

            <p className="text-sm text-warm-gray mb-4">{product.subtitle}</p>

            <p className="font-serif text-2xl text-charcoal mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-divider">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-gold' : 'text-divider'}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-charcoal mb-3">
                Tone: <span className="text-warm-gray font-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-5 py-2 text-xs font-sans uppercase tracking-[0.1em] border transition-all duration-300',
                      selectedVariant === variant
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'border-divider text-warm-gray hover:border-charcoal hover:text-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-divider">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal border-x border-divider">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full text-center mb-6">
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-divider">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((badge) => (
                <div key={badge.label} className="text-center">
                  <badge.icon size={18} strokeWidth={1.2} className="text-warm-gray-light mx-auto mb-1.5" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.08em] text-warm-gray-light">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.description}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>{product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="hairline-divider mb-12 md:mb-16" />
          <div className="text-center mb-10 md:mb-12">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-3">
              You May Also Like
            </p>
            <h2 className="font-serif text-2xl md:text-heading-md text-charcoal">
              Complete Your Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
