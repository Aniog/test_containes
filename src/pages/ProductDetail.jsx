import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-velmora-stone transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
    }
  }, [product])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-velmora-sand overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.slug}-z1y2`}
                data-strk-img={`[pdp-${product.slug}-name] gold jewelry elegant close up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-velmora-sand overflow-hidden cursor-pointer border border-transparent hover:border-velmora-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.slug}-${i}-w3x4`}
                    data-strk-img={`[pdp-${product.slug}-name] gold jewelry detail angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-velmora-stone mb-6">
              <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-velmora-charcoal capitalize">{product.category}</span>
            </div>

            <h1
              id={`pdp-${product.slug}-name`}
              className="font-serif text-2xl lg:text-3xl text-velmora-charcoal uppercase tracking-extra-wide font-light"
            >
              {product.name}
            </h1>

            {/* Price & rating */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xl font-serif text-velmora-charcoal">${product.price}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-velmora-stone">({product.reviews})</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm text-velmora-stone leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal">
                Tone: {selectedVariant}
              </span>
              <div className="flex gap-2 mt-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-colors duration-200 ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal text-velmora-charcoal bg-velmora-sand'
                        : 'border-velmora-border text-velmora-stone hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal">
                Quantity
              </span>
              <div className="flex items-center border border-velmora-border w-fit mt-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-2.5 text-sm font-medium text-velmora-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-velmora-gold text-white py-4 text-xs uppercase tracking-extra-wide font-medium hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p><strong className="text-velmora-charcoal">Material:</strong> {product.material}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivered in 3–7 business days.</p>
                <p className="mt-2">30-day returns — no questions asked. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 lg:mt-28 border-t border-velmora-border pt-16">
          <h2 className="font-serif text-2xl lg:text-3xl text-velmora-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.slug}-img-q5r6`}
                    data-strk-img={`[related-${p.slug}-name] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3
                    id={`related-${p.slug}-name`}
                    className="text-[11px] uppercase tracking-extra-wide font-medium text-velmora-charcoal"
                  >
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-serif text-velmora-stone">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
