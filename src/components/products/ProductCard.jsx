import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { productImageAssets } from '@/data/imageAssets'


export default function ProductCard({ product, onAddToCart, imageScope = 'product', priority = false }) {
  const images = productImageAssets[product.id]
  const titleId = `${imageScope}-${product.id}-title`
  const descId = `${imageScope}-${product.id}-desc`
  const categoryId = `${imageScope}-${product.id}-category`

  return (
    <article className="group relative text-velmora-espresso">
      <Link to={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft">
          <img
            src={images?.primary}
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            src={images?.hover || images?.primary}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ivory shadow-glow transition hover:bg-velmora-cacao"
            >
              <ShoppingBag className="h-4 w-4" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-5 space-y-2">
        <p id={categoryId} className="text-xs font-semibold uppercase tracking-luxe text-velmora-gold">
          {product.category}
        </p>
        <Link to={`/products/${product.slug}`} className="block">
          <h3 id={titleId} className="font-serifDisplay text-xl font-semibold uppercase tracking-luxe text-velmora-espresso transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-taupe">
          {product.shortDescription}
        </p>
        <p className="text-sm font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
