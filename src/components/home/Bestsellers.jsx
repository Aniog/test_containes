import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

export default function Bestsellers() {
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    addItem(product, product.variants[0])
    openCart()
  }

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center mb-2">Bestsellers</h2>
      <p className="text-sm text-velmora-muted text-center mb-12">The pieces everyone is wearing</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group block"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`bestseller-${product.id}`}
                data-strk-img={`[bestseller-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Quick add */}
              <button
                onClick={(e) => handleQuickAdd(e, product)}
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <span id={`bestseller-name-${product.id}`} className="hidden">{product.name}</span>
            <p className="font-serif text-xs tracking-widest uppercase truncate">{product.name}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-hairline'}`} />
              ))}
              <span className="text-[10px] text-velmora-muted ml-1">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
