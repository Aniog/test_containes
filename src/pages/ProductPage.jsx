import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="text-sm tracking-wider uppercase text-[var(--velmora-text)]">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[var(--velmora-text-muted)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--velmora-text-muted)]" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-[var(--velmora-text-secondary)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find(p => p.id === productId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  if (!product) {
    return (
      <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <p className="serif-heading text-2xl text-[var(--velmora-text-secondary)] mb-4">
            Product not found
          </p>
          <Link to="/shop" className="btn-outline inline-flex text-xs sm:text-sm">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => {
      addToCart(product, selectedVariant, quantity)
      setIsAdding(false)
    }, 300)
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return (
    <main className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors min-h-[44px]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-[var(--velmora-bg-secondary)] mb-3 sm:mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 sm:gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 sm:w-20 h-20 sm:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--velmora-gold)]'
                      : 'border-transparent hover:border-[var(--velmora-border)]'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block px-2 py-1 bg-[var(--velmora-gold)] text-[var(--velmora-black)] text-[10px] tracking-widest uppercase mb-3 sm:mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-xl sm:text-2xl md:text-3xl text-[var(--velmora-text)] mb-2 sm:mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--velmora-gold)] text-[var(--velmora-gold)]'
                        : 'text-[var(--velmora-border)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-secondary)]">{product.rating}</span>
              <span className="text-sm text-[var(--velmora-text-muted)]">({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-xl sm:text-2xl text-[var(--velmora-text)] mb-4 sm:mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-[var(--velmora-text-secondary)] leading-relaxed mb-6 sm:mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-5 sm:mb-6">
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-2 sm:mb-3">
                Color: <span className="capitalize text-[var(--velmora-text-secondary)]">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 sm:gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 sm:px-6 py-2 text-xs tracking-wider uppercase border transition-all min-h-[44px] ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-[var(--velmora-black)]'
                        : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)] hover:border-[var(--velmora-text)]'
                    }`}
                    aria-label={`${variant} tone`}
                    aria-pressed={selectedVariant === variant}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 sm:mb-8">
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-2 sm:mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--velmora-border)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[var(--velmora-gold)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 sm:px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[var(--velmora-gold)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="btn-gold w-full mb-3 sm:mb-4 disabled:opacity-50 min-h-[48px]"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                {isAdding ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>

            <p className="text-xs text-[var(--velmora-text-muted)] text-center">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8 sm:mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. Comes in signature Velmora packaging, ready for gifting.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materialsCare}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receiving the return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[var(--velmora-border)]">
            <h2 className="serif-heading text-xl sm:text-2xl md:text-3xl text-[var(--velmora-text)] mb-6 sm:mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden mb-2 sm:mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="product-name text-xs text-[var(--velmora-text)] mb-1">{p.name}</h3>
                  <p className="text-xs sm:text-sm text-[var(--velmora-text)]">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
