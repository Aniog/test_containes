import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-brand-muted" /> : <ChevronDown size={16} className="text-brand-muted" />}
      </button>
      {open && <div className="pb-4 font-sans text-sm text-brand-muted leading-relaxed">{children}</div>}
    </div>
  )
}

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.round(rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-brand-muted">({count})</span>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage, product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold hover:text-brand-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-muted">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${selectedImage}`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-desc-${product.id}] gold jewelry ${product.images[selectedImage]}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square overflow-hidden bg-brand-warm border-2 transition-colors ${selectedImage === idx ? 'border-brand-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-name-${product.id}] gold jewelry ${img}`}
                    data-strk-img-ratio="1x1"
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
          <div>
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>
            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-brand-muted mt-2">
              {product.description}
            </p>

            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>

            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 font-sans text-xs tracking-wide uppercase border transition-colors ${
                      selectedTone === tone
                        ? 'border-brand-gold text-brand-gold bg-brand-gold/5'
                        : 'border-brand-sand text-brand-muted hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-brand-gold text-white font-sans text-xs tracking-wide uppercase font-semibold py-4 flex items-center justify-center gap-2 hover:bg-brand-gold-dark transition-colors"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>18K gold plating over sterling silver</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid direct contact with perfume, lotions, and water</li>
                  <li>Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–10 business days</li>
                  <li>Express delivery: 2–4 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal text-center">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-brand-warm">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3
                    id={`related-name-${p.id}`}
                    className="font-serif text-sm tracking-wide uppercase text-brand-charcoal mt-3 group-hover:text-brand-gold transition-colors"
                  >
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-brand-charcoal mt-0.5">${p.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
