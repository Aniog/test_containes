import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { StrkImage } from '@/components/StrkImage'
import Stars from '@/components/Stars'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className, ratio = '4x3' }) {
  const { addItem, openCart } = useCart()
  const titleId = `product-${product.id}-name`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, 'gold', 1)
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden border border-line/50 bg-mocha">
        <div className="aspect-[4/5]">
          <StrkImage
            id={`product-card-${product.id}`}
            query={`[${titleId}] ${product.imageAlt} warm gold jewelry on dark neutral background editorial`}
            ratio={ratio}
            width={700}
            alt={product.imageAlt}
            className="transition-opacity duration-700 ease-out group-hover:opacity-0"
          />
        </div>
        <div className="absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100">
          <StrkImage
            id={`product-card-${product.id}-hover`}
            query={`[${titleId}] ${product.hoverAlt} gold jewelry lifestyle photography`}
            ratio={ratio}
            width={700}
            alt={product.hoverAlt}
            className="scale-105 transition-transform duration-700 ease-out group-hover:scale-100"
          />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-goldlight px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-inkonaccent">
            {product.badge}
          </span>
        )}
        {product.isNew && !product.badge && (
          <span className="absolute left-3 top-3 border border-gold/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-gold">
            New
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 text-[11px] font-semibold uppercase tracking-widest2 text-ivory backdrop-blur-sm transition-all duration-300 ease-out hover:bg-gold hover:text-inkonaccent focus-visible:translate-y-0 group-hover:translate-y-0"
          aria-label={`Quick add ${product.name} to bag`}
        >
          <Plus className="h-3.5 w-3.5" />
          Add to Bag
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest3 text-taupe">{product.category}</p>
        <h3
          id={titleId}
          className="mt-1.5 font-serif text-lg font-medium uppercase tracking-[0.14em] text-ivory transition-colors duration-300 group-hover:text-gold"
        >
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size="h-3 w-3" />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium tracking-wide text-sand">${product.price}</p>
      </div>
    </Link>
  )
}
