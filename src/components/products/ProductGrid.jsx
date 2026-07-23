import ProductCard from './ProductCard'

export default function ProductGrid({ products, onAddToCart, imageScope }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          imageScope={`${imageScope}-${index}`}
          priority={index < 2}
        />
      ))}
    </div>
  )
}
