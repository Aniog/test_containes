import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-widest font-medium">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

function RelatedProducts({ currentId }) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4)

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[3/4] bg-muted-bg overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.id}-title] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 id={`related-${product.id}-title`} className="font-serif text-sm uppercase tracking-product">
                  {product.name}
                </h3>
                <p className="text-sm text-muted mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="text-accent text-sm mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted-bg overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc] gold jewelry product`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className={`w-full h-full object-cover ${activeThumb === 0 ? 'block' : 'hidden'}`}
              />
              <img
                alt={`${product.name} alternate`}
                data-strk-img-id={`pdp-alt-${product.imgId2}`}
                data-strk-img={`[pdp-${product.id}-name] gold jewelry close up detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className={`w-full h-full object-cover ${activeThumb === 1 ? 'block' : 'hidden'}`}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveThumb(0)}
                className={`w-16 h-16 md:w-20 md:h-20 bg-muted-bg border-2 transition-colors ${
                  activeThumb === 0 ? 'border-accent' : 'border-transparent'
                }`}
              >
                <img
                  alt="Thumbnail 1"
                  data-strk-img-id={`pdp-thumb1-${product.id}-x1`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveThumb(1)}
                className={`w-16 h-16 md:w-20 md:h-20 bg-muted-bg border-2 transition-colors ${
                  activeThumb === 1 ? 'border-accent' : 'border-transparent'
                }`}
              >
                <img
                  alt="Thumbnail 2"
                  data-strk-img-id={`pdp-thumb2-${product.id}-x2`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1 id={`pdp-${product.id}-name`} className="font-serif text-2xl md:text-3xl uppercase tracking-product font-light">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl mt-3 font-serif">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviewCount} reviews)</span>
            </div>

            <p id={`pdp-${product.id}-desc`} className="mt-5 text-sm text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-sm capitalize rounded-full border transition-colors ${
                      selectedVariant === v
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-charcoal hover:border-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-accent text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">Care: Avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery within 5–7 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  )
}
