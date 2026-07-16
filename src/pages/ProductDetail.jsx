import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts, products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id)
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-24 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/shop" className="text-[#8B7355]">Return to Shop →</Link>
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
    <div className="max-w-[1300px] mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-xs tracking-[0.1em] text-[#6B665F]">
        <Link to="/shop" className="hover:text-[#2C2825]">SHOP</Link> / {product.category.toUpperCase()} / <span className="text-[#2C2825]">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3.2] bg-[#F8F5F1] relative overflow-hidden mb-3">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 bg-[#F8F5F1] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#2C2825]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-4xl tracking-[0.12em] mb-3 pr-4">{product.name}</div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="star fill-current" />
              ))}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <div className="text-2xl mb-8">${product.price}</div>

          <p className="text-[15px] leading-relaxed text-[#2C2825] mb-8 pr-4">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">FINISH</div>
            <div className="flex gap-3">
              {product.variants.map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">QUANTITY</div>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn-accent w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs tracking-[0.1em] text-[#6B665F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD3]">
            {/* Description */}
            <div>
              <button onClick={() => toggleAccordion('desc')} className="accordion-header w-full text-left">
                <span>Description</span>
                <span className="text-xl leading-none">{openAccordion === 'desc' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed ${openAccordion === 'desc' ? 'open' : ''}`}>
                {product.details}
              </div>
            </div>

            {/* Materials & Care */}
            <div>
              <button onClick={() => toggleAccordion('care')} className="accordion-header w-full text-left">
                <span>Materials & Care</span>
                <span className="text-xl leading-none">{openAccordion === 'care' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed ${openAccordion === 'care' ? 'open' : ''}`}>
                {product.care}
              </div>
            </div>

            {/* Shipping & Returns */}
            <div>
              <button onClick={() => toggleAccordion('ship')} className="accordion-header w-full text-left">
                <span>Shipping & Returns</span>
                <span className="text-xl leading-none">{openAccordion === 'ship' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed ${openAccordion === 'ship' ? 'open' : ''}`}>
                Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-24 pt-12 border-t">
        <div className="mb-10">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER MORE</span>
          <h3 className="serif text-4xl tracking-[-0.01em] mt-1">You May Also Like</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail