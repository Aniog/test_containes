import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

const BestsellersSection = ({ products }) => {
  return (
    <section className="bg-[var(--color-surface)] px-5 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces customers reach for first"
            description="Warm-toned staples and gift-ready signatures designed to stack beautifully and wear effortlessly."
          />
          <p className="max-w-sm border-l border-[var(--color-border-subtle)] pl-6 text-sm leading-7 text-[var(--color-text-secondary)]">
            Lightweight silhouettes, rich finishes, and premium packaging across an accessible everyday range.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
