import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductMedia from './ProductMedia'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, onAddToCart }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden rounded-t-full bg-velmora-sand shadow-soft">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <ProductMedia
            alt={product.name}
            className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
            imgId={product.imageIds.hero}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="800"
          />
          <ProductMedia
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
            imgId={product.imageIds.hover}
            query={`[${titleId}] [${descId}]`}
            ratio="4x3"
            width="800"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-luxury text-velmora-ivory opacity-0 shadow-soft transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="border-x border-b hairline bg-velmora-ivory px-4 py-5 text-center">
        <p id={descId} className="mb-2 text-xs uppercase tracking-widerLuxury text-velmora-taupe">
          {product.category} · {product.material}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-luxury text-velmora-ink transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
