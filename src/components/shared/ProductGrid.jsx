import ProductCard from './ProductCard.jsx'

function ProductGrid({ products, columns = 'default' }) {
  const gridClasses =
    columns === 'compact'
      ? 'grid gap-8 sm:grid-cols-2 xl:grid-cols-3'
      : 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'

  return (
    <div className={gridClasses}>
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} priority={index < 2} />
      ))}
    </div>
  )
}

export default ProductGrid
