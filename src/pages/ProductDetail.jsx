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
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#B8976D] mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#B8976D]">
        <ChevronLeft size={16} /> BACK TO COLLECTION
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F1EA] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageAlt, product.image, product.imageAlt].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F5F1EA] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.1em] mb-3">{product.name}</div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="#B8976D" className="text-[#B8976D]" />
              ))}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="text-2xl mb-8">${product.price}</div>

          <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] mb-3 text-[#6B665F]">TONE</div>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(v => (
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
            <div className="text-xs tracking-[0.15em] mb-3 text-[#6B665F]">QUANTITY</div>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F5F1EA]">-</button>
              <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F5F1EA]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished with care in our New York studio.' },
              { key: 'care', label: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.` },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day returns for unworn items in original packaging. Please allow 5-10 business days for delivery.' }
            ].map(item => (
              <div key={item.key}>
                <button
                  onClick={() => toggleAccordion(item.key)}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.1em]">{item.label}</span>
                  <span className="text-xl">{openAccordion === item.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed ${openAccordion === item.key ? 'open' : ''}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t">
        <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-3">YOU MAY ALSO LIKE</div>
        <h3 className="font-serif text-3xl mb-8">Complete the Look</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-square bg-[#F5F1EA] mb-4 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</div>
              <div className="text-sm text-[#6B665F]">${p.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail