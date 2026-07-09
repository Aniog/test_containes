import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductVisual from './ProductVisual'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()

  const handleAdd = (event) => {
    event.preventDefault()
    addToCart(product, 1, 'Gold')
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block text-velmora-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold"
    >
      <article className="relative h-full overflow-hidden border border-velmora-stone bg-velmora-cream shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone image-gold-glow">
          <ProductVisual
            product={product}
            imageId={`product-primary-${product.id}`}
            ratio="3x4"
            width="700"
            className="absolute inset-0"
            mode="product"
          />
          <ProductVisual
            product={product}
            imageId={`product-worn-${product.id}`}
            ratio="3x4"
            width="700"
            className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
            mode="worn"
          />
          <button
            type="button"
            onClick={handleAdd}
            className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cream opacity-0 shadow-soft transition duration-300 hover:bg-velmora-goldDark group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
        <div className={compact ? 'p-4' : 'p-5'}>
          <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-velmora-goldDark">
            <span>{product.category}</span>
            <span className="flex items-center gap-1 text-velmora-espresso">
              <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
              {product.rating.toFixed(1)}
            </span>
          </div>
          <h3 className="font-serif text-lg font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-espresso">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-ink">
            {product.description}
          </p>
          <p className="mt-4 font-semibold text-velmora-espresso">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>
    </Link>
  )
}
