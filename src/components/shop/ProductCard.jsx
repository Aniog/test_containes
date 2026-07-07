import { Link } from 'react-router-dom'
import ProductImage from '@/components/ProductImage.jsx'
import { formatPrice } from '@/data/products.js'

export default function ProductCard({ product, onAddToCart }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-pearl shadow-[0_12px_40px_rgba(23,19,15,0.06)]">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <ProductImage
            id={product.imageId}
            query={`[${descId}] [${titleId}]`}
            ratio="3x4"
            width="700"
            alt={product.name}
            className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            id={product.hoverImageId}
            query={`[${titleId}] [${descId}]`}
            ratio="3x4"
            width="700"
            alt={`${product.name} styled`}
            className="absolute inset-0 aspect-[3/4] h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-velmora-ivory/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink opacity-0 shadow-soft backdrop-blur transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="mt-5 block">
        <h3 id={titleId} className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink">
          {product.name}
        </h3>
      </Link>
      <div className="mt-2 flex items-center justify-between gap-3">
        <p id={descId} className="text-sm text-velmora-bronze">
          {product.category} · {product.material}
        </p>
        <p className="text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
