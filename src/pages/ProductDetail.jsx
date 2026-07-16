import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-cream-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal-800">{title}</span>
        {isOpen ? (
          <ChevronUp size={16} className="text-charcoal-400" />
        ) : (
          <ChevronDown size={16} className="text-charcoal-400" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-charcoal-500 leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function RelatedProduct({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
          <img
            data-strk-img-id={`${product.imgId}-related`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          />
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="text-[11px] tracking-product uppercase font-medium text-charcoal-800 mb-1">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm font-medium text-charcoal-700">
        {formatPrice(product.price)}
      </p>
    </article>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const found = products.find(p => p.id === id)
    setProduct(found)
    setSelectedVariant('Gold')
    setQuantity(1)
    setSelectedImage(0)
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [product, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-charcoal-400">Product not found</p>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            {products.filter(p => p.id === id).map(product => (
              <React.Fragment key={product.id}>
                <div className="aspect-[3/4] bg-cream-100 overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`${product.imgId}-pd-main`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedImage(0)}
                    className={`w-16 h-20 bg-cream-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === 0 ? 'border-gold-500' : 'border-transparent hover:border-charcoal-200'
                    }`}
                  >
                    <img
                      data-strk-img-id={`${product.imgId}-pd-th0`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view 1`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button
                    onClick={() => setSelectedImage(1)}
                    className={`w-16 h-20 bg-cream-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === 1 ? 'border-gold-500' : 'border-transparent hover:border-charcoal-200'
                    }`}
                  >
                    <img
                      data-strk-img-id={`${product.imgId}-pd-th1`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view 2`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="text-gold-600 text-xs tracking-wide-xl uppercase font-medium mb-2">
              {product.category}
            </p>

            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-charcoal-800 mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-800 mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p
              id={product.descId}
              className="text-sm text-charcoal-500 leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-cream-200 mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wide uppercase text-charcoal-600 font-medium mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wide border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-charcoal-800 bg-charcoal-800 text-cream-100'
                        : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-wide uppercase text-charcoal-600 font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm font-medium text-charcoal-800 border-x border-charcoal-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-charcoal-800 text-cream-100 py-4 text-xs tracking-nav uppercase font-semibold hover:bg-charcoal-700 transition-colors duration-300 mb-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-cream-200">
              <div className="flex flex-col items-center text-center">
                <Truck size={18} className="text-gold-600 mb-1.5" />
                <span className="text-[10px] text-charcoal-500 leading-tight">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw size={18} className="text-gold-600 mb-1.5" />
                <span className="text-[10px] text-charcoal-500 leading-tight">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield size={18} className="text-gold-600 mb-1.5" />
                <span className="text-[10px] text-charcoal-500 leading-tight">1-Year Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description" defaultOpen={true}>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(p => (
              <RelatedProduct key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
