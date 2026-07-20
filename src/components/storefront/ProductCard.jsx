import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import RatingStars from './RatingStars'
import { formatCurrency, imagePlaceholder } from '@/lib/storefront'

const ProductCard = ({ product, onAddToCart, priority = false }) => {
  const primaryImage = product.images[0]
  const secondaryImage = product.images[1] ?? product.images[0]

  return (
    <article className="group rounded-[2rem] border border-sand/70 bg-ivory p-3 shadow-[0_20px_60px_rgba(33,24,22,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(33,24,22,0.14)]">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-mist">
        <Link to={`/product/${product.slug}`} className="block">
          <img
            src={imagePlaceholder}
            alt={primaryImage.alt}
            data-strk-img-id={primaryImage.id}
            data-strk-img={`[${primaryImage.descId}] [${primaryImage.titleId}] [${product.heroDescId}] [${product.heroTitleId}]`}
            data-strk-img-ratio={primaryImage.ratio}
            data-strk-img-width={priority ? '900' : '700'}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            loading={priority ? 'eager' : 'lazy'}
          />
          <img
            src={imagePlaceholder}
            alt={secondaryImage.alt}
            data-strk-img-id={secondaryImage.id}
            data-strk-img={`[${secondaryImage.descId}] [${secondaryImage.titleId}] [${product.heroDescId}] [${product.heroTitleId}]`}
            data-strk-img-ratio={secondaryImage.ratio}
            data-strk-img-width={priority ? '900' : '700'}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product, product.colors[0], 1)}
          className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-obsidian/92 px-4 py-3 text-center text-xs uppercase tracking-[0.24em] text-ivory opacity-0 shadow-lg transition duration-300 hover:bg-espresso group-hover:translate-y-0 group-hover:opacity-100 md:text-[0.7rem]"
        >
          Quick add to cart
        </button>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-taupe">{product.category}</p>
            <Link
              to={`/product/${product.slug}`}
              className="mt-2 block font-serif text-lg tracking-[0.24em] text-obsidian transition hover:text-champagne"
            >
              {product.name}
            </Link>
          </div>
          <p className="text-sm font-medium text-obsidian">{formatCurrency(product.price)}</p>
        </div>

        <p id={product.heroTitleId} className="sr-only">
          {product.name}
        </p>
        <p id={product.heroDescId} className="sr-only">
          {product.shortDescription}
        </p>
        {product.images.map((image) => (
          <div className="sr-only" key={image.id}>
            <p id={image.titleId}>{product.name}</p>
            <p id={image.descId}>{image.alt}</p>
          </div>
        ))}

        <p className="mb-4 text-sm leading-6 text-taupe">{product.shortDescription}</p>
        <div className="mb-5">
          <RatingStars rating={product.rating} reviews={product.reviews} compact />
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product, product.colors[0], 1)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-obsidian px-4 py-3 text-xs uppercase tracking-[0.24em] text-obsidian transition duration-300 hover:border-champagne hover:bg-champagne"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
