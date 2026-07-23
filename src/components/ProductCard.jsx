import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-parchment">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt={product.shortName}
              className="h-full w-full object-cover transition duration-500 ease-luxe group-hover:scale-105"
              data-strk-img-id={`${product.id}-primary-8m2`}
              data-strk-img={`[${product.id}-desc] [${product.id}-title] [${product.id}-category]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.shortName} styled`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-luxe group-hover:opacity-100"
              data-strk-img-id={`${product.id}-secondary-r4a`}
              data-strk-img={`[${product.id}-lifestyle-guide] [${product.id}-title] [${product.id}-desc]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addItem(product, 1, product.tones[0])}
          className="absolute bottom-4 left-4 right-4 inline-flex translate-y-4 items-center justify-center gap-2 rounded-full border border-obsidian bg-obsidian px-4 py-3 text-xs font-medium uppercase tracking-button text-parchment opacity-0 transition duration-300 ease-luxe group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="pt-5">
        <p id={`${product.id}-category`} className="text-xs uppercase tracking-button text-taupe">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`${product.id}-title`} className="mt-2 font-display text-2xl uppercase tracking-product text-obsidian">
            {product.name}
          </h3>
        </Link>
        <p id={`${product.id}-desc`} className="mt-3 text-sm leading-6 text-taupe">
          {product.description}
        </p>
        <p id={`${product.id}-lifestyle-guide`} hidden aria-hidden="true">
          {product.imagePrompts.lifestyle}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-lg text-ink">{formatPrice(product.price)}</span>
          <span className="text-sm text-taupe">{product.material}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
