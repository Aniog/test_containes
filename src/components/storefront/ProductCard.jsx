import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/storeData'
import RatingStars from './RatingStars'

const ProductCard = ({ product, onAddToCart }) => {
  const titleId = `product-card-${product.slug}-title`
  const descId = `product-card-${product.slug}-desc`
  const categoryId = `product-card-${product.slug}-category`
  const primaryCueId = `product-card-${product.slug}-primary-cue`
  const secondaryCueId = `product-card-${product.slug}-secondary-cue`

  return (
    <article className="group flex h-full flex-col gap-5 rounded-3xl border border-velmora-sand bg-velmora-card p-4 text-velmora-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-sand/60">
        <p id={primaryCueId} className="sr-only">
          {product.imageDescriptors.primary}
        </p>
        <p id={secondaryCueId} className="sr-only">
          {product.imageDescriptors.secondary}
        </p>
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative velmora-product-media overflow-hidden">
            <img
              src=""
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={`${product.slug}-primary-velmora`}
              data-strk-img={`[${primaryCueId}] [${descId}] [${titleId}] [${categoryId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="720"
            />
            <img
              src=""
              alt={`${product.name} detail view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              data-strk-img-id={`${product.slug}-secondary-velmora`}
              data-strk-img={`[${secondaryCueId}] [${descId}] [${titleId}] [${categoryId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="720"
            />
          </div>
        </Link>
        <button
          type="button"
          className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full border border-velmora-gold bg-velmora-card px-4 py-3 text-xs uppercase tracking-widest text-velmora-ink opacity-100 shadow-soft transition duration-300 hover:border-velmora-bronze hover:bg-velmora-sand md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-1 pb-1">
        <p id={categoryId} className="text-xs uppercase tracking-widest text-velmora-gold">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`} className="space-y-3">
          <h3 id={titleId} className="font-display text-2xl uppercase tracking-luxe text-velmora-ink">
            {product.name}
          </h3>
          <p id={descId} className="text-sm leading-7 text-velmora-smoke">
            {product.shortDescription}
          </p>
        </Link>
        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <p className="text-lg font-medium text-velmora-ink">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs uppercase tracking-widest text-velmora-smoke">
              {product.material}
            </p>
          </div>
          <RatingStars rating={product.rating} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
