import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@/lib/image-helper'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-muted" /> : <ChevronDown className="w-4 h-4 text-muted" />}
      </button>
      {open && <div className="pb-4 text-sm text-muted leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm uppercase tracking-wider hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted mb-6 uppercase tracking-wider">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] overflow-hidden bg-cream-dark">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry thumbnail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border-dark'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-charcoal mt-4">${product.price}</p>

            <p id={product.descId} className="text-sm text-muted mt-4 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-border text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-gold text-cream py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p className="mb-2">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                <p>Gently wipe with a soft cloth after each wear to maintain its luster.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express 2–4 business days.</p>
                <p><strong>Returns:</strong> We accept returns within 30 days of delivery. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-cream-dark mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-[0.12em] text-charcoal">{p.name}</h3>
                <p className="text-sm text-muted mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
