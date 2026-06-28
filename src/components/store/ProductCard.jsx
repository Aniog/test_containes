import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import RatingStars from '@/components/ui/RatingStars'
import EditorialVisual from '@/components/ui/EditorialVisual'
import { formatCurrency } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, prefix = 'product-card' }) {
  const { addItem, openCart } = useCart()
  const titleId = `${prefix}-${product.slug}-title`
  const descId = `${prefix}-${product.slug}-desc`

  return (
    <article className="group flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-champagne/60 p-3 shadow-velmora-soft transition duration-500 hover:-translate-y-1 hover:shadow-velmora-card">
        <Link
          to={`/product/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-velmora-ivory">
          <EditorialVisual
            mood="still"
            className="absolute inset-0 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
          >
            <div className="absolute inset-x-5 bottom-5 rounded-full border border-velmora-gold/70 px-4 py-2 text-center text-[10px] uppercase tracking-product text-velmora-ink">
              {product.category}
            </div>
          </EditorialVisual>
          <EditorialVisual
            mood="portrait"
            accent="right"
            className="absolute inset-0 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          >
            <div className="absolute inset-x-6 bottom-6 text-center text-xs uppercase tracking-brand text-velmora-ivory/90">
              Velmora on skin
            </div>
          </EditorialVisual>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 z-20 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              className="pointer-events-auto w-full"
              size="sm"
              onClick={() => {
                addItem(product, 1, product.variants[0])
                openCart()
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-3 px-1">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-velmora-line bg-velmora-ivory px-3 py-1 text-[10px] uppercase tracking-product text-velmora-taupe">
            {product.badge}
          </span>
          <p className="text-sm uppercase tracking-product text-velmora-ink">
            {formatCurrency(product.price)}
          </p>
        </div>
        <div className="space-y-2">
          <Link to={`/product/${product.slug}`} className="block">
            <h3 id={titleId} className="font-display text-2xl leading-none text-velmora-ink">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="text-sm leading-6 text-velmora-taupe">
            {product.shortDescription}
          </p>
        </div>
        <RatingStars rating={product.rating} showValue={false} />
      </div>
    </article>
  )
}
