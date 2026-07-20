import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import JewelryImage from './JewelryImage.jsx'
import { formatPrice } from '@/lib/cart.js'

const ProductCard = ({ product, onAddToCart, compact = false }) => {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group bg-velmora-ivory text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
        <Link to={`/products/${product.slug}`} className="block h-full" aria-label={`View ${product.name}`}>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-velmora-espresso/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          <JewelryImage
            imgId={`product-primary-${product.id}-a9f4`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="900"
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <JewelryImage
            imgId={`product-secondary-${product.id}-d72b`}
            query={`[${titleId}] [${descId}]`}
            ratio="4x3"
            width="900"
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 z-20 translate-y-0 opacity-100 transition duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-ivory"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className={compact ? 'p-4' : 'p-5'}>
        <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.28em] text-velmora-taupe">
          {product.category}
        </p>
        <Link to={`/products/${product.slug}`}>
          <h3
            id={titleId}
            className="font-serif text-xl font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-goldDark"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-taupe">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-stone/70 pt-4">
          <span className="text-sm font-semibold text-velmora-espresso">{formatPrice(product.price)}</span>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-taupe">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
