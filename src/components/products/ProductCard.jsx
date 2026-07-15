import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Star } from 'lucide-react'
import { useShop } from '@/context/ShopContext'

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function ProductCard({ product, priority = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useShop()

  const titleId = `${product.slug}-card-title`
  const subtitleId = `${product.slug}-card-subtitle`

  return (
    <article
      className="group rounded-[2rem] border border-champagne/80 bg-ivory p-4 text-espresso shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-veil"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-champagne/40">
          <img
            alt={product.name}
            data-strk-img-id={product.imageIds.hero}
            data-strk-img={`[${subtitleId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`h-[300px] w-full object-cover transition duration-700 sm:h-[360px] ${
              isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imageIds.alt}
            data-strk-img={`[${subtitleId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 h-[300px] w-full object-cover transition duration-700 sm:h-[360px] ${
              isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            }`}
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              addToCart(product, 1, product.variants[0])
            }}
            className="absolute bottom-4 left-4 right-4 rounded-full bg-espresso px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory opacity-0 transition duration-300 hover:bg-mocha group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="space-y-3 px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-taupe">{product.category}</p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="mt-2 font-serif text-2xl uppercase tracking-product text-espresso transition hover:text-gold"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm font-medium text-espresso">{money.format(product.price)}</p>
        </div>
        <p id={subtitleId} className="text-sm leading-6 text-mocha">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between text-sm text-taupe">
          <span className="inline-flex items-center gap-2 text-espresso">
            <Star className="h-4 w-4 fill-gold text-gold" />
            {product.rating}
          </span>
          <span>{product.reviewCount} reviews</span>
        </div>
      </div>
    </article>
  )
}
