import ProductCard from '@/components/ProductCard'

const RelatedProducts = ({ products }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default RelatedProducts
