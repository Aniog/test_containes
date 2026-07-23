import ProductCard from './ProductCard'

const ProductGrid = ({ products, titleId = 'product-grid-title' }) => {
  return (
    <div aria-labelledby={titleId} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 2} />
      ))}
    </div>
  )
}

export default ProductGrid
