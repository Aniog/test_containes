import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-20 text-center py-20">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#B8976E] hover:underline">Back to shop</Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm tracking-[0.05em] text-[#6B665F] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#F0EBE3] mb-3 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#B8976E]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B8976E] text-[#B8976E]" />
                ))}
              </div>
              <span className="text-xs text-[#6B665F]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <h1 className="product-name text-4xl tracking-[0.12em] leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-2xl font-medium mb-6">${product.price}</p>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="filter-label mb-3">FINISH</div>
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
              <div className="filter-label mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-[#E5DFD3]"
                >
                  −
                </button>
                <span className="px-6 py-2.5 border-x border-[#E5DFD3]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-[#E5DFD3]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#6B665F]">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-[#E5DFD3] border-t border-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: product.care },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-trigger w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="tracking-[0.08em] text-sm">{section.label}</span>
                    <span className="text-xl text-[#B8976E]">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div
                    className={`accordion-content text-sm text-[#6B665F] leading-relaxed pb-5 ${
                      openAccordion === section.key ? 'open' : ''
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
            <h3 className="serif text-3xl tracking-[-0.01em] mb-8 text-center">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage
