import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/components/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base text-brand-charcoal">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-warm-gray" />
        )}
      </button>
      {open && <div className="pb-5 font-sans text-sm text-brand-warm-gray leading-relaxed">{children}</div>}
    </div>
  )
}

const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [selectedImage])

  useEffect(() => {
    if (relatedRef.current) {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    }
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-display-sm text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="font-sans text-sm text-brand-gold underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="bg-brand-cream pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ivory mb-3">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 overflow-hidden bg-brand-ivory border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-8">
            <h1 id={product.titleId} className="font-serif text-display-sm md:text-display text-brand-charcoal uppercase tracking-ultra-wide mb-2">
              {product.name}
            </h1>
            <p id={product.descId} className="font-sans text-sm text-brand-warm-gray mb-4">
              {product.category}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-soft-gray'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-cool-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-brand-charcoal mb-6">${product.price}</p>

            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray font-medium mb-3">
                Tone: {selectedTone}
              </p>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-wide font-medium transition-all duration-200 ${
                      selectedTone === tone
                        ? 'bg-brand-charcoal text-white'
                        : 'bg-transparent border border-brand-soft-gray text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-brand-soft-gray text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-brand-soft-gray text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-sans text-xs uppercase tracking-wide font-semibold py-4 flex items-center justify-center gap-2 transition-colors duration-300 mb-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost. Perfect for gifting or treating yourself.</p>
            </Accordion>

            <Accordion title="Materials & Care">
              <ul className="list-disc list-inside space-y-1">
                <li>18K Gold Plated over 925 Sterling Silver</li>
                <li>Hypoallergenic — nickel and lead free</li>
                <li>Tarnish-resistant coating</li>
                <li>Store in the provided pouch when not wearing</li>
                <li>Avoid direct contact with perfume, lotions, and water</li>
                <li>Gently wipe with a soft cloth after each wear</li>
              </ul>
            </Accordion>

            <Accordion title="Shipping & Returns">
              <ul className="list-disc list-inside space-y-1">
                <li>Free worldwide shipping on all orders</li>
                <li>Standard delivery: 5–10 business days</li>
                <li>Express delivery: 2–4 business days (available at checkout)</li>
                <li>30-day hassle-free returns</li>
                <li>Items must be unworn and in original packaging</li>
                <li>Gift wrapping available at checkout</li>
              </ul>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-20 md:mt-28 pt-12 border-t border-brand-sand">
          <h2 className="font-serif text-display-sm text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-brand-ivory mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-brand-charcoal mb-1">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-brand-warm-gray">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
