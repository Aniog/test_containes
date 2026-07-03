import ProductCard from '@/components/shared/ProductCard'
import { getRelatedProducts } from '@/data/products'

export default function RelatedProducts({ product }) {
  const items = getRelatedProducts(product, 4)
  if (items.length === 0) return null
  return (
    <section className="py-20 lg:py-24 border-t border-ink-900/10">
      <div className="container-x">
        <div className="mb-10 lg:mb-12 text-center">
          <span className="eyebrow">You may also like</span>
          <h2 className="mt-3 font-serif text-ink-900 text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1]">
            Pairs beautifully with
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
