import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-ultra-wide uppercase font-sans font-semibold text-base">
          {title}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-stone-600 font-sans leading-relaxed">
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

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-500 font-sans mb-4">Product not found</p>
          <Link to="/shop" className="text-gold text-xs tracking-ultra-wide uppercase font-sans font-semibold">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs font-sans text-stone-400 tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-base">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-${product.id}-main-${activeImage}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name] jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-24 overflow-hidden bg-stone-100 border-2 transition-colors ${activeImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                    data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name] jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl tracking-wide-product uppercase text-base font-light"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500 font-sans">({product.reviews})</span>
            </div>

            <p className="text-xl font-sans font-medium text-base mt-3">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="text-sm text-stone-600 font-sans leading-relaxed mt-4"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase font-sans font-semibold text-base mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase font-sans font-medium border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-stone-300 text-base hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase font-sans font-semibold text-base mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-stone-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-500 hover:text-base transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-sans text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-500 hover:text-base transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-white text-xs tracking-ultra-wide uppercase font-sans font-semibold py-4 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
          <h2 className="text-center font-serif text-xl md:text-2xl tracking-ultra-wide uppercase text-base font-light mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group text-center">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-name] jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3
                  id={`related-${p.id}-name`}
                  className="font-serif text-xs tracking-wide-product uppercase text-base group-hover:text-gold transition-colors"
                >
                  {p.name}
                </h3>
                <p id={`related-${p.id}-desc`} className="text-[11px] text-stone-500 font-sans mt-0.5">
                  {p.shortDescription}
                </p>
                <p className="text-sm font-sans font-medium text-base mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
