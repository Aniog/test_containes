import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-xl text-taupe">No pieces match your selection.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
