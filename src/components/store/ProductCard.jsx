import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '../../context/StoreContext.jsx'
import { formatPrice } from '../../data/store.js'
import RatingStars from '../shared/RatingStars.jsx'

const ProductCard = ({ product }) => {
  const { addToCart } = useStore()
  const [hovered, setHovered] = useState(false)
  const primaryImage = product.gallery[0]
  const secondaryImage = product.gallery[1] || product.gallery[0]
  const image = hovered ? secondaryImage : primaryImage

  return (
    <article
      className="group rounded-[2rem] border border-sand/50 bg-pearl p-3 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-obsidian/5 aspect-product">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          data-strk-img-id={`card-${image.imgId}`}
          data-strk-img={`[${image.descId}] [${image.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between gap-3 bg-gradient-to-t from-obsidian/80 to-transparent px-4 pb-4 pt-10 transition duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={() => addToCart(product, 1, product.tones[0])}
            className="w-full rounded-full bg-champagne px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian transition duration-300 hover:bg-pearl"
          >
            Add to Cart
          </button>
        </div>
        <button
          type="button"
          aria-label={`Save ${product.name}`}
          className="absolute right-3 top-3 rounded-full border border-pearl/60 bg-obsidian/10 p-2 text-pearl backdrop-blur"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="px-2 pb-2 pt-5">
        <p id={primaryImage.titleId} className="sr-only">
          {primaryImage.title}
        </p>
        <p id={primaryImage.descId} className="sr-only">
          {primaryImage.description}
        </p>
        <p id={secondaryImage.titleId} className="sr-only">
          {secondaryImage.title}
        </p>
        <p id={secondaryImage.descId} className="sr-only">
          {secondaryImage.description}
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-taupe">
              {product.category}
            </p>
            <Link
              to={`/product/${product.slug}`}
              className="mt-2 block font-display text-2xl uppercase tracking-product text-obsidian transition duration-300 hover:text-champagne"
            >
              {product.name}
            </Link>
          </div>
          <p className="pt-1 text-sm font-medium text-obsidian">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <span className="rounded-full bg-porcelain px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-truffle">
            {product.badge}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
