import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingCart } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="velmora-heading-md text-[var(--velmora-text)] mb-4">Product Not Found</h2>
          <Link to="/shop" className="velmora-btn velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => product.related.includes(p.id))

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name)
  }

  const accordions = [
    {
      name: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      name: 'materials',
      title: 'Materials & Care',
      content: '18K gold plated over brass. Hypoallergenic and nickel-free. Store in a dry place away from direct sunlight. Clean gently with a soft cloth. Avoid contact with water, perfume, and lotions.',
    },
    {
      name: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="velmora-container-wide px-4 md:px-8 lg:px-12 py-4">
        <nav className="flex items-center gap-2 velmora-body-sm text-[var(--velmora-text-light)]">
          <Link to="/" className="hover:text-[var(--velmora-text)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--velmora-text)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--velmora-text)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="velmora-container-wide px-4 md:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[var(--velmora-accent)]'
                      : 'border-transparent hover:border-[var(--velmora-border)]'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden rounded-sm bg-[var(--velmora-bg-secondary)]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="velmora-product-name text-2xl md:text-3xl text-[var(--velmora-text)] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="velmora-heading-sm text-[var(--velmora-text)]">${product.price}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                        : 'text-[var(--velmora-border)]'
                    }`}
                  />
                ))}
                <span className="velmora-body-sm text-[var(--velmora-text-light)] ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="velmora-body text-[var(--velmora-text-muted)] mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <span className="velmora-label text-[var(--velmora-text)] mb-3 block">Color</span>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedVariant === variant.id
                        ? 'bg-[var(--velmora-accent)] text-white'
                        : variant.available
                        ? 'border border-[var(--velmora-border)] text-[var(--velmora-text)] hover:border-[var(--velmora-accent)]'
                        : 'border border-[var(--velmora-border-light)] text-[var(--velmora-text-light)] cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                    {!variant.available && ' (Sold Out)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="velmora-label text-[var(--velmora-text)] mb-3 block">Quantity</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] rounded-sm hover:border-[var(--velmora-text)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="velmora-body w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] rounded-sm hover:border-[var(--velmora-text)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="velmora-btn velmora-btn-primary w-full text-base py-4 mb-6"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-[var(--velmora-border)]">
              {accordions.map((acc) => (
                <div key={acc.name} className="border-b border-[var(--velmora-border)]">
                  <button
                    onClick={() => toggleAccordion(acc.name)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="velmora-label text-[var(--velmora-text)]">{acc.title}</span>
                    {openAccordion === acc.name ? (
                      <ChevronUp className="w-4 h-4 text-[var(--velmora-text-muted)]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[var(--velmora-text-muted)]" />
                    )}
                  </button>
                  {openAccordion === acc.name && (
                    <div className="pb-4">
                      <p className="velmora-body text-[var(--velmora-text-muted)]">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="velmora-section bg-[var(--velmora-bg-secondary)]">
          <div className="velmora-container">
            <h2 className="velmora-heading-md text-[var(--velmora-text)] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
