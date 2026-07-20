import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'
import JewelryVisual from '@/components/product/JewelryVisual'

export default function ProductCard({ product, contextId = 'product-grid' }) {
  const { addItem } = useCart()
  const titleId = `${contextId}-${product.id}-title`
  const descId = `${contextId}-${product.id}-desc`

  return (
    <article className="group relative overflow-hidden border border-velmora-sand/70 bg-velmora-porcelain text-velmora-ink shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxury">
      <Link to={`/product/${product.id}`} className="block text-velmora-ink" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/30">
          <JewelryVisual product={product} className="transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <JewelryVisual product={product} variant="worn" className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-luxury text-velmora-taupe">{product.category}</p>
        <Link to={`/product/${product.id}`} className="text-velmora-ink transition hover:text-velmora-gold">
          <h3 id={titleId} className="font-serif text-xl uppercase tracking-luxury leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <div className="flex items-center justify-between border-t border-velmora-sand/80 pt-4">
          <span className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</span>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-2 rounded-full bg-velmora-espresso px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </article>
  )
}
