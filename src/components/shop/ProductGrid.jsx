import ProductCard from './ProductCard'

export default function ProductGrid({ products, context, sectionTitleId }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          context={`${context}-${index + 1}`}
          sectionTitleId={sectionTitleId}
        />
      ))}
    </div>
  )
}
