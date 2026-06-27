import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
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
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-[#7A7368] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F5F2EC] mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#F5F2EC] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl">${product.price}</div>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="stars flex">
                  {[...Array(Math.floor(product.rating))].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[#7A7368] ml-1">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-[#2C2823]/80 leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="filter-label mb-3">Tone</div>
              <div className="flex gap-3">
                {product.variants.map(variant => (
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
              <div className="filter-label mb-3">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#E5DFD3]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#E5DFD3]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4 text-base py-[18px]">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#7A7368]">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-12 space-y-px border-t border-[#E5DFD3]">
              {[
                { key: 'description', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: product.care },
                { key: 'shipping', label: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` }
              ].map(section => (
                <div key={section.key} className="border-b border-[#E5DFD3]">
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-sm tracking-[0.1em]">{section.label}</span>
                    <span className="text-xl text-[#8B7355]">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                    <p className="text-[#2C2823]/80 pb-6 pr-4 text-sm leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
            <div className="mb-10">
              <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER MORE</div>
              <h3 className="serif text-3xl tracking-[0.03em]">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
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
