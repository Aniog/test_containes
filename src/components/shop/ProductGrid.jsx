import ProductCard from '@/components/shop/ProductCard'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-border bg-card py-20 text-center">
        <p className="font-serif text-xl text-foreground">No pieces found</p>
        <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
