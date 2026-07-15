import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StoreImage from './StoreImage'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, featured = false }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const imageQuery = useMemo(
    () => `[${product.descId}] [${product.titleId}]`,
    [product.descId, product.titleId],
  )

  const activeImageId = hovered ? product.imageIds[1] || product.imageIds[0] : product.imageIds[0]

  return (
    <article
      className="group flex h-full flex-col rounded-[1.75rem] border border-stone-200/70 bg-stone-50 text-stone-900 shadow-[0_20px_50px_rgba(28,24,19,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(28,24,19,0.14)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-t-[1.75rem] bg-stone-100">
        <div className={`relative overflow-hidden ${featured ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
          <StoreImage
            alt={product.name}
            imgId={activeImageId}
            query={imageQuery}
            ratio="3x4"
            width="900"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/25 to-transparent opacity-50" />
          <div className="absolute left-4 top-4 rounded-full border border-amber-200/60 bg-stone-950/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-amber-100 backdrop-blur-sm">
            {product.badge}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-5 py-5 md:px-6">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-[0.28em] text-stone-950 md:text-xl">
                {product.name}
              </h3>
              <p id={product.descId} className="mt-2 text-sm leading-6 text-stone-600">
                {product.shortDescription}
              </p>
            </div>
            <span className="shrink-0 text-base font-medium text-stone-900">${product.price}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-stone-50 transition-all duration-300 hover:bg-stone-800"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="rounded-full border border-stone-300 px-4 py-3 text-sm font-medium text-stone-800 transition-all duration-300 hover:border-stone-500 hover:text-stone-950"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
