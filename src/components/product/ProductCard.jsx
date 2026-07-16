import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import JewelryImage from '@/components/common/JewelryImage.jsx'

export default function ProductCard({ product, onAdd, context = 'grid', compact = false }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden rounded-t-full rounded-b-2xl bg-velmora-linen shadow-card">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <JewelryImage
            alt={product.name}
            imgId={`${context}-${product.imgId}`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="700"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <JewelryImage
            alt={`${product.name} worn`}
            imgId={`${context}-${product.hoverImgId}`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="700"
            className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <button
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-semibold uppercase tracking-refined text-velmora-ivory opacity-0 shadow-soft transition duration-300 hover:bg-velmora-cocoa group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => onAdd(product)}
        >
          Add to Cart
        </button>
      </div>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <div className="mb-2 flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} star rating`}>
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
          <span className="ml-1 text-xs font-medium text-velmora-taupe">({product.reviews})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="font-display text-lg font-semibold uppercase leading-6 tracking-product text-velmora-espresso transition hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 text-sm leading-6 text-velmora-taupe">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-2xl text-velmora-espresso">${product.price}</p>
          <button className="rounded-full border border-velmora-line p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
