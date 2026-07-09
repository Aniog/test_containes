import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/formatters'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <article className="group rounded-[2rem] border border-velmora-line bg-velmora-pearl p-3 shadow-card transition duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-velmora-ivory">
        <Link to={`/product/${product.slug}`} className="block aspect-[4/5]">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={`product-card-primary-${product.slug}`}
            data-strk-img={`[product-${product.slug}-visual] [product-${product.slug}-desc] [product-${product.slug}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="/vite.svg"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={`product-card-secondary-${product.slug}`}
            data-strk-img={`[product-${product.slug}-alt] [product-${product.slug}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="/vite.svg"
          />
        </Link>
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/80 p-2 text-velmora-ink backdrop-blur transition hover:border-velmora-gold hover:text-velmora-gold"
          aria-label={`Save ${product.name}`}
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button className="w-full" onClick={() => addItem(product)}>
            Add to cart
          </Button>
        </div>
      </div>
      <div className="px-2 pb-2 pt-5">
        <p className="text-xs uppercase tracking-[0.26em] text-velmora-mist">
          {product.category}
        </p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h3
              id={`product-${product.slug}-title`}
              className="text-sm uppercase tracking-product text-velmora-ink sm:text-base"
            >
              <Link to={`/product/${product.slug}`}>{product.name}</Link>
            </h3>
            <p
              id={`product-${product.slug}-desc`}
              className="mt-3 text-sm leading-7 text-velmora-mist"
            >
              {product.shortDescription}
            </p>
            <p id={`product-${product.slug}-visual`} className="sr-only" aria-hidden="true">
              {product.cardImageNote}
            </p>
            <p id={`product-${product.slug}-alt`} className="sr-only" aria-hidden="true">
              {product.secondaryImageNote}
            </p>
          </div>
          <p className="shrink-0 text-sm font-medium text-velmora-ink">
            {formatPrice(product.price)}
          </p>
        </div>
        <Stars value={product.rating} className="mt-4" />
      </div>
    </article>
  )
}

export default ProductCard
