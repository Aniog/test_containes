import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { getProductById, getRelatedProducts, products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = ({ onCartOpen }) => {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8B7E6B] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">RETURN TO SHOP</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)
  const images = [product.image, product.imageSecondary]

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    onCartOpen()
  }

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] mb-8 hover:text-[#C5A26F]">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#E8E4DE] mb-4 overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#E8E4DE] overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#C5A26F]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <p className="product-name text-3xl tracking-[0.15em] mb-3 pr-4">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C5A26F] text-[#C5A26F]" />
                ))}
              </div>
              <span className="text-sm text-[#8B7E6B]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#8B7E6B] leading-relaxed mb-8 max-w-md">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-3">FINISH</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
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
              <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#D4CFC4] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#E8E4DE]"
                >
                  −
                </button>
                <span className="px-6 py-3 border-x border-[#D4CFC4]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#E8E4DE]"
                >
                  +
                </button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#8B7E6B] tracking-[0.08em]">
              {product.inStock ? 'IN STOCK • READY TO SHIP' : 'PRE-ORDER'}
            </p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#D4CFC4]">
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.1em]">DESCRIPTION</span>
                  <span className="text-xl">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p className="text-[#8B7E6B] leading-relaxed pr-8">{product.details}</p>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.1em]">MATERIALS & CARE</span>
                  <span className="text-xl">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="text-[#8B7E6B] leading-relaxed pr-8 space-y-2 text-sm">
                    <p>• 18K gold plated brass base</p>
                    <p>• Hypoallergenic and nickel-free</p>
                    <p>• Wipe gently with soft cloth</p>
                    <p>• Store in provided pouch when not worn</p>
                    <p>• Avoid contact with perfumes and lotions</p>
                  </div>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.1em]">SHIPPING & RETURNS</span>
                  <span className="text-xl">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="text-[#8B7E6B] leading-relaxed pr-8 space-y-2 text-sm">
                    <p>• Free worldwide shipping on orders over $50</p>
                    <p>• Standard delivery: 5-7 business days</p>
                    <p>• 30-day returns for unworn items</p>
                    <p>• Complimentary gift wrapping available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#D4CFC4]">
            <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-2">DISCOVER MORE</p>
            <h3 className="serif text-3xl tracking-[-0.02em] mb-10">You May Also Like</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-square bg-[#E8E4DE] mb-4 overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="product-name text-sm tracking-[0.1em] mb-1">{related.name}</p>
                  <p className="text-sm text-[#8B7E6B]">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail