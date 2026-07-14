import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/components/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <article className="group overflow-hidden rounded-[28px] border border-velmora-taupe/35 bg-velmora-cream shadow-[0_24px_60px_rgba(43,31,25,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(43,31,25,0.16)]">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/70">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={product.imageIds.primary}
            data-strk-img={product.imageQueryPrimary}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={product.imageIds.secondary}
            data-strk-img={product.imageQuerySecondary}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-velmora-espresso/70 px-3 py-1 text-[10px] uppercase tracking-[0.34em] text-velmora-ivory backdrop-blur-sm">
            {product.badge}
          </div>
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ivory px-4 py-3 text-xs font-medium uppercase tracking-[0.28em] text-velmora-espresso shadow-lg transition hover:bg-white"
              onClick={(event) => {
                event.preventDefault()
                addItem(product, 1, 'Gold Tone')
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.38em] text-velmora-cacao/60">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3 className="font-serif text-xl uppercase tracking-[0.2em] text-velmora-espresso transition hover:text-velmora-goldDeep">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-base font-medium text-velmora-espresso">
            ${product.price}
          </p>
        </div>

        <p className="text-sm leading-7 text-velmora-cacao/75">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between border-t border-velmora-taupe/30 pt-4">
          <div className="flex items-center gap-2 text-sm text-velmora-cacao/75">
            <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
            <span>{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
          <button
            type="button"
            className="text-xs font-medium uppercase tracking-[0.34em] text-velmora-goldDeep transition hover:text-velmora-espresso"
            onClick={() => addItem(product, 1, 'Gold Tone')}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
