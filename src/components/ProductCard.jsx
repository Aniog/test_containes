import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { cn, formatCurrency } from '@/lib/utils'
import { getPlaceholderImage } from '@/lib/placeholders'

function ProductCard({ product, eager = false, featured = false }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const titleId = `${product.slug}-card-title`
  const categoryId = `${product.slug}-card-category`
  const imagePrompt = isHovered
    ? product.galleryPrompts[1] || product.galleryPrompts[0]
    : product.galleryPrompts[0]
  const fallbackSrc = getPlaceholderImage({
    title: product.name,
    subtitle: imagePrompt,
    ratio: '3x4',
    mood: 'product',
  })

  return (
    <article
      className={cn(
        'group rounded-[1.75rem] border border-sand/90 bg-ivory p-3 text-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card',
        featured && 'lg:first:col-span-2',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className="block" to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden rounded-[1.4rem] bg-pearl">
          <img
            alt={product.name}
            className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            data-strk-img-id={`${product.slug}-card-image`}
            data-strk-img={`[${categoryId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            src={fallbackSrc}
            loading={eager ? 'eager' : 'lazy'}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/18 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          <div className="absolute bottom-3 left-3 right-3 hidden md:block">
            <button
              type="button"
              className="pointer-events-auto flex min-h-11 w-full items-center justify-center rounded-full bg-ivory/92 px-4 text-sm font-medium text-ink opacity-0 shadow-soft backdrop-blur-sm transition duration-300 group-hover:opacity-100 hover:bg-gold"
              onClick={(event) => {
                event.preventDefault()
                addItem(product, product.variants[0], 1)
              }}
            >
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-4 px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p
              id={categoryId}
              className="text-[11px] uppercase tracking-[0.34em] text-ink/55"
            >
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="font-serif text-lg uppercase tracking-[0.3em] text-ink transition hover:text-gold"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-sm font-medium text-ink">
            {formatCurrency(product.price)}
          </span>
        </div>

        <p className="text-sm leading-6 text-ink/68">{product.shortDescription}</p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-sm text-ink/68">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span>{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink/55 transition hover:text-gold"
            to={`/product/${product.slug}`}
          >
            View <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
