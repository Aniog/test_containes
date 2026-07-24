import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '@/context/CartContext.jsx'
import ImageTag from '@/components/ui/ImageTag.jsx'
import Stars from '@/components/ui/Stars.jsx'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-[2rem] border border-[#e5d5c8] bg-white/75 p-4 text-[#241d1f] shadow-[0_16px_40px_rgba(36,29,31,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(36,29,31,0.12)]"
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-[#efe3d6]">
        <Link to={`/product/${product.slug}`} className="block">
          <ImageTag
            alt={product.name}
            imgId={hovered ? product.hoverImageId : product.imageId}
            query={`[${descId}] [${titleId}] [${categoryId}]`}
            ratio="3x4"
            width="720"
            className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product, product.tones[0], 1)}
            className="w-full rounded-full border border-[#d9c7b7] bg-[#f6f0ea]/95 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#241d1f] backdrop-blur transition hover:border-[#b78b54] hover:text-[#b78b54]"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p
            id={categoryId}
            className="text-[11px] uppercase tracking-[0.32em] text-[#8a6c5d]"
          >
            {product.category}
          </p>
          <span className="rounded-full bg-[#efe3d6] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#6d5a57]">
            {product.badge}
          </span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={titleId}
            className="font-['Cormorant_Garamond'] text-[1.9rem] uppercase tracking-[0.24em] text-[#241d1f]"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 text-sm leading-6 text-[#6d5a57]">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <Stars rating={product.rating} reviews={product.reviews} />
          <span className="text-lg font-semibold text-[#241d1f]">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
