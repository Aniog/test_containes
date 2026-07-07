import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()
  
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-20 px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#B8976E] underline">Back to shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#B8976E]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#1A1816] mb-3 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#1A1816] overflow-hidden cursor-pointer border border-transparent hover:border-[#B8976E]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">
              {product.name}
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl text-[#B8976E]">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B8976E] text-[#B8976E]" />
                ))}
                <span className="ml-2 text-[#6B665F]">({product.reviews})</span>
              </div>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Tone</div>
              <div className="flex gap-3">
                {['gold', 'silver'].map(variant => (
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
              <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Quantity</div>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2.5 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { id: 'desc', label: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine collection offers the warmth and beauty of solid gold at a more accessible price point.' },
                { id: 'materials', label: 'Materials & Care', content: '18K gold plated over a hypoallergenic base. To maintain luster, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use.' },
                { id: 'shipping', label: 'Shipping & Returns', content: 'Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' }
              ].map(section => (
                <div key={section.id}>
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full text-left"
                  >
                    <span className="text-sm tracking-[0.1em]">{section.label}</span>
                    <span className="text-xl text-[#B8976E]">{openAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed ${openAccordion === section.id ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.2em] text-[#B8976E] uppercase">Complete the Look</span>
            <h3 className="serif text-3xl mt-2">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
