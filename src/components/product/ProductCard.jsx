import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

function ProductCard({ product, onAddToCart, contextKey = 'product-grid' }) {
  const cardRef = useRef(null)
  const titleId = `${contextKey}-${product.slug}-title`
  const descId = `${contextKey}-${product.slug}-desc`
  const categoryId = `${contextKey}-${product.slug}-category`

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [product.slug, contextKey])

  return (
    <article ref={cardRef} className="group relative overflow-hidden bg-velmora-porcelain text-velmora-ink shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/product/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/45">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`${contextKey}-${product.slug}-primary-3fa9`}
            data-strk-img={`[${descId}] [${titleId}] [${categoryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
          />
          <img
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`${contextKey}-${product.slug}-secondary-8c1d`}
            data-strk-img={`[${titleId}] [${descId}] [${categoryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
          />
          <div className="absolute left-4 top-4 border border-velmora-sand/80 bg-velmora-porcelain/90 px-3 py-1 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-velmora-gold backdrop-blur">
            {product.tag}
          </div>
        </div>
      </Link>

      <div className="space-y-3 p-5">
        <p id={categoryId} className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-velmora-taupe">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`} className="block text-velmora-ink transition hover:text-velmora-gold">
          <h3 id={titleId} className="font-serif text-xl uppercase leading-tight tracking-[0.22em]">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="line-clamp-2 font-sans text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <div className="flex items-center justify-between border-t border-velmora-sand/70 pt-4">
          <span className="font-sans text-base font-semibold text-velmora-ink">${product.price}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 border border-velmora-champagne bg-velmora-champagne px-4 py-2 font-sans text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-ink transition duration-300 hover:bg-velmora-gold hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-porcelain"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
