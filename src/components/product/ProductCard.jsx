import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const imageQuery = `[${product.descId}] [${product.titleId}]`

  const handleQuickAdd = (event) => {
    event.preventDefault()
    addToCart(product)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block text-velmora-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-champagne"
    >
      <article className="relative overflow-hidden bg-velmora-cream">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen">
          <ProductImage
            imgId={product.imgId}
            query={imageQuery}
            ratio="4x3"
            width="900"
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            imgId={product.hoverImgId}
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="4x3"
            width="900"
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <button
            type="button"
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-cream opacity-0 shadow-soft transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
        <div className="space-y-2 border-b border-velmora-linen py-5">
          <div className="flex items-center justify-between gap-4">
            <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-luxury text-velmora-ink">
              {product.name}
            </h3>
            <p className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</p>
          </div>
          <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-sage">
            {product.description}
          </p>
        </div>
      </article>
    </Link>
  )
}
