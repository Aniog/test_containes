import ProductCard from './ProductCard'

export default function ProductRow({ products }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 2} />
      ))}
    </div>
  )
}
