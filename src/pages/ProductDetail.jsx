import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/lib/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium text-brand-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-brand-muted leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-brand-gold font-sans text-sm underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-ivory overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-ivory overflow-hidden border border-brand-sand/50 cursor-pointer hover:border-brand-gold transition-colors">
                  <img
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-r4s5t6`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-brand-charcoal"
            >
              {product.name}
            </h1>

            <p className="mt-3 font-sans text-xl text-brand-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-brand-gold' : 'text-brand-sand'}`}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p id={`pdp-${product.id}-desc`} className="mt-5 font-sans text-sm text-brand-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-2">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className="px-4 py-2 font-sans text-xs uppercase tracking-wide transition-colors"
                      style={
                        selectedVariant === v
                          ? { backgroundColor: '#2C2C2C', color: '#FAF7F2', border: '1px solid #2C2C2C' }
                          : { backgroundColor: 'transparent', color: '#2C2C2C', border: '1px solid #E8E0D4' }
                      }
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-2">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-sans text-sm text-brand-charcoal min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full font-sans text-xs uppercase tracking-wide-xl py-4 transition-colors hover:opacity-90"
              style={{ backgroundColor: '#2C2C2C', color: '#FAF7F2' }}
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-brand-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.material}</p>
                <p className="mt-2">
                  To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery within 5–7 business days.</p>
                <p className="mt-2">
                  We offer a 30-day return policy. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-brand-sand pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 id={`related-${p.id}-title`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-brand-muted">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
