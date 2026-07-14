import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('gold')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-brand-accent underline">Return to shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({ ...product, variant })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav className="text-xs text-brand-subtle mb-6">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-lg overflow-hidden bg-brand-warm border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-brand-muted">({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-medium text-brand-ink mb-6">${product.price}</p>
            <p className="text-brand-muted leading-relaxed mb-8">{product.description}</p>

            {/* Variant */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 rounded-full text-sm border transition-colors ${
                      variant === v
                        ? 'border-brand-ink bg-brand-ink text-white'
                        : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {v === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-line rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-warm rounded-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-warm rounded-full transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full btn-accent mb-4"
              disabled={added}
            >
              {added ? (
                <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Added to Bag</span>
              ) : (
                `Add to Cart — $${(product.price * quantity).toFixed(2)}`
              )}
            </Button>

            {/* Accordions */}
            <div className="border-t border-brand-line mt-8">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: product.care },
                { title: 'Shipping & Returns', content: product.shipping },
              ].map((item, i) => (
                <details key={i} className="border-b border-brand-line last:border-b-0">
                  <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                    <span className="text-sm font-medium uppercase tracking-widest">{item.title}</span>
                    <ChevronDown className="w-4 h-4 text-brand-subtle" />
                  </summary>
                  <p className="pb-4 text-sm text-brand-muted leading-relaxed">{item.content}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="section-title text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-warm mb-3">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="product-name text-xs md:text-sm mb-1">{p.name}</h3>
                  <p className="text-sm font-medium">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-brand-accent text-brand-accent' : 'text-brand-line'}`}
        />
      ))}
    </div>
  )
}
