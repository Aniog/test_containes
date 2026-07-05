import ProductCard from '@/components/ui/ProductCard'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-serif text-espresso">No pieces match your filters.</p>
        <p className="mt-2 text-sm text-taupe">Try adjusting your selection.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
