import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useStore } from '@/context/StoreContext'
import { formatPrice } from '@/lib/format'
import ProductImage from './ProductImage'

const ProductCard = ({ product }) => {
  const { addToCart } = useStore()
  const baseId = `product-card-${product.slug}`

  return (
    <article className="group overflow-hidden rounded-[28px] border border-velvet/10 bg-white shadow-soft transition duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden bg-ivory">
        <Link to={`/product/${product.slug}`} className="block">
          <ProductImage
            alt={product.name}
            imageId={`${baseId}-primary-image`}
            query={`[${baseId}-type] [${baseId}-name] [${baseId}-category]`}
            ratio="4x3"
            width={800}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
          />
          <ProductImage
            alt={`${product.name} alternate view`}
            imageId={`${baseId}-secondary-image`}
            query={`[${baseId}-description] [${baseId}-name] [${baseId}-category]`}
            ratio="4x3"
            width={800}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-velvet/70 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-ivory backdrop-blur-sm">
            {product.badge}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute inset-x-4 bottom-4 z-10 flex translate-y-5 items-center justify-center gap-2 rounded-full bg-ivory px-4 py-3 text-xs uppercase tracking-eyebrow text-velvet opacity-0 shadow-soft transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="space-y-3 px-5 py-5 text-velvet">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p id={`${baseId}-category`} className="text-[10px] uppercase tracking-eyebrow text-velvet/45">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={`${baseId}-name`}
                className="font-serif text-xl uppercase tracking-product text-velvet transition duration-300 hover:text-gold-deep"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm text-velvet/75">{formatPrice(product.price)}</p>
        </div>
        <p id={`${baseId}-type`} className="text-sm text-velvet/60">
          {product.type}
        </p>
        <p id={`${baseId}-description`} className="text-sm leading-6 text-velvet/65">
          {product.shortDescription}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
