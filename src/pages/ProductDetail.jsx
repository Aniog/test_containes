import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/ProductCard'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))
  const { addToCart } = useCart()
  
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F1EA] mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F5F1EA] overflow-hidden cursor-pointer border border-[#E5DFD3]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl mb-3 tracking-[0.06em] pr-8">
              {product.name}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="stars flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-[#C5A46E]" />
                  ))}
                </div>
                <span className="text-[#6B665F]">({product.reviews})</span>
              </div>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">FINISH</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
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
              <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F5F1EA]"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F5F1EA]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { id: 'desc', title: 'Description', content: product.description + ' Each piece is hand-finished in our atelier, ensuring the highest standards of quality and attention to detail.' },
                { id: 'care', title: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft cloth. Store in the provided pouch when not in use.` },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging. Please contact us for return authorization.' },
              ].map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{section.title}</span>
                    <span className="text-xl">{openAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === section.id ? 'open' : ''}`}>
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
            <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">DISCOVER MORE</div>
            <h3 className="font-serif text-3xl">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail