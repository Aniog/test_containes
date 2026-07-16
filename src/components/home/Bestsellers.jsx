import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { StarRating } from '@/components/StarRating'
import { useCart } from '@/components/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages } from '@/components/StrkImage'

export default function Bestsellers() {
  const ref = useStrkImages([])
  const { addItem } = useCart()
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">Bestsellers</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-taupe">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {bestsellers.map((product) => {
          const titleId = `pc-${product.id}-title`
          const subId = `pc-${product.id}-sub`
          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-cream">
                <div className="relative aspect-[4/5] overflow-hidden transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${subId}] [${titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      alt={`${product.name} worn`}
                      data-strk-img-id={product.imgIdAlt}
                      data-strk-img={`[${subId}] ${product.name} worn on model`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product, product.tone[0], 1)
                    }}
                    className="w-full bg-ivory/95 py-3 text-[11px] uppercase tracking-[0.2em] text-espresso backdrop-blur-sm transition-colors hover:bg-espresso hover:text-ivory"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="pt-4 text-center">
                <h3
                  id={titleId}
                  className="font-serif text-lg uppercase tracking-[0.14em] text-espresso"
                >
                  {product.name}
                </h3>
                <p id={subId} className="mt-1 text-xs text-taupe">
                  {product.subtitle}
                </p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <StarRating value={product.rating} size={12} />
                  <span className="text-[11px] text-taupe">({product.reviews})</span>
                </div>
                <p className="mt-2 text-sm font-medium text-cocoa">{formatPrice(product.price)}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-espresso px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-espresso transition-colors hover:bg-espresso hover:text-ivory"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
