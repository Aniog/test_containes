import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { currency } from '@/data/storeData'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const altId = `product-${product.slug}-alt`

  useEffect(() => {
    let cleanup

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)

      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [product.slug, priority])

  return (
    <article
      ref={containerRef}
      className="group flex h-full flex-col rounded-[1.75rem] border border-velmora-line bg-velmora-panel/60 p-3 text-velmora-ivory shadow-soft transition duration-300 hover:-translate-y-1 hover:border-velmora-gold/40 hover:shadow-luxury"
    >
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-[1.35rem]">
        <div className="absolute left-4 top-4 z-10 rounded-full border border-velmora-line bg-velmora-bg/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-velmora-gold backdrop-blur-sm">
          {product.category}
        </div>
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
          data-strk-img-id={`product-primary-${product.slug}-f6a2`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={priority ? '900' : '700'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img
          alt={`${product.name} alternate`}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          data-strk-img-id={`product-secondary-${product.slug}-0ab4`}
          data-strk-img={`[${altId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={priority ? '900' : '700'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </Link>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-velmora-taupe">
              {product.material}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="mt-3 font-display text-2xl uppercase tracking-[0.25em] text-velmora-ivory transition hover:text-velmora-gold"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm uppercase tracking-[0.24em] text-velmora-gold">
            {currency.format(product.price)}
          </p>
        </div>

        <p id={descId} className="mt-4 text-sm leading-7 text-velmora-taupe">
          {product.shortDescription}
        </p>
        <p id={altId} className="sr-only">
          Editorial alternate angle of {product.name} worn in soft warm light.
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-velmora-taupe">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
            <span>
              {product.rating} · {product.reviews} reviews
            </span>
          </div>
          <span>{product.accent}</span>
        </div>

        <button
          type="button"
          onClick={() => addItem(product, 'Gold Tone', 1)}
          className="mt-6 flex items-center justify-center gap-2 rounded-full border border-velmora-gold bg-velmora-gold px-4 py-3 text-xs uppercase tracking-[0.3em] text-velmora-ink transition hover:bg-velmora-goldDeep"
        >
          <ShoppingBag className="h-4 w-4" />
          Quick Add
        </button>
      </div>
    </article>
  )
}

export default ProductCard
