import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../lib/cartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/home/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id, 4)
  
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="serif text-3xl mb-4">Piece Not Found</h1>
        <Link to="/shop" className="btn btn-outline">Browse Collection</Link>
      </div>
    )
  }

  // Determine displayed image based on selected variant
  const displayImage = product.images?.find(img => img.id === selectedVariant) || product.images?.[0]

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < fullStars ? 'text-velmora-gold' : 'text-velmora-border'}>★</span>
    ))
  }

  // Handle variant change from pills or thumbnails
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant)
    // Sync the image index to match the variant
    const variantIndex = product.images?.findIndex(img => img.id === variant)
    if (variantIndex !== -1) {
      setSelectedImageIndex(variantIndex)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-velmora-warm-gray overflow-hidden mb-4 rounded-sm">
            <img 
              src={displayImage?.url} 
              alt={displayImage?.alt || product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImageIndex(idx)
                    setSelectedVariant(img.id)
                  }}
                  className={`w-20 h-20 bg-velmora-warm-gray overflow-hidden border-2 transition-all ${
                    selectedVariant === img.id 
                      ? 'border-velmora-gold' 
                      : 'border-transparent'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:pt-2">
          <div className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</div>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1 text-sm">
              <span className="stars">{renderStars(product.rating)}</span>
              <span className="text-velmora-text-muted ml-1">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <p className="text-velmora-text-muted leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-velmora-text-muted">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => handleVariantChange(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-velmora-text-muted">Quantity</div>
            <div className="flex items-center border border-velmora-border w-fit">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-velmora-text-muted hover:text-velmora-charcoal"
              >
                −
              </button>
              <span className="px-6 py-3 text-sm border-x border-velmora-border">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-velmora-text-muted hover:text-velmora-charcoal"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="btn btn-gold w-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-velmora-text-muted tracking-[0.05em]">
            Ships in 1-2 business days
          </p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-velmora-border">
            {/* Description */}
            <div>
              <button 
                onClick={() => toggleAccordion('description')}
                className="accordion-header w-full text-left"
              >
                <span>Description</span>
                <span>{activeAccordion === 'description' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 'description' ? 'open' : ''}`}>
                <div className="py-4 text-velmora-text-muted leading-relaxed pr-4">
                  {product.longDescription}
                </div>
              </div>
            </div>

            {/* Materials & Care */}
            <div>
              <button 
                onClick={() => toggleAccordion('materials')}
                className="accordion-header w-full text-left"
              >
                <span>Materials & Care</span>
                <span>{activeAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 'materials' ? 'open' : ''}`}>
                <div className="py-4 text-velmora-text-muted leading-relaxed pr-4 space-y-3">
                  <p><span className="text-velmora-charcoal">Material:</span> {product.material}</p>
                  <p>{product.care}</p>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div>
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="accordion-header w-full text-left"
              >
                <span>Shipping & Returns</span>
                <span>{activeAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 'shipping' ? 'open' : ''}`}>
                <div className="py-4 text-velmora-text-muted leading-relaxed pr-4 space-y-3 text-sm">
                  <p>Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
                  <p>30-day returns. Items must be unworn and in original packaging.</p>
                  <p>Each piece is carefully packaged in our signature gift box.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-velmora-border">
          <h3 className="serif text-2xl mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
