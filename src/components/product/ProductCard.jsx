import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'

const ProductCard = ({ product, onAdd, onView, compact = false }) => (
  <article className="group text-velmora-ink">
    <div className="relative overflow-hidden rounded-[1.75rem] border border-velmora-sand/70 bg-velmora-champagne shadow-soft">
      <button type="button" onClick={() => onView(product.id)} className="block w-full text-left" aria-label={`View ${product.name}`}>
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img
          alt={`${product.name} alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </button>
      {!compact && (
        <div className="absolute inset-x-4 bottom-4 translate-y-0 opacity-100 transition duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-ivory shadow-soft transition hover:bg-velmora-gold hover:text-velmora-ink"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      )}
    </div>
    <div className="pt-4">
      <div className="mb-2 flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} star rating`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
        <span className="ml-1 text-xs font-medium text-velmora-smoke">{product.rating.toFixed(1)}</span>
      </div>
      <h3 id={product.titleId} className="font-serif text-lg uppercase leading-6 tracking-luxe text-velmora-ink sm:text-xl">{product.name}</h3>
      <p id={product.descId} className="mt-1 line-clamp-2 text-sm leading-6 text-velmora-smoke">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <p className="font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-velmora-smoke">{product.category}</p>
      </div>
    </div>
  </article>
)

export default ProductCard
