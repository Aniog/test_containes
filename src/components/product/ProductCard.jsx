import { Link } from 'react-router-dom'
import StarRating from '../common/StarRating.jsx'
import { getImageSource } from '../../data/imageSources.js'

const ProductCard = ({ product, onAddToCart }) => (
  <article className="group overflow-hidden border border-velmora-stone bg-velmora-porcelain text-velmora-espresso shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
    <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush">
        <img
          alt={`${product.name} warm gold jewelry editorial photograph`}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
          src={getImageSource(product.imageId)}
        />
        <img
          alt={`${product.name} worn close up`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
          src={getImageSource(product.hoverImageId)}
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="w-full rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-nav text-velmora-ivory shadow-glow transition hover:bg-velmora-champagne hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
    <div className="space-y-3 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-nav text-velmora-bronze">
            {product.category}
          </p>
          <h3 id={product.titleId} className="mt-2 font-serif text-xl font-semibold uppercase tracking-luxury text-velmora-espresso">
            {product.name}
          </h3>
        </div>
        <p className="font-serif text-2xl font-semibold text-velmora-espresso">
          ${product.price}
        </p>
      </div>
      <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-muted">
        {product.description}
      </p>
      <StarRating rating={product.rating} compact />
    </div>
  </article>
)

export default ProductCard
