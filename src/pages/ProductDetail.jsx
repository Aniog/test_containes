import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'
import { toast } from 'sonner'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  const images = [product.image, product.hoverImage || product.image]
  const variants = ['Gold', 'Silver']

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    toast.success(`Added ${product.name} to cart`, {
      description: `${selectedVariant} • $${product.price}`,
    })
  }

  const nextImage = () => setCurrentImageIndex((currentImageIndex + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <div className="py-6 text-xs tracking-widest text-[#6B655F]">
          <Link to="/shop" className="hover:text-[#B8976E]">SHOP</Link> / {product.category.toUpperCase()} / {product.name}
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[4/3.2] bg-[#F5F2EC] overflow-hidden mb-3">
              <img 
                src={images[currentImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 border-2 ${currentImageIndex === idx ? 'border-[#B8976E]' : 'border-transparent'} overflow-hidden bg-[#F5F2EC]`}
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
              <div className="flex text-[#B8976E]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#6B655F]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-medium mb-8">${product.price}</div>

            <p className="body-text text-[#6B655F] mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[#6B655F]">Tone</div>
              <div className="flex gap-3">
                {variants.map(v => (
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
              <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[#6B655F]">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart — ${product.price * quantity}
            </button>
            <p className="text-center text-xs text-[#6B655F] tracking-widest">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated brass. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. Items must be unworn with tags attached.' },
              ].map(({ key, label, content }) => (
                <div key={key}>
                  <button 
                    onClick={() => toggleAccordion(key)}
                    className="accordion-header w-full text-left"
                  >
                    {label}
                    <span className="text-xl leading-none">{openAccordion === key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === key ? 'open' : ''} text-[#6B655F] body-text`}>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">DISCOVER MORE</div>
          <h3 className="serif text-4xl tracking-[-0.01em] mb-10">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail