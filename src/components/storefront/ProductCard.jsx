import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag } from 'lucide-react'
import Stars from './Stars'
import strkImgConfig from '@/strk-img-config.json'
import { formatCurrency } from '@/data/storeData'

const ProductCard = ({ product, onAddToCart, priority = false }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [product.slug])

  return (
    <article
      ref={containerRef}
      className="group rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/95 p-3 shadow-[0_18px_45px_rgba(36,26,19,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(36,26,19,0.14)]"
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#ede3d6]">
        <Link to={`/product/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
          data-strk-img-id={`product-primary-${product.slug}-k1`}
          data-strk-img={`[product-${product.slug}-desc] [product-${product.slug}-name] [product-${product.slug}-category]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          loading={priority ? 'eager' : 'lazy'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img
          alt={`${product.name} alternate view`}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
          data-strk-img-id={`product-secondary-${product.slug}-k2`}
          data-strk-img={`[product-${product.slug}-type] [product-${product.slug}-name] [product-${product.slug}-desc]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-4 px-4 pb-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product, 1, product.tones[0])}
            className="w-full rounded-full border border-white/40 bg-[rgba(36,26,19,0.88)] px-4 py-3 text-center text-xs uppercase tracking-[0.32em] text-[#f7f2ea] shadow-xl backdrop-blur-sm transition hover:bg-[#c19a6b]"
          >
            Quick add
          </button>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <p
          id={`product-${product.slug}-category`}
          className="text-[11px] uppercase tracking-[0.32em] text-[#c19a6b]"
        >
          {product.category}
        </p>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={`product-${product.slug}-name`}
                className="font-['Cormorant_Garamond'] text-[1.85rem] uppercase tracking-[0.22em] text-[#241a13] transition hover:text-[#c19a6b]"
              >
                {product.name}
              </h3>
            </Link>
            <p id={`product-${product.slug}-type`} className="mt-1 text-sm text-[#6f5946]">
              {product.type}
            </p>
          </div>
          <p className="text-sm font-medium text-[#241a13]">
            {formatCurrency(product.price)}
          </p>
        </div>
        <p id={`product-${product.slug}-desc`} className="mt-3 text-sm leading-7 text-[#6f5946]">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <Stars rating={product.rating} reviews={product.reviews} />
          <button
            type="button"
            onClick={() => onAddToCart(product, 1, product.tones[0])}
            className="inline-flex items-center gap-2 rounded-full border border-[#d7c3ab] bg-[#f7f2ea] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#241a13] transition hover:border-[#c19a6b] hover:bg-[#c19a6b] hover:text-[#f7f2ea]"
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
