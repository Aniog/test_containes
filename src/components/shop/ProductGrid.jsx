import { ProductCard } from "@/components/ui/ProductCard"

export function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-md border border-dashed border-border">
        <p className="text-sm text-muted-foreground">
          No products match your filters.
        </p>
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
