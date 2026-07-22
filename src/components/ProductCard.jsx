import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from './CartContext'
import ProductImage from './ProductImage'

function ProductCard({ product, scope = 'product-card', compact = false }) {
  const { addToCart } = useCart()
  const nameId = `${scope}-${product.id}-name`
  const descId = `${scope}-${product.id}-desc`
  const stylingId = `${scope}-${product.id}-styling`

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-velmora-linen bg-velmora-ivory text-velmora-umber shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-pearl">
          <ProductImage
            alt={`${product.name} on warm neutral styling`}
            imgId={`${scope}-${product.id}-primary-img`}
            query={`[${descId}] [${nameId}]`}
            ratio="4x3"
            width="700"
            className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
          />
          <ProductImage
            alt={`${product.name} worn close up`}
            imgId={`${scope}-${product.id}-hover-img`}
            query={`[${stylingId}] [${descId}] [${nameId}]`}
            ratio="4x3"
            width="700"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-obsidian px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-velmora-ivory transition hover:bg-velmora-antique hover:text-velmora-ivory"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-1 text-velmora-antique" aria-label={`${product.rating} stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
          {!compact && <span className="ml-2 text-xs text-velmora-cocoa">{product.reviews}</span>}
        </div>
        <Link to={`/products/${product.id}`} className="group/name">
          <h3 id={nameId} className="font-serif text-xl font-semibold uppercase leading-snug tracking-luxe text-velmora-umber transition group-hover/name:text-velmora-antique">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-cocoa">
          {product.description}
        </p>
        <span id={stylingId} className="sr-only">
          warm editorial demi fine gold jewelry worn on model neutral background
        </span>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-base font-semibold text-velmora-umber">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="border border-velmora-linen px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-luxe text-velmora-umber transition hover:border-velmora-champagne hover:bg-velmora-champagne hover:text-velmora-obsidian md:hidden"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
