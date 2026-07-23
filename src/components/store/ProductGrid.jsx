import ProductCard from './ProductCard.jsx'

const ProductGrid = ({ products, className = 'md:grid-cols-2 xl:grid-cols-3' }) => {
  return (
    <div className={`grid gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
