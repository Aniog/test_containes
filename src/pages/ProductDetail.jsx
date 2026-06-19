import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { products } from '../App'
import { useCart } from '../App'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id)) || products[0]
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addToCart } = useCart()

  const images = [product.image, product.imageSecondary]
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#B89B6E] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden mb-3">
              <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-[#F5F2ED] overflow-hidden border-2 ${selectedImage === i ? 'border-[#B89B6E]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="product-name text-4xl tracking-[0.06em] mb-3 pr-8">{product.name}</div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl font-light">${product.price}</div>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="stars flex"><Star size={16} className="fill-[#B89B6E] text-[#B89B6E]" /></div>
                <span>{product.rating}</span>
                <span className="text-[#6B6560]">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-[#6B6560] mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] text-[#6B6560] mb-3">TONE</div>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button 
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] text-[#6B6560] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F5F2ED]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F5F2ED]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full py-4 text-base mb-3">
              Add to Cart
            </button>
            <div className="text-center text-xs text-[#6B6560]">Ships in 1-2 business days</div>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', title: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine collection offers the beauty of fine jewelry at an accessible price point.' },
                { key: 'care', title: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch.' },
                { key: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' }
              ].map(item => (
                <div key={item.key}>
                  <button 
                    onClick={() => toggleAccordion(item.key)}
                    className="accordion-header w-full text-left"
                  >
                    {item.title}
                    <span className="text-xl leading-none">{openAccordion === item.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B6560] ${openAccordion === item.key ? 'open' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <div className="text-xs tracking-[0.15em] text-[#6B6560] mb-6">YOU MAY ALSO LIKE</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden mb-3">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="product-name text-sm tracking-wider mb-0.5">{p.name}</div>
                <div className="text-sm">${p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail