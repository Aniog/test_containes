import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { Star, ChevronDown, Minus, Plus, ShoppingBag } from 'lucide-react'
import ProductCard from '../components/ui/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const variant = product.variants[selectedVariant]
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const accordions = [
    {
      title: 'Description',
      content: product.details,
    },
    {
      title: 'Materials & Care',
      content: (
        <div>
          <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div>
          <p className="mb-3">
            <strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.
          </p>
          <p>
            <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receiving the return.
          </p>
        </div>
      ),
    },
  ]

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--velmora-text-muted)] mb-8">
          <Link to="/" className="hover:text-[var(--velmora-gold)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[var(--velmora-gold)] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--velmora-text-secondary)]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`product-${product.images[activeImage].id}`}
                data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-24 bg-[var(--velmora-bg-alt)] overflow-hidden border-2 transition-colors ${
                    activeImage === index
                      ? 'border-[var(--velmora-gold)]'
                      : 'border-transparent hover:border-[var(--velmora-border)]'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${index + 1}`}
                    data-strk-img-id={`product-thumb-${img.id}`}
                    data-strk-img={`[product-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-8">
            <h1
              id={`product-name-${product.id}`}
              className="product-name text-2xl md:text-3xl tracking-[0.15em] mb-2"
            >
              {product.name}
            </h1>

            <p
              id={`product-desc-${product.id}`}
              className="text-sm text-[var(--velmora-text-muted)] mb-4"
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                        : 'text-[var(--velmora-border)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-secondary)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-2xl md:text-3xl mb-8">
              ${variant.price}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-[0.15em] uppercase font-medium mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                      selectedVariant === index
                        ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white'
                        : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)] hover:border-[var(--velmora-gold)]'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-[0.15em] uppercase font-medium mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-gold)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-gold)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                addedToCart
                  ? 'bg-[var(--velmora-success)] text-white'
                  : 'btn-accent'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-[var(--velmora-border-light)]">
              <div className="grid grid-cols-2 gap-4 text-xs text-[var(--velmora-text-muted)]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-gold)]">✓</span>
                  Free Shipping
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-gold)]">✓</span>
                  30-Day Returns
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-gold)]">✓</span>
                  Hypoallergenic
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-gold)]">✓</span>
                  Gift Ready
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-4">
              {accordions.map((accordion, index) => (
                <div key={index} className="border-b border-[var(--velmora-border-light)]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-[0.1em] uppercase font-medium">
                      {accordion.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-[var(--velmora-text-secondary)] leading-relaxed">
                      {accordion.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24 pt-16 border-t border-[var(--velmora-border-light)]">
            <h2 className="serif-heading text-2xl md:text-3xl tracking-[0.05em] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
