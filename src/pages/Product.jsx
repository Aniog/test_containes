import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/home/ProductCard'
import { toast } from 'sonner'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted" strokeWidth={1.5} />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted" strokeWidth={1.5} />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Product() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [id, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-base mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-gold hover:text-gold-dark underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-base transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-base transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-base">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left - Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] bg-cream-dark rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={`product-detail-${product.id}-main-${selectedImage}`}
                data-strk-img={`[${product.id}-detail-name] ${product.query} detail close-up`}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={product.images[selectedImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-detail-thumb-${product.id}-${index}`}
                    data-strk-img={`[${product.id}-detail-name] ${product.query}`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-block self-start px-3 py-1 bg-gold/10 text-gold text-2xs font-medium tracking-widest-xl uppercase mb-4">
                {product.badge}
              </span>
            )}

            <h1
              id={`${product.id}-detail-name`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-base font-medium tracking-wider uppercase leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <span className="font-serif text-2xl text-base font-medium">
                {formatPrice(product.price)}
              </span>
              <StarRating rating={product.rating} count={product.reviewCount} showCount size={13} />
            </div>

            <p className="font-sans text-sm text-muted leading-relaxed mt-4">
              {product.shortDescription}
            </p>

            {/* Divider */}
            <div className="h-px bg-border my-6" />

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base mb-3">
                Tone: <span className="text-muted capitalize">{variant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs font-medium tracking-widest-xl uppercase border transition-all duration-200 ${
                      variant === v
                        ? 'bg-base text-cream border-base'
                        : 'bg-transparent text-base border-border hover:border-base'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-3 text-muted hover:text-base transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-base">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-3 text-muted hover:text-base transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-base text-cream text-xs font-medium tracking-widest-xl uppercase hover:bg-base/90 transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <span className="text-2xs text-muted tracking-wider">Free Shipping</span>
              <span className="text-border">|</span>
              <span className="text-2xs text-muted tracking-wider">30-Day Returns</span>
              <span className="text-border">|</span>
              <span className="text-2xs text-muted tracking-wider">Hypoallergenic</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-border my-6" />

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p><strong className="text-base">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-base">Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-2">
                  <p>Free worldwide shipping on all orders. Estimated delivery: 5–10 business days.</p>
                  <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 md:py-20 bg-cream-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
              Complete the look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-base font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
