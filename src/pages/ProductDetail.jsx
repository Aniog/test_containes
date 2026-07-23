import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/lib/data'
import { useCart } from '@/lib/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-nav text-foreground hover:text-primary transition-colors duration-300"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div className="pb-4 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-foreground">Product not found</h2>
          <Link to="/shop" className="font-sans text-sm text-primary mt-4 inline-block hover:text-muted-gold transition-colors duration-300">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <section ref={containerRef} className="pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[3x4] bg-dark-gray overflow-hidden rounded-sm mb-4">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}] product detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedImage(0)}
                className={`w-16 h-20 bg-dark-gray overflow-hidden rounded-sm border-2 transition-colors duration-300 ${
                  selectedImage === 0 ? 'border-primary' : 'border-border'
                }`}
              >
                <img
                  data-strk-img-id={`${product.imgId}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(1)}
                className={`w-16 h-20 bg-dark-gray overflow-hidden rounded-sm border-2 transition-colors duration-300 ${
                  selectedImage === 1 ? 'border-primary' : 'border-border'
                }`}
              >
                <img
                  data-strk-img-id={`${product.imgId2}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif font-light text-2xl md:text-3xl uppercase tracking-product text-foreground">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-primary mt-4">${product.price}</p>

            {/* Description */}
            <p id={product.descId} className="font-sans text-sm text-muted-foreground leading-relaxed mt-4">
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-nav text-muted-foreground mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-xs uppercase tracking-nav px-4 py-2 border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-nav text-muted-foreground mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-sans text-sm text-foreground w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-nav py-4 hover:bg-muted-gold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p className="font-sans text-sm text-muted-foreground">Material: {product.material}</p>
                  <p className="font-sans text-sm text-muted-foreground">Base: Sterling silver</p>
                  <p className="font-sans text-sm text-muted-foreground">Hypoallergenic: Yes</p>
                  <p className="font-sans text-sm text-muted-foreground mt-4">Care: Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-2">
                  <p className="font-sans text-sm text-muted-foreground">Free worldwide shipping on all orders.</p>
                  <p className="font-sans text-sm text-muted-foreground">Standard delivery: 5–10 business days.</p>
                  <p className="font-sans text-sm text-muted-foreground">Express delivery: 2–4 business days (additional fee).</p>
                  <p className="font-sans text-sm text-muted-foreground mt-4">30-day returns for a full refund. Items must be unworn and in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-border pt-12">
          <h2 className="font-serif font-light text-2xl md:text-3xl text-foreground text-center mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="relative aspect-[3x4] bg-dark-gray overflow-hidden rounded-sm">
                  <img
                    data-strk-img-id={`${rp.imgId}-related`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-light text-sm uppercase tracking-product text-foreground mt-4 group-hover:text-primary transition-colors duration-300">
                  {rp.name}
                </h3>
                <p className="font-sans text-sm font-medium text-primary mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
