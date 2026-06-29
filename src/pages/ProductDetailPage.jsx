import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-warm-dark/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-cream">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-tan transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warm-cream">Product not found</h1>
          <Link to="/shop" className="text-sm text-warm-gold mt-4 inline-block hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-warm-tan">
            <li><Link to="/" className="hover:text-warm-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-warm-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-warm-cream">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-warm-dark/30">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 overflow-hidden border transition-colors duration-300 ${
                    selectedImage === idx ? 'border-warm-gold' : 'border-warm-dark/50'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-warm-cream"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-warm-gold text-warm-gold'
                        : 'text-warm-dark'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-tan">({product.reviews})</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-warm-gold mt-4">{formatPrice(product.price)}</p>

            {/* Short description */}
            <p
              id={`pdp-${product.id}-desc`}
              className="text-sm text-warm-tan mt-4 leading-relaxed"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-warm-cream mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-warm-gold text-warm-gold bg-warm-gold/10'
                        : 'border-warm-dark text-warm-tan hover:border-warm-tan'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-warm-cream mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-warm-dark text-warm-tan hover:text-warm-cream hover:border-warm-tan transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm text-warm-cream w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-warm-dark text-warm-tan hover:text-warm-cream hover:border-warm-tan transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-warm-gold text-warm-black py-4 text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-warm-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p className="text-sm text-warm-tan leading-relaxed">
                  {product.longDescription}
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="text-sm text-warm-tan leading-relaxed space-y-2">
                  <p>Material: {product.material}</p>
                  <p>Base: Stainless steel with 18K gold plating</p>
                  <p>Hypoallergenic: Yes — nickel and lead free</p>
                  <p>Care: Avoid direct contact with perfume, lotions, and water. Store in the provided pouch when not wearing.</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="text-sm text-warm-tan leading-relaxed space-y-2">
                  <p>Free worldwide shipping on all orders.</p>
                  <p>Standard delivery: 5–10 business days.</p>
                  <p>Express delivery: 2–4 business days (available at checkout).</p>
                  <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-warm-cream text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-warm-dark/30">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3
                    id={`related-${p.id}-name`}
                    className="font-serif text-xs sm:text-sm tracking-[0.1em] uppercase text-warm-cream"
                  >
                    {p.name}
                  </h3>
                  <p
                    id={`related-${p.id}-desc`}
                    className="text-[11px] text-warm-tan mt-1 line-clamp-1"
                  >
                    {p.description}
                  </p>
                  <p className="text-sm text-warm-gold mt-1.5">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
