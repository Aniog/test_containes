import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'
import ProductCard from '../ui/ProductCard'

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="velmora-label text-[var(--velmora-text)]">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[var(--velmora-text-muted)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--velmora-text-muted)]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetailPage() {
  const { productId } = useParams()
  const { addToCart } = useCart()
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [addedToCart, setAddedToCart] = useState(false)

  const product = products.find((p) => p.id === productId)

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [productId])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="velmora-heading text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.featured))
    .slice(0, 4)

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--velmora-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--velmora-text-muted)]">
            <li><Link to="/" className="hover:text-[var(--velmora-text)] transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-[var(--velmora-text)] transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-[var(--velmora-text)]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
              <img
                data-strk-img-id={`product-detail-${product.id}-${selectedImage}`}
                data-strk-img={`[${product.name}] [${product.description}] gold jewelry elegant ${selectedImage === 1 ? 'worn model' : 'studio'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-[var(--velmora-bg-alt)] overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--velmora-accent)]'
                      : 'border-transparent hover:border-[var(--velmora-border)]'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[${product.name}] gold jewelry ${index === 1 ? 'detail' : 'main'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="velmora-product-name text-2xl md:text-3xl mb-2">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--velmora-accent)] text-[var(--velmora-accent)]'
                        : 'text-[var(--velmora-border)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-light mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              {product.description}. Crafted with 18K gold plating over recycled brass, this piece is designed to be worn and treasured for years to come.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="velmora-label mb-3">Metal</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm capitalize border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent)] text-white'
                        : 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-text)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="velmora-label mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`velmora-btn-primary w-full py-4 text-base ${
                addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 py-6 border-t border-b border-[var(--velmora-border)]">
              <div className="text-center">
                <p className="text-xs text-[var(--velmora-text-muted)]">Free Shipping</p>
                <p className="text-xs text-[var(--velmora-text-light)] mt-1">Worldwide</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-[var(--velmora-text-muted)]">30-Day Returns</p>
                <p className="text-xs text-[var(--velmora-text-light)] mt-1">Hassle-free</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-[var(--velmora-text-muted)]">18K Gold</p>
                <p className="text-xs text-[var(--velmora-text-light)] mt-1">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p>
                  The {product.name} is a statement piece from our signature collection. 
                  Each piece is carefully crafted using sustainable materials and traditional techniques, 
                  resulting in jewelry that is both beautiful and responsible.
                </p>
                <p className="mt-3">
                  Dimensions: Approximately 1.5" in length. Weight: 0.3 oz.
                </p>
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <ul className="space-y-2">
                  <li>• 18K gold plated over recycled brass</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided velvet pouch</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Orders ship within 1-2 business days</li>
                  <li>• Delivery: 5-10 business days (US), 10-15 days (International)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="velmora-heading text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
