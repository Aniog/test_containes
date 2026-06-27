import ProductCard from "@/components/product/ProductCard"

export default function ProductGrid({ products, columns = 5, className = "" }) {
  const colsClass =
    {
      2: "grid-cols-2",
      3: "grid-cols-2 md:grid-cols-3",
      4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    }[columns] || "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"

  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center text-sm text-muted">
        No pieces match this filter yet — try widening your search.
      </div>
    )
  }

  return (
    <div className={`grid gap-x-6 gap-y-14 md:gap-y-16 ${colsClass} ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}