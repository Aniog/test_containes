import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import { currency } from '@/data/products'
import { placeholderSrc } from '@/data/storefront'

const ProductCard = ({ product, scope = 'grid', onAddToCart }) => {
  const titleId = `${scope}-${product.slug}-title`
  const descId = `${scope}-${product.slug}-desc`

  return (
    <article className="group rounded-[1.9rem] border border-stone-200 bg-white p-3 shadow-sm shadow-stone-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-stone-100">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={placeholderSrc}
              alt={product.name}
              data-strk-img-id={product.imageIds.primary}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <img
              src={placeholderSrc}
              alt={`${product.name} alternate view`}
              data-strk-img-id={product.imageIds.secondary}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
        <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-0 opacity-100 transition-all duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <Button
            variant="accent"
            size="md"
            className="pointer-events-auto w-full"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/product/${product.slug}`}>
              <h3 id={titleId} className="font-serif text-base uppercase leading-snug tracking-[0.18em] text-stone-900 transition-colors duration-300 group-hover:text-amber-700 sm:text-lg sm:tracking-[0.24em]">
                {product.name}
              </h3>
            </Link>
            <p id={descId} className="mt-2 text-sm text-stone-600">
              {product.shortDescription}
            </p>
          </div>
          <p className="whitespace-nowrap text-sm font-medium text-stone-900">
            {currency.format(product.price)}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <Stars />
            <p className="mt-2 text-xs uppercase tracking-[0.26em] text-stone-500">
              {product.category}
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.26em] text-stone-500">
            {product.reviewCount} reviews
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
