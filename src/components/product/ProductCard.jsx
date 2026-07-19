import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import EditorialImage from '@/components/common/EditorialImage'
import Rating from '@/components/common/Rating'

const ProductCard = ({ product, onAdd, contextId = 'bestsellers' }) => {
  const titleId = `${contextId}-${product.id}-title`
  const descId = `${contextId}-${product.id}-desc`
  const imageQuery = `[${descId}] [${titleId}] [${contextId}-subtitle] [${contextId}-title]`

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden rounded-t-full bg-velmora-champagne shadow-sm transition duration-500 group-hover:shadow-editorial">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <EditorialImage
            id={`${contextId}-${product.id}-main-a8f2`}
            query={imageQuery}
            ratio="3x4"
            width="700"
            alt={product.name}
            className="aspect-[3/4] rounded-t-full"
            imgClassName="group-hover:scale-105"
          />
          <EditorialImage
            id={`${contextId}-${product.id}-hover-b3d7`}
            query={imageQuery}
            ratio="3x4"
            width="700"
            alt={`${product.name} styled detail`}
            className="absolute inset-0 aspect-[3/4] rounded-t-full opacity-0 transition duration-700 group-hover:opacity-100"
            imgClassName="scale-105 group-hover:scale-100"
          />
        </Link>
        <button
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-velmora-ivory shadow-glow transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={() => onAdd(product)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add
        </button>
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 id={titleId} className="font-serif text-xl font-semibold uppercase leading-6 tracking-[0.18em] text-velmora-ink transition hover:text-velmora-gold-deep">
                {product.name}
              </h3>
            </Link>
            <p id={descId} className="mt-2 font-sans text-sm leading-6 text-velmora-taupe">
              {product.description}
            </p>
          </div>
          <p className="whitespace-nowrap font-sans text-sm font-bold text-velmora-ink">${product.price}</p>
        </div>
        <Rating value={product.rating} count={product.reviews} className="mt-3" />
      </div>
    </article>
  )
}

export default ProductCard
