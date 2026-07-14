import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wide uppercase text-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-stone-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-stone-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
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
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-xl text-stone-500">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-gold font-sans text-sm hover:text-gold-dark">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream-50">
      <div className="max-w-container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-stone-500">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-stone-100 mb-3">
              <img
                data-strk-img-id={`${product.imgId}-main-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${selectedImage === 0 ? 'front view' : 'worn detail'}`}
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
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${idx === 0 ? 'front' : 'side'}`}
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
          <div className="md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-semibold tracking-product uppercase text-charcoal"
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
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-stone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-sans font-semibold text-charcoal">
              ${product.price}
            </p>

            {/* Description */}
            <p
              id={product.descId}
              className="mt-4 font-sans text-sm text-stone-600 leading-relaxed"
            >
              {product.details}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <label className="block text-xs font-sans font-medium tracking-wide uppercase text-stone-500 mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 font-sans text-xs font-medium tracking-wide uppercase border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-white'
                        : 'border-stone-300 text-stone-600 hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="block text-xs font-sans font-medium tracking-wide uppercase text-stone-500 mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-stone-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm font-medium text-charcoal border-x border-stone-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-white font-sans text-xs font-medium tracking-btn uppercase py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.</p>
                <p className="mt-2">We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal tracking-tight text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-stone-100 mb-3">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm font-medium tracking-product uppercase text-charcoal">
                  {p.name}
                </h3>
                <p className="text-sm font-sans font-medium text-charcoal mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
