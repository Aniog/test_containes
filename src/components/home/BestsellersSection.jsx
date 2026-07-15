import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/data/storeData'

export default function BestsellersSection() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Bestsellers"
        title="The pieces everyone reaches for first."
        description="Quietly luxurious silhouettes designed to slip into everyday dressing and make gifting feel elevated."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 2} />
        ))}
      </div>
    </section>
  )
}
