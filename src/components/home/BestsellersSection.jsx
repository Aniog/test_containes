import { products } from '@/data/store.js'
import ProductCard from '@/components/shared/ProductCard.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'

function BestsellersSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Bestsellers"
          title="An edit of signature gold pieces"
          description="Five of our most-loved styles, chosen for easy gifting and everyday repeat wear."
        />
        <p className="max-w-md text-sm leading-7 text-stone-600">
          Premium-feeling finishes, sculptural lines, and warm tones that make every look feel complete.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default BestsellersSection
