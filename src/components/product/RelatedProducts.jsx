import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'

export default function RelatedProducts({ productIds }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { addItem } = useCart()
  const related = getRelatedProducts(productIds)

  if (related.length === 0) return null

  const handleQuickAdd = (product) => {
    addItem(product, product.variants[0])
  }

  return (
    <section className="py-16 md:py-20 border-t border-velmora-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-center mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product, index) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden bg-velmora-warm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="mt-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wide group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-velmora-gray mt-0.5">{product.subtitle}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-xs text-velmora-stone">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium mt-1.5">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
