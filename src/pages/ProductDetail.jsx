import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById, getRelatedProducts, products } from '@/data/products'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id, 4)
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B635C] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] uppercase text-[#6B635C] mb-8">
          <Link to="/shop" className="hover:text-[#B89778]">Shop</Link> / {product.name}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#EDE8E0] overflow-hidden mb-3">
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
                    className={`gallery-thumb w-20 h-20 bg-[#EDE8E0] overflow-hidden ${selectedImage === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-2 text-sm">
                <StarRating rating={product.rating} size={14} />
                <span className="text-[#6B635C]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#1A1A1A] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.12em] uppercase text-[#6B635C] mb-3">Tone</div>
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
              <div className="text-xs tracking-[0.12em] uppercase text-[#6B635C] mb-3">Quantity</div>
              <div className="flex items-center border border-[#EDE8E0] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#EDE8E0] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-[#EDE8E0]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#EDE8E0] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B635C]">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-[#EDE8E0]">
              <div>
                <button
                  onClick={() => toggleAccordion('desc')}
                  className="accordion-trigger"
                >
                  Description
                  <span className="text-lg leading-none">{openAccordion === 'desc' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'desc' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-[#1A1A1A] leading-relaxed pr-4">
                    {product.description} Each piece is hand-finished in our atelier and inspected before it reaches you.
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-trigger"
                >
                  Materials & Care
                  <span className="text-lg leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-[#1A1A1A] leading-relaxed pr-4 space-y-2">
                    <p><strong>Material:</strong> {product.material}</p>
                    <p>To preserve the finish, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not worn. Clean gently with a soft cloth.</p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-trigger"
                >
                  Shipping & Returns
                  <span className="text-lg leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-[#1A1A1A] leading-relaxed pr-4 space-y-2">
                    <p>Free worldwide shipping on all orders. Delivery in 3–7 business days.</p>
                    <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#EDE8E0]">
            <h3 className="serif-heading text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
