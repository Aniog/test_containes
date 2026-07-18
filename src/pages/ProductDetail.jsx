import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/home/ProductCard'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="heading-serif text-3xl mb-4">Piece not found</h1>
        <Link to="/shop" className="btn btn-gold">Browse Collection</Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3.5] bg-vel-bg-alt overflow-hidden mb-4 rounded-sm">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-vel-bg-alt overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-vel-gold' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:pt-2">
          <div className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-3 pr-4">
            {product.name}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-2xl font-medium">{formatPrice(product.price)}</div>
            <div className="flex items-center gap-1 text-sm">
              <span className="stars">★★★★★</span>
              <span className="text-vel-muted ml-1">{product.rating} ({product.reviewCount})</span>
            </div>
          </div>

          <p className="text-vel-muted leading-relaxed mb-8 pr-4">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase text-vel-muted mb-3">Tone</div>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase text-vel-muted mb-3">Quantity</div>
            <div className="qty-selector inline-flex">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="qty-btn">-</button>
              <div className="qty-value">{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)} className="qty-btn">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-vel-light tracking-wide">Ships in 1–2 business days</p>

          {/* Accordions */}
          <div className="mt-10 border-t border-vel-border-light">
            {/* Description */}
            <div>
              <button
                onClick={() => toggleAccordion('desc')}
                className="accordion-trigger"
              >
                <span>Description</span>
                <span className="text-xl leading-none">{openAccordion === 'desc' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'desc' ? 'open' : ''}`}>
                <div className="py-4 text-vel-muted text-sm leading-relaxed pr-4">
                  {product.description} Each piece is hand-finished in our atelier and inspected for quality before it reaches you.
                </div>
              </div>
            </div>

            {/* Materials & Care */}
            <div>
              <button
                onClick={() => toggleAccordion('materials')}
                className="accordion-trigger"
              >
                <span>Materials & Care</span>
                <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                <div className="py-4 text-vel-muted text-sm leading-relaxed pr-4 space-y-3">
                  <p><strong>Material:</strong> {product.material}</p>
                  <p>To preserve the finish, avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear. Store in the provided pouch when not in use.</p>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div>
              <button
                onClick={() => toggleAccordion('shipping')}
                className="accordion-trigger"
              >
                <span>Shipping & Returns</span>
                <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                <div className="py-4 text-vel-muted text-sm leading-relaxed pr-4 space-y-3">
                  <p>Free worldwide shipping on all orders. Delivery in 3–7 business days.</p>
                  <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-12 border-t border-vel-border-light">
        <div className="mb-8">
          <div className="uppercase tracking-[0.12em] text-xs text-vel-gold mb-1">Curated for You</div>
          <h3 className="heading-serif text-3xl tracking-[-0.01em]">You May Also Like</h3>
        </div>
        <div className="product-grid">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
