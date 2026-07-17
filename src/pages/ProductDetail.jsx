import { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { CartContext, products } from '../App'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useContext(CartContext)
  
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return <div className="pt-20 text-center py-20">Product not found</div>
  }

  const images = [product.image, product.imageSecondary]
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  return (
    <div className="pt-20 max-w-[1200px] mx-auto px-6 pb-20">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm tracking-wider mb-8 hover:text-[#B8976E]">
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[4/3.5] bg-[#F5F2EB] mb-3 overflow-hidden">
            <img 
              src={images[currentImageIndex]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-300" 
            />
            {images.length > 1 && (
              <>
                <button 
                  onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full"
                >
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
                className={`w-20 h-20 border-2 ${currentImageIndex === idx ? 'border-[#B8976E]' : 'border-transparent'} overflow-hidden`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</div>
          <div className="text-2xl font-light mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} · {product.reviews} reviews</span>
          </div>

          <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase text-[#6B665F] mb-3">Tone</div>
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
            <div className="text-xs tracking-[0.1em] uppercase text-[#6B665F] mb-3">Quantity</div>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-2.5 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn-primary w-full mb-4">Add to Cart</button>
          <p className="text-center text-xs text-[#6B665F] tracking-wider">Ships in 1–2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
              { key: 'care', label: 'Materials & Care', content: `${product.material}. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.` },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. All pieces are final sale after wear.' }
            ].map(section => (
              <div key={section.key}>
                <button 
                  onClick={() => toggleAccordion(section.key)} 
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.08em]">{section.label}</span>
                  <span className="text-xl text-[#6B665F]">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
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
          <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-8">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail