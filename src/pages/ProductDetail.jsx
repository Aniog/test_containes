import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-brand-warm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left cursor-pointer px-0"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 animate-fade-in">
          <p className="font-sans text-sm text-brand-muted leading-relaxed">{children}</p>
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
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 text-center section-padding">
        <h1 className="font-serif text-3xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-8 no-underline inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-brand-ivory overflow-hidden mb-4">
              <img
                alt={product.images[activeImage].alt}
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}-x1y2z3`}
                data-strk-img={`[pdp-name-${product.id}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-brand-ivory overflow-hidden border-2 p-0 rounded-none cursor-pointer ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={img.alt}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-t4u5v6`}
                    data-strk-img={`[pdp-name-${product.id}] jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            <p className="mt-3 font-serif text-2xl text-brand-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-warm'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">
                ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-6 font-sans text-sm text-brand-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-sans text-xs tracking-wider uppercase border cursor-pointer transition-all duration-200 rounded-none ${
                      selectedVariant === v
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-brand-warm bg-transparent text-brand-charcoal rounded-none cursor-pointer hover:border-brand-gold transition-colors p-0"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-warm bg-transparent text-brand-charcoal rounded-none cursor-pointer hover:border-brand-gold transition-colors p-0"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-accent w-full mt-8 py-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-warm">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group no-underline">
                <div className="aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    alt={p.images[0].alt}
                    data-strk-img-id={`related-${p.id}-r7s8t9`}
                    data-strk-img={`[related-name-${p.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  id={`related-name-${p.id}`}
                  className="mt-3 font-serif text-xs tracking-product uppercase text-brand-charcoal text-center"
                >
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-brand-muted text-center">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
