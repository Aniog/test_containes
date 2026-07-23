import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import RatingStars from './RatingStars'
import { useCart } from '@/context/CartContext.jsx'

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const titleId = `product-card-${product.id}-title`
  const descId = `product-card-${product.id}-desc`
  const sectionId = `product-card-${product.id}-category`

  return (
    <article className="group overflow-hidden rounded-[28px] border border-velmora-sand/70 bg-white/70 shadow-velmora-soft transition duration-500 hover:-translate-y-1 hover:shadow-velmora">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-velmora-rose/50">
          <div className="grid grid-cols-2 transition duration-500 group-hover:translate-x-[-50%]">
            {[0, 1].map((imageIndex) => (
              <img
                key={imageIndex}
                alt={imageIndex === 0 ? product.imageAlt : `${product.name} styled view`}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`${product.imageId}-${imageIndex}`}
                data-strk-img={`[${descId}] [${titleId}] [${sectionId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                loading={priority ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-velmora-noir/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-velmora-ivory backdrop-blur-sm">
            {product.badge}
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="space-y-2">
          <p id={sectionId} className="text-xs uppercase tracking-[0.28em] text-velmora-mocha">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 id={titleId} className="product-wordmark text-lg leading-tight text-velmora-ink sm:text-xl">
                  {product.name}
                </h3>
              </Link>
              <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-mocha">
                {product.shortDescription}
              </p>
            </div>
            <span className="shrink-0 text-lg font-medium text-velmora-ink">
              ${product.price}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          <button
            type="button"
            onClick={() => addItem(product, product.toneOptions[0], 1)}
            className="inline-flex items-center gap-2 rounded-full border border-velmora-gold bg-velmora-gold px-4 py-2 text-sm font-medium text-velmora-ivory transition duration-300 hover:border-velmora-gold-deep hover:bg-velmora-gold-deep"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
