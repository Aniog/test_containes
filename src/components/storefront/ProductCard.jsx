import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../data/storefront'
import { useCart } from '../../context/CartContext'
import Stars from './Stars'
import StrkImage from './StrkImage'

function ProductCard({ product, sectionTitleId, compact = false }) {
  const { addItem } = useCart()
  const titleId = `card-${product.slug}-title`
  const descId = `card-${product.slug}-desc`
  const promptId = product.cardImages.promptId
  const query = `${sectionTitleId ? `[${sectionTitleId}] ` : ''}[${promptId}] [${descId}] [${titleId}]`

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[2rem] bg-shell p-3 shadow-whisper transition-transform duration-500 ease-editorial group-hover:-translate-y-1">
        <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-[1.5rem] bg-glow">
          <div className="relative">
            <StrkImage
              alt={product.name}
              className="aspect-product w-full object-cover transition-opacity duration-500 ease-editorial group-hover:opacity-0"
              slotId={product.cardImages.primarySlotId}
              query={query}
              ratio="3x4"
              width="700"
            />
            <StrkImage
              alt={`${product.name} alternate view`}
              className="absolute inset-0 aspect-product w-full object-cover opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100"
              slotId={product.cardImages.secondarySlotId}
              query={query}
              ratio="3x4"
              width="700"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addItem(product, product.variants[0], 1)}
          className="absolute inset-x-6 bottom-6 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm uppercase tracking-editorial text-ivory shadow-whisper transition-all duration-300 ease-editorial hover:bg-espresso md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? 'pt-5' : 'pt-6'}`}>
        <span id={promptId} className="hidden" aria-hidden="true">
          {product.cardImages.prompt}
        </span>
        <p className="text-xs uppercase tracking-editorial text-truffle">{product.category}</p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={titleId}
            className="mt-3 font-display text-xl uppercase tracking-luxury text-ink sm:text-2xl"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-4 text-sm leading-7 text-truffle">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-medium uppercase tracking-editorial text-ink">
            {formatPrice(product.price)}
          </span>
          <Stars rating={product.rating} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
