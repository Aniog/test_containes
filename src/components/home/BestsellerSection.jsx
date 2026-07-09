import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { seedProducts } from '@/data/products'

const BestsellerSection = () => (
  <section className="bg-velmora-ivory py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Bestsellers"
        title="The pieces everyone keeps returning to"
        description="Five signature styles with a polished finish, gift-ready packaging, and premium details that make everyday styling feel special."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {seedProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  </section>
)

export default BestsellerSection
