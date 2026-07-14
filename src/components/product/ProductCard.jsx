import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function ProductCard({ product, onAdd, compact = false, scope = 'card', contextId = 'product-grid-heading' }) {
  const titleId = `product-${scope}-${product.slug}-title`
  const descId = `product-${scope}-${product.slug}-desc`
  const imageQuery = contextId ? `[${descId}] [${titleId}] [${contextId}]` : `[${descId}] [${titleId}]`
  const handleAdd = () => {
    onAdd(product)
  }

  return (
    <article className="group text-velmora-espresso">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand">
        <Link to={`/product/${product.slug}`} className="absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold" aria-label={`View ${product.name}`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-bg-id={`product-main-${scope}-${product.slug}-a9f2`}
            data-strk-bg={imageQuery}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
            role="img"
            aria-label={product.name}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-bg-id={`product-hover-${scope}-${product.slug}-d4c7`}
            data-strk-bg={`[${descId}] [${titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
            role="img"
            aria-label={`${product.name} alternate view`}
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            type="button"
            className="w-full bg-velmora-ivory text-velmora-espresso shadow-soft hover:bg-velmora-gold hover:text-velmora-ivory"
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <p className="mb-2 text-[0.66rem] font-semibold uppercase tracking-luxury text-velmora-taupe">{product.category}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={titleId} className="font-serif text-lg uppercase tracking-editorial text-velmora-espresso transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-ink/75">{product.description}</p>
        <p className="mt-3 text-sm font-semibold text-velmora-espresso">${product.price}</p>
      </div>
    </article>
  )
}
