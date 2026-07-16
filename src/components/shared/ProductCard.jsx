import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/format'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()

  return (
    <article className="group rounded-[2rem] border border-velmora-sand/50 bg-white p-3 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-velmora-mist">
          <div className="aspect-[4/5]">
            <img
              alt={product.imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              data-strk-img-id={product.imageId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              fetchpriority={priority ? 'high' : 'auto'}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
              data-strk-img-id={product.hoverImageId}
              data-strk-img={`[${product.titleId}] [${product.descId}] [bestsellers-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              className="w-full"
              onClick={(event) => {
                event.preventDefault()
                addItem(product)
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      <div className="space-y-3 px-2 pb-2 pt-5 text-stone-900">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.26em] text-stone-500">{product.category}</p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id={product.titleId} className="font-heading text-xl uppercase tracking-luxe text-stone-900">
                {product.name}
              </h3>
              <p id={product.descId} className="mt-2 max-w-xs text-sm leading-6 text-stone-500">
                {product.description}
              </p>
            </div>
            <p className="whitespace-nowrap text-sm font-medium text-stone-900">{formatCurrency(product.price)}</p>
          </div>
        </div>
        <Stars rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}
