import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../lib/formatters.js'
import Stars from '../ui/Stars.jsx'

const ProductCard = ({ product, compact = false }) => {
  const { addItem } = useCart()
  const imageBase = `product-${product.id}`

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-velmora-line bg-velmora-pearl/35 p-3 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <p id={`${imageBase}-visual-note`} className="sr-only">{product.imageNote}</p>
      <div className={`relative overflow-hidden rounded-[1.35rem] bg-velmora-pearl ${compact ? 'aspect-square' : 'velmora-card-ratio'}`}>
        <Link to={`/product/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
        <img alt={product.name} className="velmora-image-fill transition duration-500 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id={`${imageBase}-primary-1af3`} data-strk-img={`[${imageBase}-visual-note] [${imageBase}-desc] [${imageBase}-name] [${imageBase}-category]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt={`${product.name} alternate view`} className="absolute inset-0 velmora-image-fill opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id={`${imageBase}-secondary-7bd1`} data-strk-img={`[${imageBase}-visual-note] [${imageBase}-name] [${imageBase}-desc] [${imageBase}-category]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <button className="absolute inset-x-4 bottom-4 z-20 translate-y-3 rounded-full bg-velmora-ivory px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-velmora-ink opacity-100 transition duration-300 hover:bg-velmora-gold hover:text-velmora-ivory md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100" onClick={() => addItem(product)} type="button">Add to Cart</button>
      </div>
      <div className="space-y-4 px-2 pb-2 pt-5">
        <div className="space-y-2">
          <p id={`${imageBase}-category`} className="text-xs uppercase tracking-[0.22em] text-velmora-mocha">{product.category}</p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <Link to={`/product/${product.slug}`} id={`${imageBase}-name`} className="font-serif text-lg uppercase tracking-[0.22em] text-velmora-ink">{product.name}</Link>
              <p id={`${imageBase}-desc`} className="mt-2 text-sm leading-6 text-velmora-mocha">{product.shortDescription}</p>
            </div>
            <span className="shrink-0 text-sm font-medium text-velmora-ink">{formatPrice(product.price)}</span>
          </div>
        </div>
        <Stars rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

export default ProductCard
