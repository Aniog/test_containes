import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import ProductImage from './ProductImage'

function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm shadow-stone-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-950/10">
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden rounded-[2rem] rounded-b-none bg-stone-100">
        <ProductImage
          product={product}
          image={product.images[0]}
          idPrefix="product-card-primary"
          ratio="4x5"
          width="800"
          className="transition duration-500 group-hover:opacity-0"
          sizes="h-[320px] w-full object-cover sm:h-[360px]"
          priority={priority}
        />
        <ProductImage
          product={product}
          image={product.images[1] || product.images[0]}
          idPrefix="product-card-secondary"
          ratio="4x5"
          width="800"
          className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-100"
          sizes="h-[320px] w-full object-cover sm:h-[360px]"
        />
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-stone-900">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">{product.category}</p>
          <p className="text-sm font-medium text-stone-900">${product.price}</p>
        </div>

        <Link to={`/product/${product.slug}`} className="mt-3 block">
          <h3 className="font-serif-display text-lg uppercase tracking-[0.26em] text-stone-950 transition duration-300 group-hover:text-amber-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-6 text-stone-600">{product.shortDescription}</p>

        <div className="mt-4 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-sm text-stone-500">{product.rating} ({product.reviewCount})</span>
        </div>

        <div className="mt-5">
          <Button
            className="w-full gap-2"
            onClick={() => addItem(product, product.variants[0], 1)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
