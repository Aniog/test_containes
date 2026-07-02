import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id)
  
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p>Product not found.</p>
          <Link to="/shop" className="text-[#8B7355] mt-2 inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F0EBE3] mb-3 overflow-hidden">
              <img 
                src={product.images[selectedVariant]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {['gold', 'silver'].map(v => (
                <button 
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`w-20 h-20 border-2 overflow-hidden ${selectedVariant === v ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={product.images[v]} alt={v} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name font-serif text-3xl tracking-[0.12em] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#C5A46E" className="text-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B635E]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-medium mt-4 mb-8">{formatPrice(product.price)}</p>

            <p className="text-[#6B635E] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-[#6B635E] mb-3">TONE</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill capitalize ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-[#6B635E] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F0EBE3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F0EBE3]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B635E]">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { id: 'desc', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: `${product.material}. Clean gently with a soft cloth. Avoid harsh chemicals and store in a dry place.` },
                { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. Items must be unworn with original packaging.' }
              ].map(section => (
                <div key={section.id}>
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B635E] text-sm leading-relaxed ${openAccordion === section.id ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E5DFD3]">
            <h3 className="font-serif text-2xl tracking-[0.08em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(p => (
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