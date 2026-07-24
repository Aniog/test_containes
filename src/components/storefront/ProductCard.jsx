import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProductImageUrl } from '@/lib/strk-images'
import { formatPrice } from '@/lib/utils'

const ProductCard = ({ product, onAddToCart, context = 'grid' }) => {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const primaryImageId = `${product.imgId}-${context}`
  const hoverImageId = `${product.hoverImgId}-${context}`


  return (
    <article className="group flex h-full flex-col bg-velmora-porcelain text-velmora-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-velvet">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen/50">
        <Link
          to={`/product/${product.id}`}
          className="block h-full w-full"
          aria-label={`View ${product.name}`}
        >
          <img
            alt={`${product.name} styled on warm neutral jewelry set`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getProductImageUrl(product, context, 'primary')}
          />
          <img
            alt={`${product.name} close detail view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={hoverImageId}
            data-strk-img={`[${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getProductImageUrl(product, context, 'hover')}
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-0 items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-porcelain opacity-100 shadow-soft transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-velmora-gold sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="flex flex-1 flex-col border-t border-velmora-linen p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-[0.65rem] font-bold uppercase tracking-luxury text-velmora-goldDark">
          <span>{product.category}</span>
          <span>{formatPrice(product.price)}</span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3
            id={titleId}
            className="font-serifDisplay text-xl font-semibold uppercase tracking-product text-velmora-ink transition group-hover:text-velmora-goldDark"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-mauve">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
