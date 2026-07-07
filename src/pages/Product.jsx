import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { getProductBySlug, getRelatedProducts, products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const Product = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
      </div>
    )
  }

  const related = getRelatedProducts(product)

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      variant: selectedVariant,
      quantity,
      image: product.images[0],
    })
    // Reset quantity after adding
    setQuantity(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-8">
        {/* Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Details */}
        <div className="pt-2">
          <div className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-3">
            {product.name}
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-light">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1 text-sm">
              <span className="stars">★★★★★</span>
              <span className="text-[var(--color-text-muted)] ml-1">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.12em] uppercase mb-3 text-[var(--color-text-muted)]">
              Tone
            </div>
            <div className="flex gap-2">
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
            <div className="text-xs tracking-[0.12em] uppercase mb-3 text-[var(--color-text-muted)]">
              Quantity
            </div>
            <div className="qty-selector inline-flex">
              <button 
                className="qty-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <div className="qty-value">{quantity}</div>
              <button 
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary w-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-[var(--color-text-muted)] tracking-[0.08em]">
            Ships in 1-2 business days
          </p>

          {/* Accordions */}
          <div className="mt-12">
            <Accordion title="Description" defaultOpen>
              <p>{product.longDescription}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3"><strong>Materials:</strong> {product.material}</p>
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">• Free worldwide shipping on all orders</p>
              <p className="mb-2">• Ships within 1-2 business days</p>
              <p className="mb-2">• 30-day returns on unworn items</p>
              <p>• International duties may apply</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-1">Curated For You</div>
            <h3 className="serif text-2xl tracking-[-0.01em]">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
