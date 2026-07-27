import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { products } from '@/data/store'

function BestsellersSection({ onAddToCart }) {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="An edit of quietly iconic pieces"
            description="Five customer favorites designed for daily wear, elevated gifting, and polished layering."
          />
          <p className="max-w-sm text-sm leading-7 text-stone-500">
            Premium demi-fine jewelry at a refined, accessible price point.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
