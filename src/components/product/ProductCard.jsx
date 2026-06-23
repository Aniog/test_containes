import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'
import StarRating from '@/components/common/StarRating.jsx'

const ProductCard = ({ product, context = 'grid' }) => {
  const { addToCart } = useCart()
  const titleId = `${context}-${product.slug}-title`
  const descId = `${context}-${product.slug}-desc`
  const hoverId = `${context}-${product.slug}-hover`
  const primaryImageId = `product-${product.slug}-primary`
  const secondaryImageId = `product-${product.slug}-secondary`

  return (
    <article className="group rounded-[1.75rem] border border-hairline-light bg-surface p-3 text-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-editorial sm:p-4">
      <div className="relative overflow-hidden rounded-[1.3rem] bg-warm-card">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <ProductImage
              imageId={primaryImageId}
              configKey={`pdp-${product.slug}-gallery-0`}
              query={`[${descId}] [${titleId}]`}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <ProductImage
              imageId={secondaryImageId}
              configKey={`pdp-${product.slug}-gallery-1`}
              query={`[${hoverId}] [${titleId}]`}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 hidden items-center justify-center gap-2 rounded-full border border-hairline-dark bg-panel-dark px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition duration-300 hover:bg-base md:flex"
        >
          <ShoppingBag className="h-4 w-4" />
          Quick Add
        </button>
      </div>

      <div className="space-y-4 px-1 pb-1 pt-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Link to={`/product/${product.slug}`}>
                <h3 id={titleId} className="font-display text-xl uppercase tracking-product text-ink transition group-hover:text-accent sm:text-2xl">
                  {product.name}
                </h3>
              </Link>
              <p id={descId} className="text-sm leading-6 text-ink/70">
                {product.cardDescription}
              </p>
              <p id={hoverId} className="sr-only">
                {product.hoverNote}
              </p>
            </div>
            <p className="pt-1 text-sm font-medium uppercase tracking-[0.18em] text-ink">
              {formatPrice(product.price)}
            </p>
          </div>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-hairline-light bg-transparent px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink transition duration-300 hover:border-accent hover:bg-surface-soft md:hidden"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
