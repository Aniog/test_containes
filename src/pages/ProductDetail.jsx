import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-cream">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-button uppercase text-warm-black hover:text-gold transition-colors duration-300"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-muted leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  )
}

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-white">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warm-black">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block font-sans text-sm tracking-button uppercase text-gold hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-white pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 font-sans text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-warm-black">{product.name}</span>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-cream">
              <img
                alt={product.name}
                data-strk-img-id={product.images[activeImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio={product.images[activeImage].ratio}
                data-strk-img-width={product.images[activeImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 aspect-[3/4] overflow-hidden bg-cream border-2 transition-colors duration-200 ${activeImage === i ? 'border-gold' : 'border-cream hover:border-gold-light'}`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry thumbnail`}
                    data-strk-img-ratio={img.ratio}
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
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-warm-black"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 font-sans text-xl text-warm-black font-medium">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-cream'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p
              id={product.descId}
              className="mt-4 font-sans text-sm text-muted leading-relaxed"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-button uppercase text-muted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.toneOptions.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-sm tracking-button uppercase px-5 py-2.5 border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold/10 text-warm-black'
                        : 'border-cream text-muted hover:border-gold-light hover:text-warm-black'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-button uppercase text-muted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-cream text-muted hover:border-gold hover:text-warm-black flex items-center justify-center transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-warm-black w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-cream text-muted hover:border-gold hover:text-warm-black flex items-center justify-center transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold hover:bg-gold-dark text-warm-black font-sans text-sm tracking-button uppercase py-3.5 flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is hand-finished by our artisan jewelers, ensuring the kind of quality that stands the test of time — and daily wear.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>• 18K Gold Plated over Sterling Silver</p>
                <p>• Hypoallergenic — safe for sensitive skin</p>
                <p>• Nickel-free and lead-free</p>
                <p className="mt-2">Care: Avoid direct contact with perfume, lotions, and water. Store in the provided pouch when not wearing. Gently wipe with a soft cloth to maintain shine.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>• Free worldwide shipping on all orders</p>
                <p>• Orders ship within 1–3 business days</p>
                <p>• 30-day hassle-free returns and exchanges</p>
                <p className="mt-2">Gift packaging included with every order — our signature velvet box and ribbon.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-xl md:text-2xl tracking-heading uppercase text-warm-black text-center">
            You May Also Like
          </h2>
          <div className="mt-3 w-12 h-px bg-gold mx-auto" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-cream">
                  <img
                    alt={rp.name}
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-serif text-sm tracking-product uppercase text-warm-black">{rp.name}</h3>
                <p className="font-sans text-sm text-warm-black mt-1">{formatPrice(rp.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
