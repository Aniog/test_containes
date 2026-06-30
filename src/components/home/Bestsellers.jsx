import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { ImageLoader } from "@/components/Image"

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-3">
            Curated Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream">
            Bestsellers
          </h2>
        </div>

        <ImageLoader>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ImageLoader>
      </div>
    </section>
  )
}
