import ProductCard from '@/components/product/ProductCard.jsx'

export default function ProductGrid({ items }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
