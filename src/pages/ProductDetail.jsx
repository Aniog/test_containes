import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl mb-4">Piece not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
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
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest mb-8 hover:text-[#C5A46E]">
          <ChevronLeft className="w-4 h-4" /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F1E9] overflow-hidden mb-4">
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
                    className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImage === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-[#C5A46E]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[#5C5349] ml-1">{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="body-text text-[#5C5349] mb-8 pr-4">{product.shortDescription}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] text-[#5C5349] mb-3">TONE</div>
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
              <div className="text-xs tracking-[0.1em] text-[#5C5349] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#EDE8E0] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-[#F5F1E9] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2.5 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-[#F5F1E9] transition-colors"
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
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
            <p className="text-center text-xs text-[#5C5349]">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#EDE8E0]">
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  Description
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content body-text">{product.description}</div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  Materials & Care
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content body-text">
                    <p className="mb-3"><strong>Material:</strong> {product.material}</p>
                    <p className="mb-3">Our demi-fine pieces are crafted from high-quality brass with a thick layer of 18K gold plating. Each piece is hypoallergenic and designed for everyday wear.</p>
                    <p>To care for your jewelry: avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.</p>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  Shipping & Returns
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content body-text">
                    <p className="mb-3"><strong>Shipping:</strong> Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                    <p className="mb-3"><strong>Returns:</strong> 30-day returns on unworn items in original packaging. Return shipping is free for exchanges.</p>
                    <p>For questions, please reach out to <a href="mailto:hello@velmora.co" className="underline">hello@velmora.co</a></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#EDE8E0]">
            <h3 className="font-serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
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

export default ProductDetail
