import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useCart } from '@/context/CartContext'
import { slugify } from '@/lib/slugify'
import { getProductImageFallback, getProductGalleryFallback } from '@/lib/productImages'
import strkImgConfig from '@/strk-img-config.json'

export function getProductFields(product) {
  return product?.data ?? product ?? {}
}

export default function ProductCard({ product, showQuickAdd = true }) {
  const fields = getProductFields(product)
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  const name = fields.name || 'Untitled'
  const price = fields.price ?? 0
  const slug = fields.slug || slugify(name)
  const category = fields.category || 'Jewelry'
  const rating = fields.rating || 4.8
  const reviews = fields.reviewCount || 12
  const imageQuery = fields.imageQuery || name
  const hoverQuery = fields.hoverImageQuery || imageQuery
  const fallbackImage = fields.imageUrl || getProductImageFallback(slug)
  const hoverImage = fields.hoverImageUrl || getProductGalleryFallback(slug).alts[0] || fallbackImage

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id: product.id, name, slug, price, imageQuery, imageUrl: fallbackImage }, 'gold', 1)
  }

  return (
    <Link
      ref={cardRef}
      to={`/products/${slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-velmora-cream-dark">
        <img
          src={fallbackImage}
          alt={name}
          data-strk-img-id={`product-${product.id}-card`}
          data-strk-img={`[product-${product.id}-name] [category-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {hoverImage && hoverImage !== fallbackImage && (
          <img
            src={hoverImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <span id={`category-${product.id}`} className="sr-only">{category}</span>

        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 left-3 right-3 flex translate-y-4 items-center justify-center gap-2 rounded-md bg-velmora-cream py-3 text-sm font-medium uppercase tracking-wider text-velmora-espresso opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        )}
      </div>

      <div className="mt-4 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-taupe">
            {rating} ({reviews})
          </span>
        </div>
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm uppercase tracking-[0.14em] text-velmora-espresso"
        >
          {name}
        </h3>
        <p className="text-sm font-medium text-velmora-espresso">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
