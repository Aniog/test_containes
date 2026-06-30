import ProductCard from "@/components/product/ProductCard"
import { ImageLoader } from "@/components/Image"

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-xl text-cream mb-2">No pieces match your filters.</p>
        <p className="text-sm text-cream-muted">Try adjusting your selections to discover more.</p>
      </div>
    )
  }

  return (
    <ImageLoader>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ImageLoader>
  )
}
