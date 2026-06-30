import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-wider-custom text-charcoal font-semibold"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-stone-500 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const ProductPage = () => {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
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
  }, [product])

  useEffect(() => {
    if (relatedRef.current) {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="heading-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setQuantity(1)
  }

  return (
    <main className="bg-cream pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-content mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={i === 0 ? product.imgId : product.imgId2}
                    data-strk-img={`[${product.descId}] [${product.titleId}]${i === 1 ? ' side view' : ''}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId + '-main' : product.imgId2 + '-main'}
                data-strk-img={`[${product.descId}] [${product.titleId}]${selectedImage === 1 ? ' side view' : ''}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="py-2 md:py-4">
            <h1 id={product.titleId} className="product-name text-xl md:text-2xl text-charcoal">
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.description}</p>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-stone-500 leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider-custom transition-all duration-200 ${
                      selectedTone === tone
                        ? 'bg-charcoal text-cream'
                        : 'bg-transparent border border-stone-300 text-stone-500 hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-stone-500 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-10 text-center text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-stone-500 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is meticulously crafted to ensure lasting beauty and comfort. Our demi-fine jewelry bridges the gap between everyday wear and fine jewelry, offering you accessible luxury without compromise.</p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-2">
                  <li>18K Gold Plated over 925 Sterling Silver</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Tarnish-resistant coating for lasting shine</li>
                  <li>Store in a cool, dry place away from moisture</li>
                  <li>Remove before swimming, showering, or exercising</li>
                  <li>Clean gently with a soft polishing cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–10 business days</li>
                  <li>Express delivery available at checkout</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                  <li>Gift wrapping available for all orders</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
          <h2 className="heading-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-ivory">
                  <img
                    data-strk-img-id={p.imgId + '-related'}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-charcoal mt-3">{p.name}</h3>
                <p className="font-sans text-sm text-stone-500 mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductPage
