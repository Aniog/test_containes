import { Link } from 'react-router-dom'
import StarRating from '@/components/product/StarRating'

const ProductCard = ({ product, onAddToCart }) => {
  const titleId = `${product.id}-title`
  const descId = `${product.id}-desc`
  const hoverId = `${product.id}-hover-desc`

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-velmora-mist/60 bg-velmora-panel text-velmora-ink shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist/30">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            src={product.heroImage}
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={product.hoverImage}
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product.id)
            }}
            className="absolute inset-x-4 bottom-4 translate-y-4 rounded-full border border-velmora-gold bg-velmora-gold px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-velmora-ink opacity-0 shadow-glow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="space-y-3 p-5 md:p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-muted">
                {product.category}
              </p>
              <Link to={`/product/${product.id}`}>
                <h3
                  id={titleId}
                  className="font-display text-2xl uppercase tracking-luxe text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
                >
                  {product.name}
                </h3>
              </Link>
            </div>
            <p className="text-lg text-velmora-ink">${product.price}</p>
          </div>
          <p id={descId} className="text-sm leading-6 text-velmora-muted">
            {product.description}
          </p>
          <p id={hoverId} className="hidden">
            Alternate angle of {product.name} on a model with warm editorial styling.
          </p>
        </div>

        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

export default ProductCard
