import ProductCard from '@/components/home/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { products } from '@/data/products'

export default function BestsellersSection() {
  return (
    <section className="bg-velmora-mist px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-velmora-line pb-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="A refined edit of signatures and gifting favorites."
            description="From luminous crystal details to polished gold domes, these are the Velmora pieces our customers come back for first."
          />
          <p
            id="bestsellers-section-title"
            className="max-w-sm text-sm leading-7 text-velmora-ink/68"
          >
            Demi-fine jewelry designed to look beautifully elevated on the ear,
            neckline, or wrapped in a ribboned box.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              contextId="bestsellers"
              sectionId="bestsellers-section-title"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
