import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-border/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm font-medium text-velmora-charcoal tracking-wide"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-velmora-stone" /> : <ChevronDown className="w-4 h-4 text-velmora-stone" />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-graphite leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      window.scrollTo(0, 0)
    }
  }, [product])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-velmora-gold underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-velmora-stone mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <div className="aspect-[3/4] bg-velmora-ivory rounded-sm overflow-hidden relative">
            <img
              data-strk-img-id={`product-detail-${product.id}`}
              data-strk-img={`[pd-desc] [pd-name] [pd-cat]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <span id="pd-cat" className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium">
              {product.category}
            </span>
            <h1 id="pd-name" className="mt-2 font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-velmora-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 font-serif text-2xl text-velmora-charcoal">
              ${product.price}
            </p>

            {/* Description */}
            <p id="pd-desc" className="mt-4 text-sm text-velmora-graphite leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-wide uppercase text-velmora-stone mb-3">
                Tone: <span className="text-velmora-charcoal font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-[0.1em] uppercase border transition-colors rounded-full ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                        : 'border-velmora-border text-velmora-stone hover:border-velmora-gold-light'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wide uppercase text-velmora-stone mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-velmora-charcoal border-x border-velmora-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full py-4 bg-velmora-gold text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-charcoal text-center tracking-wide">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-velmora-ivory rounded-sm overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-${p.id}-name] ${p.category} jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-${p.id}-name`}
                  className="mt-3 font-serif text-sm tracking-[0.2em] uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors"
                >
                  {p.name}
                </h3>
                <p className="text-sm text-velmora-stone">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
