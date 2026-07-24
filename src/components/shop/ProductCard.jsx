import { Link } from 'react-router-dom'
import RatingStars from '@/components/layout/RatingStars'
import ProductVisual from '@/components/product/ProductVisual'
import { useCart } from '@/context/CartContext'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function ProductCard({ product, context = 'catalog' }) {
  const { addItem } = useCart()
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group rounded-[1.6rem] border border-line/80 bg-white p-3 text-ink shadow-[0_18px_45px_rgba(18,13,11,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(18,13,11,0.14)]">
      <div className="relative overflow-hidden rounded-[1.2rem] bg-stone">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem]">
            <ProductVisual
              product={product}
              view="main"
              ariaLabel={product.shortName}
              className="absolute inset-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <ProductVisual
              product={product}
              view="alternate"
              ariaLabel={`${product.shortName} alternate view`}
              className="absolute inset-0 opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addItem(product, 1, product.tones[0])}
          className="absolute inset-x-4 bottom-4 inline-flex translate-y-2 items-center justify-center rounded-full bg-noir px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-cream opacity-100 transition duration-300 hover:bg-gold hover:text-noir md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          Add to Cart
        </button>
      </div>

      <div className="px-1 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{product.category}</p>
            <Link to={`/product/${product.id}`}>
              <h3 id={titleId} className="mt-2 font-display text-[1.5rem] uppercase tracking-[0.18em] text-ink transition group-hover:text-gold">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-sm uppercase tracking-[0.18em] text-ink">{currency.format(product.price)}</p>
        </div>

        <p id={descId} className="mt-3 text-sm leading-7 text-ink/65">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <span className="text-[11px] uppercase tracking-[0.26em] text-ink/45">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
