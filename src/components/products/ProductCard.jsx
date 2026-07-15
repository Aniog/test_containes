import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/store.js'
import { JewelryArtwork } from '@/components/products/JewelryArtwork.jsx'

export const ProductCard = ({ product, onQuickAdd, compact = false }) => {
  const primaryImage = product.images[0]
  const secondaryImage = product.images[1]

  return (
    <article className="group">
      <div className="overflow-hidden rounded-[1.75rem] border border-line/80 bg-card shadow-card">
        <Link to={`/product/${product.slug}`} className="relative block">
          <div className={compact ? 'aspect-[3/4]' : 'aspect-[4/5]'}>
            <JewelryArtwork
              productId={product.id}
              image={primaryImage}
              className="h-full w-full transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
            />
            <JewelryArtwork
              productId={product.id}
              image={secondaryImage}
              className="absolute inset-0 h-full w-full opacity-0 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onQuickAdd(product)}
          className="mx-4 mb-4 mt-[-64px] flex w-[calc(100%-2rem)] translate-y-6 items-center justify-center rounded-full bg-porcelain/96 px-4 py-3 text-xs uppercase tracking-[0.3em] text-ink opacity-0 shadow-[0_16px_40px_rgba(32,24,19,0.16)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to Cart
        </button>
      </div>
      <div className="px-1 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/product/${product.slug}`} className="font-display text-xl uppercase tracking-[0.22em] text-ink">
              {product.name}
            </Link>
            <p className="mt-2 text-sm text-ink/65">{product.type}</p>
          </div>
          <p className="text-sm tracking-[0.18em] text-ink">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  )
}
