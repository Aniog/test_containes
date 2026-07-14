import { products } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"

export function RelatedProducts({ current, ids }) {
  const items = (ids || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .filter((p) => p.id !== current?.id)
    .slice(0, 4)

  if (items.length === 0) return null

  return (
    <section
      aria-labelledby="related-title"
      className="container-x border-t border-taupe-200 py-20 md:py-24"
    >
      <div className="mb-10 text-center md:mb-12">
        <p className="eyebrow">You may also love</p>
        <h2
          id="related-title"
          className="mt-3 font-serif text-3xl text-ink-500 sm:text-4xl"
        >
          You may also like
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
