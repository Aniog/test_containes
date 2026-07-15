import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'

const BestsellersSection = ({ products }) => {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Bestsellers"
            title="An edit of polished icons"
            description="Designed to feel giftable, wearable, and quietly elevated from morning to evening."
          />
          <p className="max-w-sm text-sm leading-7 text-stone-400">
            Five signature pieces chosen for high repeat wear, warm editorial finishes, and premium detail at an accessible price.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
