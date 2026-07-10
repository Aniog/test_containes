import { getRelated } from "../../data/products.js"
import ProductCard from "./ProductCard.jsx"

export default function RelatedProducts({ productId }) {
  const items = getRelated(productId, 4)
  return (
    <section className="bg-ivory-soft border-t border-hairline">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="mb-10 md:mb-12 max-w-xl">
          <p className="eyebrow">You may also love</p>
          <h2 className="display-serif text-[28px] md:text-[36px] mt-2 leading-[1.1]">
            From the same hand.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
