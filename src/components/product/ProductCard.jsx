import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import strkImgConfig from '@/strk-img-config.json'

const imageSrc = (imageId) => strkImgConfig[imageId]?.results?.[0]?.url

const ProductCard = ({ product, compact = false }) => {
  const { addItem } = useCart()

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-sand shadow-sm transition duration-500 ease-velmora group-hover:shadow-velmora">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-velmora group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src={imageSrc(product.imgId)}
            />
            <img
              alt={`${product.name} worn`}
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 ease-velmora group-hover:scale-100 group-hover:opacity-100"
              data-strk-img-id={product.hoverImgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src={imageSrc(product.hoverImgId)}
            />
          </div>
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 bg-velmora-pearl/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-nav text-velmora-ink backdrop-blur">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          className="absolute inset-x-3 bottom-3 translate-y-3 bg-velmora-ink px-4 py-3 text-[0.68rem] font-bold uppercase tracking-nav text-velmora-pearl opacity-0 transition duration-300 ease-velmora hover:bg-velmora-champagne hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addItem(product)}
        >
          <span className="inline-flex items-center justify-center gap-2">
            <ShoppingBag className="h-3.5 w-3.5" /> Quick add
          </span>
        </button>
      </div>

      <div className={`${compact ? 'pt-4' : 'pt-5'} text-velmora-ink`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 id={product.titleId} className="font-serif text-lg uppercase leading-6 tracking-product text-velmora-ink transition hover:text-velmora-clay">
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-clay">
              {product.description}
            </p>
          </div>
          <p className="whitespace-nowrap text-sm font-semibold text-velmora-ink">${product.price}</p>
        </div>
        {!compact && (
          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-velmora-clay">
            <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
            {product.rating} · {product.reviews} reviews
          </div>
        )}
      </div>
    </article>
  )
}

export default ProductCard
