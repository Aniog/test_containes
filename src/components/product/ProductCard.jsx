import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { StrkImage } from '@/components/ui/StrkImage'
import StarRating from '@/components/ui/StarRating'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const titleId = `pc-${product.id}-title`
  const tagId = `pc-${product.id}-tag`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: 'Gold', quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* primary image */}
        <StrkImage
          imgId={`${product.images[0].id}-card`}
          query={`[${tagId}] [${titleId}] gold jewelry editorial`}
          ratio="4x5"
          width={600}
          alt={product.images[0].alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* hover second image */}
        <StrkImage
          imgId={`${product.images[1].id}-card`}
          query={`[${tagId}] [${titleId}] gold jewelry worn detail`}
          ratio="4x5"
          width={600}
          alt={product.images[1].alt}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-ink/90 text-cream py-3.5 text-[11px] uppercase tracking-widest2 font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag style={{ width: 14, height: 14 }} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p id={tagId} className="text-[10px] uppercase tracking-widest2 text-muted mb-1">
          {product.subcategory}
        </p>
        <h3
          id={titleId}
          className="font-serif text-xl text-charcoal uppercase tracking-widest2 leading-snug"
        >
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-charcoal font-sans text-sm tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
