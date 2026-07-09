import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { productImageMap } from '@/data/images'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-taupe/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-[0.12em] uppercase text-brand-charcoal font-medium">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-brand-taupe transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="font-sans text-sm text-brand-taupe leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const product = products.find((p) => p.id === productId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [productId, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-ivory">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setQuantity(1)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 bg-brand-ivory">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="font-sans text-xs text-brand-taupe">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Image gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 flex-shrink-0">
              {product.images.map((imgId, index) => {
                const imgData = productImageMap[imgId]
                return (
                  <button
                    key={imgId}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      'w-16 h-20 overflow-hidden transition-all duration-200',
                      activeImage === index
                        ? 'ring-1 ring-brand-gold'
                        : 'ring-1 ring-brand-taupe/10 hover:ring-brand-taupe/30'
                    )}
                  >
                    <img
                      data-strk-img-id={imgData.thumbStrkImgId}
                      data-strk-img={imgData.strkImgQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={imgData.alt}
                      className="w-full h-full object-cover bg-brand-warm"
                    />
                  </button>
                )
              })}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-brand-warm relative">
              {product.images.map((imgId, index) => {
                const imgData = productImageMap[imgId]
                return (
                  <img
                    key={imgId}
                    data-strk-img-id={imgData.strkImgId}
                    data-strk-img={imgData.strkImgQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={imgData.alt}
                    className={cn(
                      'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
                      activeImage === index ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                )
              })}

              {/* Mobile thumbnails */}
              <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-colors',
                      activeImage === index ? 'bg-brand-gold' : 'bg-brand-ivory/60'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block self-start font-sans text-[0.6rem] tracking-[0.2em] uppercase bg-brand-gold/10 text-brand-gold px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-[0.06em]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3.5 h-3.5',
                      i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-taupe/30'
                    )}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-brand-charcoal mt-4">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-brand-taupe leading-relaxed mt-4 max-w-md">
              {product.description}
            </p>

            {/* Divider */}
            <div className="hairline my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-brand-charcoal font-medium mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 font-sans text-xs tracking-[0.1em] uppercase transition-all duration-200',
                      selectedVariant === variant
                        ? 'bg-brand-charcoal text-brand-ivory'
                        : 'border border-brand-taupe/30 text-brand-charcoal hover:border-brand-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-brand-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-taupe/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-brand-charcoal hover:text-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-12 text-center text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-brand-charcoal hover:text-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full text-xs">
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-1.5 text-brand-taupe">
                <Truck className="w-3.5 h-3.5" />
                <span className="font-sans text-[0.65rem]">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-brand-taupe">
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="font-sans text-[0.65rem]">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-brand-taupe">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-sans text-[0.65rem]">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
