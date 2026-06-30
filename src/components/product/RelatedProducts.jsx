import { getRelatedProducts } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { ImageLoader } from "@/components/Image"

export default function RelatedProducts({ product }) {
  const related = getRelatedProducts(product, 4)

  if (related.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-surface border-t border-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-4xl text-cream mb-8 md:mb-12 text-center">
          You May Also Like
        </h2>
        <ImageLoader>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </ImageLoader>
      </div>
    </section>
  )
}
