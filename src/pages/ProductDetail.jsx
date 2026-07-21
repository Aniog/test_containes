import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts, products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="btn btn-primary mt-6">Back to Shop</Link>
      </div>
    )
  }

  const variants = ['gold', 'silver']
  const images = product.images.length > 1 ? product.images : [...product.images, product.images[0]]

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center text-sm tracking-widest mb-8 hover:text-[#8B7355]">
        <ChevronLeft size={16} className="mr-1" /> BACK TO COLLECTION
      </Link>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-[#F0EBE3] relative overflow-hidden mb-4">
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
                className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <p className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-light">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[#6B635E] ml-1">({product.reviews})</span>
              </div>
            </div>
          </div>

          <p className="text-[#6B635E] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="uppercase tracking-[0.15em] text-xs mb-3">Tone</p>
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
            <p className="uppercase tracking-[0.15em] text-xs mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5DFD6] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#9A9088] tracking-widest">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD6]">
            {[
              { key: 'desc', label: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. We source only the finest materials to ensure lasting beauty and comfort.' },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over a hypoallergenic base. To maintain luster, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Complimentary worldwide shipping on orders over $75. All orders ship within 1-2 business days. Returns accepted within 30 days of delivery.' },
            ].map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-header w-full text-left"
                >
                  <span className="tracking-widest text-sm">{section.label}</span>
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B635E] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-24 pt-12 border-t border-[#E5DFD6]">
        <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355] mb-8">You May Also Like</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-square bg-[#F0EBE3] mb-4 overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="product-name text-sm tracking-wider mb-1">{p.name}</p>
              <p className="text-[#8B7355]">${p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail