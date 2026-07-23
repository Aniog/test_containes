import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-[0.1em] uppercase font-medium text-textDark hover:text-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" strokeWidth={1.5} /> : <ChevronDown className="w-4 h-4" strokeWidth={1.5} />}
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-textMuted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warmCream">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-textDark">Product not found</h2>
          <Link to="/shop" className="font-sans text-sm text-gold mt-4 inline-block hover:text-goldLight transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="min-h-screen bg-warmCream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-surface">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={product.images[selectedImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 aspect-[3/4] overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-divider'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="md:pl-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium text-textDark">
              {product.name}
            </h1>
            <p id={product.descId} className="font-sans text-sm text-textMuted mt-2">
              {product.shortDescription}
            </p>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-textDark mt-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider'}`} strokeWidth={0} />
                ))}
              </div>
              <span className="font-sans text-sm text-textMuted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-textDark leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-[0.1em] uppercase font-medium text-textMuted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`font-sans text-sm tracking-wide px-5 py-2 rounded-sm border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-deepCharcoal font-medium'
                        : 'border-divider text-textDark hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-[0.1em] uppercase font-medium text-textMuted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-divider rounded-sm flex items-center justify-center text-textMuted hover:text-textDark hover:border-textMuted transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="font-sans text-base font-medium text-textDark w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-divider rounded-sm flex items-center justify-center text-textMuted hover:text-textDark hover:border-textMuted transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal py-3.5 rounded-sm hover:bg-goldLight transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-divider">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-3">Each piece is carefully crafted by skilled artisans, ensuring the highest quality of finish and detail. Our demi-fine jewelry bridges the gap between everyday wear and luxury, offering you the best of both worlds.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Material: {product.material} over a durable brass base.</p>
                <p className="mt-2">All Velmora pieces are hypoallergenic and nickel-free, safe for sensitive skin.</p>
                <p className="mt-2">To keep your jewelry looking its best: store in the provided pouch, avoid contact with water, perfumes, and lotions, and gently wipe with a soft cloth after wear.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5–7 business days; express 2–3 business days.</p>
                <p className="mt-2">We offer a 30-day return policy. If you're not completely satisfied, return your piece in its original condition for a full refund.</p>
                <p className="mt-2">All orders arrive in our signature Velmora gift box, ready for gifting or treasuring.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-divider pt-12">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-textDark text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm">
                  <img
                    data-strk-img-id={`related-${rp.images[0].imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}] gold jewelry`}
                    data-strk-img-ratio={rp.images[0].ratio}
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={rp.titleId} className="font-serif text-sm md:text-base tracking-[0.2em] uppercase font-medium text-textDark mt-3">
                  {rp.name}
                </h3>
                <p id={rp.descId} className="font-sans text-xs text-textMuted mt-1">{rp.shortDescription}</p>
                <p className="font-sans text-sm font-medium text-textDark mt-2">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
