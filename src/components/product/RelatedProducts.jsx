import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/cart/CartContext'

export default function RelatedProducts({ currentProductId }) {
  const { addToCart } = useCart()
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="py-16 md:py-20 bg-cream border-t border-taupe-light/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso tracking-wide text-center mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square bg-sand mb-4 flex items-center justify-center hover-lift">
                  <div className="w-12 h-12 rounded-full bg-taupe-light/20" />
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
                  onClick={() => addToCart(product.id, product.variants[0], 1)}
                  className="p-2 -mr-2 text-taupe hover:text-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
