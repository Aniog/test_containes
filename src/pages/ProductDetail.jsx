import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing. Gently polish with a soft cloth to maintain shine.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days available at checkout.\n\n30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail ${i === 2 ? 'worn on model' : i === 3 ? 'packaging' : 'close up'}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`pdp-${product.id}-title`} className="sr-only">{product.name}</span>
            <span id={`pdp-${product.id}-desc`} className="sr-only">{product.description}</span>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted mb-4">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-charcoal capitalize">{product.category}</span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-[0.1em] text-charcoal">
              {product.name}
            </h1>

            {/* Price & rating */}
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xl font-light text-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border-warm'}`}
                  />
                ))}
                <span className="text-xs text-muted ml-1">({product.reviewCount})</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-medium uppercase tracking-[0.1em] border transition-all duration-300 bg-transparent ${
                      selectedVariant === v
                        ? 'border-gold text-gold'
                        : 'border-border-warm text-muted hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-border-warm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-border-warm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-white text-sm font-semibold uppercase tracking-[0.15em] py-4 border-none hover:bg-gold-hover transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border-warm">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b border-border-warm">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    {openAccordion === i ? (
                      <ChevronUp className="w-4 h-4 text-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted" />
                    )}
                  </button>
                  {openAccordion === i && (
                    <div className="pb-4 text-sm text-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-border-warm pt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
