import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import { toast } from 'sonner'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) return <div className="pt-24 text-center">Product not found</div>

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    toast.success(`${product.name} added to cart`)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] mb-8 hover:text-[#C5A26F]">
          <ChevronLeft size={16} /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden mb-3">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageAlt, product.image, product.imageAlt].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F0EBE3] overflow-hidden">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[#C5A26F]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm text-[#8B7E6F]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="text-2xl mb-8">{formatPrice(product.price)}</div>

            <p className="text-[#6B6B5F] mb-8 leading-relaxed">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <div className="uppercase text-xs tracking-[0.1em] mb-3 text-[#C5A26F]">Tone</div>
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
              <div className="uppercase text-xs tracking-[0.1em] mb-3 text-[#C5A26F]">Quantity</div>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-[#E5E0D8]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-[#E5E0D8]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#8B7E6F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and inspected for quality before shipping.' },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping. 30-day returns accepted on unworn items in original packaging. Contact us for any questions.' },
              ].map(({ key, label, content }) => (
                <div key={key}>
                  <button className="accordion-trigger" onClick={() => toggleAccordion(key)}>
                    {label} <span>{openAccordion === key ? '−' : '+'}</span>
                  </button>
                  {openAccordion === key && (
                    <div className="pb-6 text-sm text-[#6B6B5F] leading-relaxed">{content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <div className="uppercase text-xs tracking-[0.15em] text-[#C5A26F] mb-6">YOU MAY ALSO LIKE</div>
          <div className="product-grid">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="block">
                <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="product-name text-sm tracking-[0.12em]">{p.name}</div>
                <div className="text-sm text-[#8B7E6F]">{formatPrice(p.price)}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}