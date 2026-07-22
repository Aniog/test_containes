import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import JewelryVisual from '@/components/product/JewelryVisual.jsx'

export default function ProductCard({ product, onAdd, imageContext = 'product-card' }) {
  const titleId = `${imageContext}-${product.id}-name`
  const descId = `${imageContext}-${product.id}-tagline`

  return (
    <article className="group relative flex h-full flex-col border border-velmora-mist/80 bg-velmora-ivory text-velmora-espresso transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne">
          <JewelryVisual product={product} label="Product study" className="transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <JewelryVisual product={product} variant="styled" label="Styled view" className="absolute inset-0 scale-105 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100" />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                onAdd(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-velmora-burnished">{product.category}</p>
        <Link to={`/products/${product.id}`} className="mt-3 block">
          <h3 id={titleId} className="font-serif text-xl font-semibold uppercase leading-snug tracking-[0.18em] text-velmora-espresso">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 min-h-12 text-sm leading-6 text-velmora-cacao/75">
          {product.tagline}
        </p>
        <p className="mt-auto pt-5 text-sm font-bold tracking-wide text-velmora-espresso">${product.price}</p>
      </div>
    </article>
  )
}
