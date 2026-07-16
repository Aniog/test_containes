import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/store.js'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function ProductCard({ product, imagePrefix, onAddToCart }) {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [imagePrefix])

  const titleId = `${imagePrefix}-${product.slug}-title`
  const descId = `${imagePrefix}-${product.slug}-description`
  const primarySceneId = `${imagePrefix}-${product.slug}-primary-scene`
  const secondarySceneId = `${imagePrefix}-${product.slug}-secondary-scene`

  return (
    <article ref={containerRef} className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-mist/40">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-mist/70">
            <img
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 ease-velmora group-hover:scale-[1.03]"
              data-strk-img-id={`${imagePrefix}-${product.slug}-primary-img`}
              data-strk-img={`[${primarySceneId}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-velmora group-hover:opacity-100"
              data-strk-img-id={`${imagePrefix}-${product.slug}-secondary-img`}
              data-strk-img={`[${secondarySceneId}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>
        <div className="absolute inset-x-4 bottom-4 hidden translate-y-3 opacity-0 transition duration-300 ease-velmora group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-pearl/95 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-velmora-ink shadow-soft backdrop-blur"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-1 pt-5">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-velmora-truffle">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id={titleId} className="velmora-product-name text-lg sm:text-xl">
                {product.name}
              </h3>
              <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-truffle">
                {product.shortDescription}
              </p>
            </div>
            <span className="shrink-0 text-base font-medium text-velmora-ink">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="velmora-button-secondary mt-auto w-full md:hidden"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      <span id={primarySceneId} className="hidden" aria-hidden="true">
        {product.cardScenes.primary}
      </span>
      <span id={secondarySceneId} className="hidden" aria-hidden="true">
        {product.cardScenes.secondary}
      </span>
    </article>
  )
}

export default ProductCard
