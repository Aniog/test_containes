import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Plus, Minus, ChevronRight, Star } from 'lucide-react'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-amber-700 uppercase tracking-wider text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-amber-50 pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-gray-900">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Image Gallery */}
        <div>
          <div className="bg-white aspect-square overflow-hidden">
            <div className="w-full h-full bg-amber-100 flex items-center justify-center">
              <span className="text-amber-700 text-lg">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="py-8">
          <h1 className="font-serif text-4xl uppercase tracking-wider text-gray-900 mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} fill="#B8860B" className="text-amber-700" />
            ))}
            <span className="text-sm text-gray-600 ml-2">(24 reviews)</span>
          </div>

          <p className="text-2xl font-medium text-gray-900 mb-8">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Variant Selector - Gold/Silver Tone */}
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Tone</h3>
            <div className="flex gap-3">
              {['gold', 'silver'].map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={`px-6 py-2 border text-sm uppercase tracking-wider transition-all duration-300 ${
                    selectedTone === tone
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Quantity</h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={() => {
              addToCart({ ...product, tone: selectedTone, quantity })
              setQuantity(1)
            }}
            className="w-full bg-amber-700 text-white py-4 hover:bg-amber-800 transition-all duration-300 text-sm uppercase tracking-wider font-medium mb-4"
          >
            Add to Cart
          </button>

          <button className="w-full border border-gray-900 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium">
            Add to Wishlist
          </button>

          {/* Accordions */}
          <div className="mt-12 space-y-4">
            {[
              { title: 'Description', content: product.description },
              { title: 'Materials & Care', content: '18K gold plated over high-quality brass. Hypoallergenic. Avoid contact with water, perfume, and lotions. Store in provided pouch.' },
              { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be in original packaging.' }
            ].map((accordion) => (
              <details key={accordion.title} className="border-b border-gray-300 pb-4">
                <summary className="cursor-pointer font-serif text-lg hover:text-amber-700 transition-colors">
                  {accordion.title}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {accordion.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-4xl uppercase tracking-wider text-center mb-16 text-gray-900">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="bg-white overflow-hidden mb-4">
                <div className="w-full h-64 bg-amber-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <span className="text-amber-700 text-sm">{related.name}</span>
                </div>
              </div>
              <h3 className="font-serif text-lg uppercase tracking-wider text-gray-900 mb-2">
                {related.name}
              </h3>
              <p className="text-gray-600">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
