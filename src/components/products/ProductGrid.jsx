import ProductCard from './ProductCard'

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          priority={index === 0}
        />
      ))}
    </div>
  )
}

export default ProductGrid
