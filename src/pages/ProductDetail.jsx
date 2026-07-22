import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '@/data/products'
import { useCartDispatch } from '@/components/cart/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-serif text-sm uppercase tracking-widest text-stone-800 hover:text-velmora-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="pb-6 font-sans text-sm text-stone-600 leading-relaxed">{children}</div>}
    </div>
  )
}

const ProductDetail = () => {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const dispatch = useCartDispatch()
  const product = products.find((p) => p.slug === slug)

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-stone-800">Product not found</h1>
          <Link to="/shop" className="btn-outline inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        tone: selectedTone,
        quantity,
      }
    })
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3x4] overflow-hidden bg-stone-200 mb-4">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-stone-200 hover:border-stone-400'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[${product.titleId}] gold jewelry thumbnail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-0 md:py-4">
            <h1
              id={product.titleId}
              className="product-name text-lg md:text-xl text-stone-800"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-gold mt-3">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-stone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p
              id={product.descId}
              className="font-sans text-sm text-stone-600 leading-relaxed mt-6"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-wider text-stone-500 mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-4 py-2 font-sans text-sm uppercase tracking-wider transition-all duration-300 ${
                      selectedTone === tone
                        ? 'bg-velmora-gold text-stone-900'
                        : 'border border-stone-300 text-stone-600 hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider text-stone-500 mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-stone-800 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-center block mt-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-3">Each piece is hand-finished and inspected for quality before it reaches you. The warm gold tone complements every skin tone, making it a versatile addition to your collection.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Base: Sterling silver with 18K gold plating. Nickel-free and hypoallergenic.</p>
                <p className="mt-3">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently wipe with a soft cloth after each use.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express available at checkout.</p>
                <p className="mt-3">30-day hassle-free returns. If you're not completely satisfied, send it back for a full refund — no questions asked.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800 tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.slug}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-stone-200">
                  <img
                    data-strk-img-id={`related-${rp.id}-a1`}
                    data-strk-img={`[${rp.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-xs md:text-sm text-stone-800 mt-4 group-hover:text-velmora-gold transition-colors">
                  {rp.name}
                </h3>
                <p className="font-serif text-sm text-velmora-gold mt-1">{formatPrice(rp.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
