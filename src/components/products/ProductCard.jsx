import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, onAddToCart, imagePrefix = 'product-card', compact = false }) {
  const titleId = product.titleId
  const descId = product.descId
  const styleId = `product-${product.id}-style`

  return (
    <article className="group relative flex h-full flex-col bg-velmora-linen text-velmora-espresso">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-parchment">
        <Link to={`/product/${product.slug}`} className="velmora-focus block h-full overflow-hidden">
          <ProductCardImages product={product} titleId={titleId} descId={descId} styleId={styleId} />
        </Link>
        <span id={styleId} className="hidden">warm editorial jewelry worn on a woman</span>
        <div className="absolute inset-x-4 bottom-4 translate-y-0 opacity-100 transition duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="velmora-focus flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-ivory shadow-soft transition hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className={`${compact ? 'p-4' : 'p-5'} border-x border-b border-velmora-mist text-velmora-espresso`}>
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-velmora-taupe">{product.category}</p>
        <h3 id={titleId} className="font-serif text-xl font-semibold uppercase tracking-[0.2em] text-velmora-espresso md:text-2xl">
          <Link to={`/product/${product.slug}`} className="transition hover:text-velmora-goldDeep">{product.name}</Link>
        </h3>
        <p id={descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-charcoal">{product.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-mist pt-4">
          <span className="text-sm font-semibold text-velmora-espresso">{formatPrice(product.price)}</span>
          <span className="text-xs uppercase tracking-[0.18em] text-velmora-taupe">{product.material}</span>
        </div>
      </div>
    </article>
  )
}

function ProductCardImages({ product, titleId, descId, styleId }) {
  if (product.id === 'vivid-aura') {
    return (
      <>
        <img alt={`${product.name} jewelry product`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id="product-card-vivid-aura-primary" data-strk-img={`[${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt={`${product.name} styled on model`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id="product-card-vivid-aura-secondary" data-strk-img={`[${styleId}] [${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  if (product.id === 'majestic-flora') {
    return (
      <>
        <img alt={`${product.name} jewelry product`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id="product-card-majestic-flora-primary" data-strk-img={`[${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt={`${product.name} styled on model`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id="product-card-majestic-flora-secondary" data-strk-img={`[${styleId}] [${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  if (product.id === 'golden-sphere') {
    return (
      <>
        <img alt={`${product.name} jewelry product`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id="product-card-golden-sphere-primary" data-strk-img={`[${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt={`${product.name} styled on model`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id="product-card-golden-sphere-secondary" data-strk-img={`[${styleId}] [${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  if (product.id === 'amber-lace') {
    return (
      <>
        <img alt={`${product.name} jewelry product`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id="product-card-amber-lace-primary" data-strk-img={`[${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt={`${product.name} styled on model`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id="product-card-amber-lace-secondary" data-strk-img={`[${styleId}] [${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  return (
    <>
      <img alt={`${product.name} jewelry product`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id="product-card-royal-heirloom-primary" data-strk-img={`[${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt={`${product.name} styled on model`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id="product-card-royal-heirloom-secondary" data-strk-img={`[${styleId}] [${descId}] [${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
    </>
  )
}

