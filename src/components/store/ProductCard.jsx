import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import strkImgConfig from '@/strk-img-config.json'
import RatingStars from '@/components/store/RatingStars.jsx'

const ProductCard = ({ product }) => {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    let dispose

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)

      if (typeof dispose === 'function') {
        dispose()
      }
    }
  }, [])

  const titleId = `${product.id}-card-title`
  const descriptionId = `${product.id}-card-description`
  const altTitleId = `${product.id}-card-alt-title`
  const altDescriptionId = `${product.id}-card-alt-description`

  return (
    <article ref={containerRef} className="group surface-card overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <img
          alt={product.baseName}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-luxe group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={product.heroImageId}
          data-strk-img={`[${descriptionId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img
          alt={`${product.baseName} alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 ease-luxe group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={product.altImageId}
          data-strk-img={`[${altDescriptionId}] [${altTitleId}] [${descriptionId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product, product.colors[0], 1)}
            className="button-primary w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="editorial-kicker">{product.category}</p>
          <Link to={`/product/${product.id}`} className="block transition-opacity hover:opacity-75">
            <h3 id={titleId} className="product-title text-xl sm:text-2xl">
              {product.name}
            </h3>
          </Link>
          <p id={descriptionId} className="text-sm leading-7 text-ink/75">
            {product.shortDescription}
          </p>
          <p id={altTitleId} className="sr-only">Styled alternate view</p>
          <p id={altDescriptionId} className="sr-only">Close-up jewelry detail on model in warm editorial lighting</p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-lg font-medium text-velvet">${product.price}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <Link to={`/product/${product.id}`} className="text-sm tracking-[0.14em] text-ink/70 transition-colors hover:text-velvet">
            View
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
