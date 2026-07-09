import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'
import ProductCard from '../components/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.15em] font-medium text-ink">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-ink-muted" /> : <ChevronDown className="w-4 h-4 text-ink-muted" />}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-sm text-ink-light leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  }, [slug])

  useEffect(() => {
    setSelectedVariant('Gold')
    setQuantity(1)
    setActiveImage(0)
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm uppercase tracking-wider hover:text-gold-dark transition-colors">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
        <nav className="flex items-center gap-2 text-xs text-ink-muted">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 transition-colors',
                    activeImage === i ? 'border-gold' : 'border-stone-200 hover:border-stone-300'
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-stone-100 overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.images[activeImage]?.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] detail closeup`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.15em] text-ink font-light">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn('w-4 h-4', i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-stone-300')} />
                ))}
              </div>
              <span className="text-sm text-ink-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl md:text-3xl text-ink mt-4 tracking-wide">{formatPrice(product.price)}</p>

            {/* Description */}
            <p className="text-sm text-ink-light leading-relaxed mt-6 max-w-lg">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-3 font-medium">
                Tone: <span className="text-ink">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 border',
                      selectedVariant === variant
                        ? 'bg-obsidian text-cream border-obsidian'
                        : 'bg-transparent text-ink border-stone-300 hover:border-ink'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-3 font-medium">Quantity</p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-gold text-obsidian text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-dark transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-stone-200">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="w-4 h-4 text-gold" />
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen={true}>
                {product.longDescription}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-ink tracking-wide">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p}>
                <img
                  data-strk-img-id={`product-card-${p.id}`}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </ProductCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
