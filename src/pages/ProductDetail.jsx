import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  const related = getRelatedProducts(id)

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-vel-muted mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
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
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div>
            <div className="gallery-main mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`gallery-thumb ${selectedImage === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars">★★★★★</div>
                <span className="text-vel-muted">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-vel-muted leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-vel-charcoal">Tone</div>
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
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-vel-charcoal">Quantity</div>
              <div className="flex items-center border border-vel-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-vel-bg-alt"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm border-x border-vel-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-vel-bg-alt"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-vel-muted tracking-widest">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-vel-border">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full"
                >
                  <span>Description</span>
                  {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">{product.description}</div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full"
                >
                  <span>Materials & Care</span>
                  {openAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content">
                    <p className="mb-3">{product.details}</p>
                    <p>{product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full"
                >
                  <span>Shipping & Returns</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content">
                    <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
                    <p>30-day returns. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-2">Discover More</div>
            <h2 className="section-title">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail