import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/data/helpers'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return (
    <article
      ref={cardRef}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-pearl/80 text-velmora-ink shadow-velmora transition duration-300 hover:-translate-y-1 hover:shadow-velmora-lg"
    >
      <Link to={`/product/${product.id}`} className="relative overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cloud">
          <p id={`product-card-${product.id}-category`} className="sr-only">
            {product.category}
          </p>
          <p id={`product-card-${product.id}-name`} className="sr-only">
            {product.name}
          </p>
          <p id={`product-card-${product.id}-description`} className="sr-only">
            {product.description}
          </p>
          <p id={`product-card-${product.id}-material`} className="sr-only">
            {product.material}
          </p>
          <p id={`product-card-${product.id}-main-shot`} className="sr-only">
            Dark neutral background luxury still life
          </p>
          <p id={`product-card-${product.id}-detail-shot`} className="sr-only">
            Detail shot editorial warm close up
          </p>
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            alt={product.name}
            data-strk-img-id={product.imageId}
            data-strk-img={`[product-card-${product.id}-description] [product-card-${product.id}-name] [product-card-${product.id}-material] [product-card-${product.id}-category] [product-card-${product.id}-main-shot]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-105"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            alt={`${product.name} detail`}
            data-strk-img-id={product.secondaryImageId}
            data-strk-img={`[product-card-${product.id}-description] [product-card-${product.id}-name] [product-card-${product.id}-material] [product-card-${product.id}-category] [product-card-${product.id}-detail-shot]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addItem(product, product.colors[0], 1)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-velmora-line/60 bg-velmora-ivory/95 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-velmora-ink backdrop-blur hover:bg-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-mist">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display text-[1.65rem] uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-bronze">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm leading-6 text-velmora-mist">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-velmora-line pt-4 text-sm">
          <span className="font-medium text-velmora-ink">{formatPrice(product.price)}</span>
          <span className="text-velmora-mist">{product.material}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
