import ProductCard from '@/components/store/ProductCard'

const ProductGrid = ({ products, columns = 'five' }) => {
  const gridClassName =
    columns === 'four'
      ? 'grid gap-8 md:grid-cols-2 xl:grid-cols-4'
      : 'grid gap-8 md:grid-cols-2 xl:grid-cols-5'

  return (
    <div className={gridClassName}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index === 0}
        />
      ))}
    </div>
  )
}

export default ProductGrid
