import ProductCard from "@/components/ui/ProductCard"
import { PRODUCTS } from "@/data/products"

export default function RelatedProducts({ currentId, category }) {
  const related = PRODUCTS.filter(
    (p) => p.id !== currentId && p.category === category,
  )
    .concat(
      PRODUCTS.filter(
        (p) => p.id !== currentId && p.category !== category,
      ),
    )
    .slice(0, 4)

  return (
    <section className="border-t border-hairline bg-canvas py-20 md:py-28">
      <div className="container-content">
        <div className="mb-12 text-center">
          <p className="eyebrow">You may also love</p>
          <h2
            className="display-lg mt-3 text-ink text-balance"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            More from the edit.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
