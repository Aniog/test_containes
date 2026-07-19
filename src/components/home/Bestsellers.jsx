import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/cart/CartContext'

const bestsellerIds = ['vivid-aura-jewels', 'majestic-flora-nectar', 'golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set']

export default function Bestsellers() {
  const bestsellers = products.filter(p => bestsellerIds.includes(p.id))
  const { addToCart } = useCart()
  const [addedIds, setAddedIds] = useState(new Set())

  const handleAdd = (product) => {
    addToCart(product.id, product.variants[0], 1)
    setAddedIds(prev => new Set([...prev, product.id]))
    setTimeout(() => setAddedIds(prev => {
      const next = new Set(prev)
      next.delete(product.id)
      return next
    }), 1500)
  }

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans font-medium mb-3">
            Loved by Our Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="img-swap-container bg-sand aspect-[3/4] mb-4 overflow-hidden">
                  {/* Primary image placeholder */}
                  <div className="w-full h-full bg-sand flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-taupe-light/20 flex items-center justify-center">
                      <span className="text-taupe-light/50 text-[8px] tracking-widest uppercase font-sans">Gold Jewelry</span>
                    </div>
                  </div>
                  {/* Secondary image placeholder */}
                  <div className="img-secondary bg-taupe-light/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-taupe-light/30 flex items-center justify-center">
                      <span className="text-taupe/40 text-[8px] tracking-widest uppercase font-sans">Detail View</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex items-start justify-between">
                <div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-[11px] md:text-xs tracking-wider uppercase text-espresso leading-tight mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-sans text-espresso font-medium">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <button
                  onClick={() => handleAdd(product)}
                  className="p-2 -mr-2 text-taupe hover:text-gold transition-colors"
                  aria-label="Add to cart"
                >
                  <Plus size={16} />
                  {addedIds.has(product.id) && (
                    <span className="absolute mt-1 text-[10px] text-gold font-sans whitespace-nowrap">Added</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors font-sans font-medium border-b border-gold/30 hover:border-gold-light pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
