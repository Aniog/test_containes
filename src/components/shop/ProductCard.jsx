import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'

export function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const primaryImage = product.gallery[0]
  const secondaryImage = product.gallery[1] || product.gallery[0]
  const titleId = `card-${product.id}-title`
  const descId = `card-${product.id}-desc`

  return (
    <article className="group rounded-[2rem] border border-velmora-line bg-white/70 p-3 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(34,27,25,0.12)]">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-velmora-parchment">
        <Link to={`/product/${product.id}`} className="block">
          <img
            alt={product.shortName}
            className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            data-strk-img-id={`product-card-${primaryImage.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio={primaryImage.ratio}
            data-strk-img-width={priority ? '800' : '600'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.shortName} alternate view`}
            className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 lg:block"
            data-strk-img-id={`product-card-${secondaryImage.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio={secondaryImage.ratio}
            data-strk-img-width={priority ? '800' : '600'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-velmora-ink/75 to-transparent p-4 transition duration-300 lg:translate-y-full lg:group-hover:translate-y-0">
          <Button className="w-full" onClick={() => addItem(product)}>
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <Link
              to={`/product/${product.id}`}
              id={titleId}
              className="font-display text-lg uppercase tracking-product text-velmora-espresso transition hover:text-velmora-gold"
            >
              {product.name}
            </Link>
            <p id={descId} className="mt-2 text-sm leading-6 text-velmora-truffle">
              {product.description}
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-velmora-espresso">${product.price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-velmora-truffle">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-espresso">
            <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
            {product.rating}
          </span>
        </div>
      </div>
    </article>
  )
}
