import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return <div className="p-12 text-center">Product not found</div>
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center text-sm tracking-[1px] text-[#8B7355] mb-8 hover:text-[#2C2522]">
        <ChevronLeft size={16} /> BACK TO SHOP
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#EDE6D9] rounded mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
              <div key={i} className="aspect-square bg-[#EDE6D9] rounded overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl tracking-[3px] mb-3">{product.name}</h1>
          <p className="text-2xl text-[#8B7355] mb-4">${product.price}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#C5A46E] fill-[#C5A46E]" />
              ))}
            </div>
            <span className="text-sm text-[#6B635C]">{product.rating} · {product.reviews} reviews</span>
          </div>

          <p className="text-[#6B635C] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-xs tracking-[2px] text-[#8B7355] mb-3">TONE</p>
            <div className="flex gap-3">
              {['gold', 'silver'].map((v) => (
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
            <p className="text-xs tracking-[2px] text-[#8B7355] mb-3">QUANTITY</p>
            <div className="flex items-center border border-[#D4C5B5] rounded w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-[#6B635C]">-</button>
              <span className="px-6 text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-[#6B635C]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
            ADD TO CART
          </button>

          {/* Accordions */}
          <div className="mt-10 border-t border-[#D4C5B5]">
            {[
              { key: 'desc', label: 'DESCRIPTION', content: product.description + ' Each piece is hand-finished and inspected before shipping.' },
              { key: 'care', label: 'MATERIALS & CARE', content: '18K gold plated over brass. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes and lotions. Store in the provided pouch.' },
              { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on all orders. 30-day returns accepted. Items must be unworn with original packaging.' },
            ].map((acc) => (
              <div key={acc.key}>
                <button onClick={() => toggleAccordion(acc.key)} className="accordion-header w-full text-left">
                  {acc.label}
                  <span className="text-xl">{openAccordion === acc.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-[#6B635C] leading-relaxed ${openAccordion === acc.key ? 'open' : ''}`}>
                  {acc.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-12 border-t border-[#D4C5B5]">
        <p className="text-xs tracking-[3px] text-[#8B7355] mb-8">YOU MAY ALSO LIKE</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[4/3.5] bg-[#EDE6D9] rounded mb-3 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="product-name text-xs tracking-[2px] mb-1">{p.name}</h4>
              <p className="text-sm text-[#8B7355]">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
