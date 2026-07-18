import { products } from '@/data/products.js'
import ProductCard from '@/components/product/ProductCard.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'

export default function BestsellersSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div id="product-card-section-title">
            <SectionHeading
              eyebrow="Bestsellers"
              title="The pieces our clients reach for first"
              description="A considered edit of warm gold layers, everyday huggies, and gift-ready silhouettes designed to feel elevated from morning to evening."
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--color-muted-dark)]">
            Premium, polished, and designed to move easily between gifting and self-purchase.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
