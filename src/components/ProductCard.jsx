import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'

function ProductCard({ product, imagePrefix, showRating = true }) {
  const { addToCart } = useCart()
  const titleId = `${imagePrefix}-title`
  const primaryImage = product.cardImage || product.galleryImages?.[0] || ''
  const secondaryImage = product.hoverImage || product.galleryImages?.[1] || primaryImage

  return (
    <article className="group rounded-[2rem] border border-stone-300/60 bg-stone-50 p-4 shadow-[0_18px_50px_rgba(28,25,23,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(28,25,23,0.12)]">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-stone-200">
        <Link aria-label={product.name} to={`/product/${product.slug}`}>
          <div className="aspect-[4/5]">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              src={primaryImage}
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              src={secondaryImage}
            />
          </div>
        </Link>

        <button
          type="button"
          className="absolute bottom-4 left-4 right-4 rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-stone-100 opacity-100 transition duration-300 hover:bg-amber-200 hover:text-stone-950 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={() => addToCart(product, product.tones[0], 1)}
        >
          Add to Cart
        </button>
      </div>

      <div className="space-y-3 px-1 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/product/${product.slug}`}>
              <h3 className="text-sm uppercase tracking-[0.35em] text-stone-950 transition group-hover:text-amber-800">
                {product.name}
              </h3>
            </Link>
            <p className="mt-3 text-sm leading-6 text-stone-600">{product.shortDescription}</p>
          </div>
          <p className="whitespace-nowrap text-sm font-medium text-stone-900">${product.price}</p>
        </div>
        {showRating ? <StarRating rating={product.rating} reviews={product.reviews} /> : null}
      </div>
    </article>
  )
}

export default ProductCard
