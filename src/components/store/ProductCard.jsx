import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import RatingStars from './RatingStars'
import { formatPrice } from '../../lib/utils'
import { StrkImage } from '../ui/StockImage'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  const titleId = `product-card-${product.slug}-title`
  const categoryId = `product-card-${product.slug}-category`
  const primaryPromptId = `product-card-${product.slug}-prompt-primary`
  const secondaryPromptId = `product-card-${product.slug}-prompt-secondary`

  return (
    <article className="group space-y-5">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[30px] bg-mist shadow-card">
          <div className="aspect-[4/5]">
            <StrkImage
              id={`product-card-primary-${product.slug}-c71`}
              alt={product.name}
              queryIds={[primaryPromptId, categoryId, titleId]}
              ratio="4x3"
              width={priority ? '1200' : '900'}
              className="transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <StrkImage
              id={`product-card-secondary-${product.slug}-d42`}
              alt={`${product.name} alternate view`}
              queryIds={[secondaryPromptId, categoryId, titleId]}
              ratio="4x3"
              width="900"
              className="absolute inset-0 opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          </div>
          <div className="absolute inset-x-4 bottom-4 translate-y-0 opacity-100 transition-all duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <Button className="w-full" onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      <div className="space-y-3 px-1">
        <p id={categoryId} className="text-xs uppercase tracking-[0.24em] text-bronze">
          {product.category}
        </p>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 id={titleId} className="font-serif text-2xl uppercase tracking-luxe text-ink">
              {product.name}
            </h3>
            <p className="max-w-xs text-sm leading-6 text-stone">{product.shortDescription}</p>
          </div>
          <p className="text-sm font-medium text-ink">{formatPrice(product.price)}</p>
        </div>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
      </div>

      <span id={primaryPromptId} className="sr-only">
        {product.galleryPrompts[0]}
      </span>
      <span id={secondaryPromptId} className="sr-only">
        {product.galleryPrompts[1]}
      </span>
    </article>
  )
}
