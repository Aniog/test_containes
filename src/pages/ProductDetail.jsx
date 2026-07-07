import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === Number(id))
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-heading text-2xl text-[#1C1814]">Product Not Found</h2>
          <Link to="/shop" className="btn-primary inline-block mt-4 text-xs">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem({ ...product, image: product.images[0], quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 font-body text-xs text-[#8A8278]">
          <Link to="/" className="hover:text-[#1C1814] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#1C1814] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1C1814]">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#F5EFE6] overflow-hidden mb-4">
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
                  className={`w-16 h-20 bg-[#F5EFE6] overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#C9A96E]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-[#E8DFD3]'}`} />
                ))}
              </div>
              <span className="font-body text-[10px] text-[#8A8278] tracking-wider">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <h1 className="product-name text-xl md:text-2xl text-[#1C1814] mt-2">{product.name}</h1>
            <p className="font-heading text-2xl md:text-3xl text-[#C9A96E] mt-2">${product.price}</p>

            <p className="font-body text-sm text-[#8A8278] leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-body text-[10px] uppercase tracking-widest text-[#1C1814] mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 font-body text-xs uppercase tracking-wider border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#1C1814] bg-[#1C1814] text-white'
                        : 'border-[#E8DFD3] text-[#1C1814] hover:border-[#1C1814]'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-body text-[10px] uppercase tracking-widest text-[#1C1814] mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#E8DFD3] flex items-center justify-center text-[#1C1814] hover:border-[#1C1814] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="font-body text-base text-[#1C1814] w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#E8DFD3] flex items-center justify-center text-[#1C1814] hover:border-[#1C1814] transition-colors"
                  aria-label="Increase quantity"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 font-body text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 mt-8 ${
                added
                  ? 'bg-[#1C1814] text-white'
                  : 'bg-[#C9A96E] text-white hover:bg-[#B8944F]'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart — $' + (product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E8DFD3]">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: '18K gold plated over sterling silver. Hypoallergenic and nickel-free. To maintain brilliance, avoid contact with lotions, perfumes, and water. Store in a cool, dry place. Gently polish with a soft cloth.' },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. 30-day return policy for unworn items in original packaging. Full refunds issued within 5-7 business days of receipt.' },
              ].map((item) => (
                <div key={item.key} className="border-b border-[#E8DFD3]">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 font-body text-xs uppercase tracking-wider text-[#1C1814] hover:text-[#C9A96E] transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.key ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-body text-sm text-[#8A8278] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-24">
            <div className="text-center mb-10">
              <h2 className="section-title">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[4/5] bg-[#F5EFE6] overflow-hidden mb-3">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-[#1C1814] truncate">{rp.name}</h3>
                  <p className="product-price mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}