import { ProductCard } from '@/components/ui/ProductCard'

export function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-2xl text-velmora-dark mb-3">No pieces match your selection.</p>
        <p className="text-sm text-velmora-muted">Try adjusting your filters to see more.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
