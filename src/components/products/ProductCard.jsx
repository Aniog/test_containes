import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../data/products'
import ProductImage from './ProductImage'

export default function ProductCard({ product, onAdd, onOpen, compact = false }) {
  return (
    <article className="group bg-velmora-ivory text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-parchment">
        <button
          type="button"
          onClick={() => onOpen(product.id)}
          className="block w-full text-left"
          aria-label={`View ${product.name}`}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <ProductImage
              product={product}
              imageId={product.imageId}
              ratio="3x4"
              width="700"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            />
            <ProductImage
              product={product}
              imageId={product.hoverImageId}
              ratio="3x4"
              width="700"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
        </button>
        <button
          type="button"
          onClick={() => onAdd(product, 1)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-ink px-4 py-3 text-xs font-bold uppercase tracking-velmora text-velmora-ivory opacity-0 shadow-velmora-card transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" /> Quick Add
        </button>
      </div>

      <div className={compact ? 'pt-4' : 'pt-5'}>
        <button
          type="button"
          onClick={() => onOpen(product.id)}
          className="block text-left font-serif text-xl font-semibold uppercase tracking-velmora-wide text-velmora-ink transition hover:text-velmora-umber"
        >
          <span id={product.queryIds.title}>{product.name}</span>
        </button>
        <p id={product.queryIds.desc} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-umber">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm font-bold tracking-[0.16em] text-velmora-ink">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAdd(product, 1)}
            className="border border-velmora-gold/60 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-velmora text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-ink"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
