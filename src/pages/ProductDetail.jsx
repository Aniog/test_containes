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

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="btn btn-outline mt-4">Back to Shop</Link>
      </div>
    )
  }

  const variants = ['Gold', 'Silver']

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#B8976F]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F2ED] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, idx) => (
              <div key={idx} className="aspect-square bg-[#F5F2ED] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-[#6B6560]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#6B6560] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">FINISH</p>
            <div className="flex gap-3">
              {variants.map((v) => (
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
            <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">QUANTITY</p>
            <div className="flex items-center border border-[#E5DFD6] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B6560]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD6]">
            {[
              { key: 'desc', title: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine collection offers the beauty of fine jewelry at an accessible price point.' },
              { key: 'care', title: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use.' },
              { key: 'ship', title: 'Shipping & Returns', content: 'Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
            ].map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-header w-full text-left"
                >
                  {section.title}
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-[#6B6560] leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t border-[#E5DFD6]">
        <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-8">YOU MAY ALSO LIKE</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-square bg-[#F5F2ED] mb-4 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</p>
              <p className="text-sm text-[#6B6560]">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
