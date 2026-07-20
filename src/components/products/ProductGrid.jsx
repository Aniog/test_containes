import ProductCard from './ProductCard'
import { cn } from '../../lib/utils'

export default function ProductGrid({ className, contextKey, products, sectionTitleId }) {
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {products.map((product) => (
        <ProductCard
          key={`${contextKey}-${product.id}`}
          contextKey={contextKey}
          product={product}
          sectionTitleId={sectionTitleId}
        />
      ))}
    </div>
  )
}
