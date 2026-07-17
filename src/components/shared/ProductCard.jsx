import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage'
import RatingStars from './RatingStars'
import { formatCurrency } from '@/lib/format'
import { useCart } from './CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velvet-200/80 bg-cream-100 shadow-editorial transition duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden rounded-[2rem] rounded-b-none bg-rose-100">
        <div className="grid grid-cols-1">
          <div className="transition duration-500 group-hover:opacity-0">
            <ProductImage
              product={product}
              kind="primary"
              className="aspect-[4/5] w-full object-cover"
              ratio="4x3"
              width="800"
            />
          </div>
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <ProductImage
              product={product}
              kind="secondary"
              className="aspect-[4/5] w-full object-cover"
              ratio="4x3"
              width="800"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => addItem({ slug: product.slug, variant: product.variants[0] })}
          className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2 rounded-full bg-velvet-950 px-4 py-3 text-sm font-medium text-cream-50 shadow-lift transition duration-500 hover:bg-velvet-900 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 py-5 text-velvet-900">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">
            {product.category}
          </p>
          <Link
            to={`/product/${product.slug}`}
            className="font-serif text-[1.7rem] uppercase tracking-[0.22em] text-velvet-950 transition hover:text-gold-500"
          >
            <span id={`product-${product.slug}-title`}>{product.name}</span>
          </Link>
          <p id={`product-${product.slug}-desc`} className="text-sm leading-6 text-velvet-700">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-2">
          <div className="space-y-2">
            <RatingStars rating={product.rating} reviews={product.reviews} />
            <p className="text-lg font-semibold text-velvet-950">
              {formatCurrency(product.price)}
            </p>
          </div>
          <Link
            to={`/product/${product.slug}`}
            className="text-sm font-medium uppercase tracking-[0.25em] text-velvet-700 transition hover:text-gold-500"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
