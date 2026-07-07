import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import Stars from '@/components/ui/Stars'
import { formatPrice } from '@/lib/format'
import { PLACEHOLDER_IMAGE } from '@/lib/image'

const ProductCard = ({ product, onAddToCart, priority = false }) => {
  return (
    <article className="group rounded-[2rem] border border-line-dark bg-velvet-soft/70 p-4 shadow-card transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/40">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#3a2f33]">
          <img
            src={PLACEHOLDER_IMAGE}
            alt={product.name}
            data-strk-img-id={product.imageId}
            data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            className="h-[320px] w-full object-cover transition-all duration-700 ease-luxe group-hover:scale-[1.03] group-hover:opacity-0 md:h-[360px]"
            loading={priority ? 'eager' : 'lazy'}
          />
          <img
            src={PLACEHOLDER_IMAGE}
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[product-${product.id}-hover-desc] [product-${product.id}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            className="absolute inset-0 h-[320px] w-full object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:scale-[1.03] group-hover:opacity-100 md:h-[360px]"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 rounded-full border border-gold/40 bg-velvet/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-gold-soft backdrop-blur-sm">
            {product.badge}
          </div>
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm uppercase tracking-[0.22em] text-velvet transition-all duration-300 ease-luxe hover:bg-gold-soft"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="px-2 pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <Stars rating={product.rating} />
          <span className="text-xs uppercase tracking-[0.22em] text-mist">
            {product.reviews} reviews
          </span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3
            id={`product-${product.id}-title`}
            className="font-serif text-[1.85rem] uppercase tracking-luxe text-ivory"
          >
            {product.name}
          </h3>
          <p
            id={`product-${product.id}-desc`}
            className="mt-3 text-sm leading-7 text-mist"
          >
            {product.description}
          </p>
          <p
            id={`product-${product.id}-hover-desc`}
            className="sr-only"
          >
            Alternate editorial angle of {product.name} styled on model with warm gold jewelry.
          </p>
        </Link>
        <div className="mt-5 flex items-center justify-between border-t border-line-dark pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold-soft">
              {product.category}
            </p>
            <p className="mt-2 text-lg text-ivory">{formatPrice(product.price)}</p>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="text-xs uppercase tracking-[0.26em] text-mist transition-colors duration-300 hover:text-gold-soft"
          >
            View product
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
