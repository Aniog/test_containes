import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import VelmoraImage from '@/components/ui/VelmoraImage'
import StarRating from './StarRating'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/products/${product.slug}`} className="block relative overflow-hidden bg-velmora-sand aspect-[3/4] strk-placeholder">
        <VelmoraImage
          product={product}
          index={0}
          imgId={`card-${product.id}`}
          ratio="3x4"
          width="600"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Button
          onClick={(e) => {
            e.preventDefault()
            addItem(product, { quantity: 1 })
          }}
          className="absolute bottom-4 left-4 right-4 bg-velmora-ink hover:bg-velmora-espresso text-white rounded-none h-11 uppercase tracking-[0.18em] text-[11px] font-medium transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag size={15} className="mr-2" />
          Add to Cart
        </Button>
      </Link>

      <div className="pt-4 text-center">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-velmora-ink hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
        </div>
        <p className="mt-2 text-sm font-medium text-velmora-taupe">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  )
}
